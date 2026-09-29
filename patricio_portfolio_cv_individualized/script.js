const root = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = [...document.querySelectorAll('.nav-menu a')];
const progressBar = document.querySelector('.scroll-progress span');
const siteHeader = document.querySelector('.site-header');

// Theme
const savedTheme = localStorage.getItem('portfolio-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = savedTheme || (systemDark ? 'dark' : 'light');
updateThemeColor();

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  updateThemeColor();
});

function updateThemeColor() {
  document.querySelector('meta[name="theme-color"]').setAttribute(
    'content',
    root.dataset.theme === 'dark' ? '#0e0f0d' : '#f5f5f1'
  );

  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${nextTheme} mode`;
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
}

// Mobile navigation
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', closeMobileNav));
document.addEventListener('click', event => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) closeMobileNav();
});
function closeMobileNav() {
  navMenu.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
    closeMobileNav();
    navToggle.focus();
  }
});

// Scroll progress
function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = `${percent}%`;

  siteHeader.classList.toggle('is-scrolled', window.scrollY > 18);
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// Reveal
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

// Active navigation
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(section => sectionObserver.observe(section));
}

// Rotating role
const roleElement = document.getElementById('rotatingRole');
const roles = ['web & mobile experiences.', 'clear user interfaces.', 'practical digital tools.', 'smarter workflows.'];
let roleIndex = 0;
setInterval(() => {
  const out = roleElement.animate(
    [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }],
    { duration: 300, fill: 'forwards', easing: 'cubic-bezier(.4,0,.2,1)' }
  );
  out.onfinish = () => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
    roleElement.animate(
      [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 360, fill: 'forwards', easing: 'cubic-bezier(.16,1,.3,1)' }
    );
  };
}, 3000);


// Project filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    projectCards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

// Design filters
const designButtons = document.querySelectorAll('.design-filter');
const designCards = document.querySelectorAll('[data-design-category]');
designButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.designFilter;
    designButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    designCards.forEach(card => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.designCategory !== filter);
    });
  });
});

// Project modal
const projectModal = document.getElementById('projectModal');
const projectTitle = document.getElementById('projectModalTitle');
const projectRole = document.getElementById('projectModalRole');
const projectSummary = document.getElementById('projectSummary');
const projectTech = document.getElementById('projectTech');
const projectMainImage = document.getElementById('projectMainImage');
const projectThumbs = document.getElementById('projectThumbs');
const projectPrivacyNote = document.getElementById('projectPrivacyNote');
const privateWorkflow = document.getElementById('privateWorkflow');
const projectLinks = document.getElementById('projectLinks');
const projectLiveLink = document.getElementById('projectLiveLink');
const projectImageShell = document.getElementById('projectImageShell');
const projectPrev = document.getElementById('projectPrev');
const projectNext = document.getElementById('projectNext');
const projectSlideCount = document.getElementById('projectSlideCount');
const projectImageTools = document.getElementById('projectImageTools');
const projectZoomOpen = document.getElementById('projectZoomOpen');

let projectGalleryImages = [];
let projectGalleryIndex = 0;
let currentProjectSlug = '';

function openProject(card) {
  const slug = card.dataset.project;
  currentProjectSlug = slug;
  const isPrivate = card.dataset.private === 'true';
  const liveMode = card.dataset.liveMode || 'none';
  const liveUrl = card.dataset.live || '';

  projectTitle.textContent = card.dataset.title;
  projectRole.textContent = card.dataset.role;
  projectSummary.textContent = card.dataset.summary;

  projectTech.innerHTML = '';
  card.dataset.tech.split('|').forEach(item => {
    const chip = document.createElement('span');
    chip.textContent = item;
    projectTech.appendChild(chip);
  });

  projectThumbs.innerHTML = '';
  projectPrivacyNote.hidden = true;
  privateWorkflow.hidden = !isPrivate;
  projectModal.classList.toggle('is-private-project', isPrivate);
  projectModal.dataset.project = slug;

  if (isPrivate) {
    projectImageShell.hidden = true;
    projectImageTools.hidden = true;
    projectMainImage.hidden = true;
    projectMainImage.removeAttribute('tabindex');
    projectMainImage.removeAttribute('role');
    projectMainImage.removeAttribute('aria-label');
    projectMainImage.removeAttribute('src');
    projectMainImage.alt = '';
    projectThumbs.hidden = true;
    projectGalleryImages = [];
    projectGalleryIndex = 0;
    updateProjectGalleryControls();
  } else {
    projectImageShell.hidden = false;
    projectImageTools.hidden = false;
    projectMainImage.hidden = false;
    projectMainImage.tabIndex = 0;
    projectMainImage.setAttribute('role', 'button');
    projectMainImage.setAttribute('aria-label', 'Open current project screenshot in zoom viewer');
    const gallery = card.dataset.projectGallery;
    projectGalleryImages = gallery
      ? gallery.split('|').filter(Boolean)
      : [1, 2, 3].map(i => `assets/projects/${slug}-${i}.svg`);
    projectGalleryIndex = 0;
    projectThumbs.hidden = false;
    showProjectImage(0);
  }

  projectLinks.hidden = liveMode === 'none';
  if (liveMode !== 'none') {
    if (liveUrl) {
      projectLiveLink.href = liveUrl;
      projectLiveLink.textContent = slug === 'imprentax' ? 'Visit live system ↗' : 'Live demo ↗';
      projectLiveLink.classList.remove('disabled-link');
      projectLiveLink.removeAttribute('aria-disabled');
    } else {
      projectLiveLink.href = '#';
      projectLiveLink.textContent = 'Live demo — add link';
      projectLiveLink.classList.add('disabled-link');
      projectLiveLink.setAttribute('aria-disabled', 'true');
    }
  }

  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
  projectModal.querySelector('.close-modal').focus();
}

function showProjectImage(index) {
  if (!projectGalleryImages.length) return;

  projectGalleryIndex = (index + projectGalleryImages.length) % projectGalleryImages.length;
  const src = projectGalleryImages[projectGalleryIndex];
  projectMainImage.src = src;
  projectMainImage.alt = `${projectTitle.textContent} — image ${projectGalleryIndex + 1} of ${projectGalleryImages.length}`;

  renderProjectThumbs();
  updateProjectGalleryControls();
}

function renderProjectThumbs() {
  projectThumbs.innerHTML = '';

  if (!projectGalleryImages.length) return;

  let indexes;
  if (['imprentax', 'casa-carmina', 'baguette-bites'].includes(currentProjectSlug) && projectGalleryImages.length > 3) {
    // Keep screenshot galleries clean: show only the next 3 previews.
    indexes = [1, 2, 3].map(offset =>
      (projectGalleryIndex + offset) % projectGalleryImages.length
    );
  } else {
    indexes = projectGalleryImages.map((_, index) => index);
  }

  indexes.forEach(index => {
    const src = projectGalleryImages[index];
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = `project-thumb${index === projectGalleryIndex ? ' active' : ''}`;
    thumb.setAttribute('aria-label', `Show project image ${index + 1}`);
    thumb.innerHTML = `<img src="${src}" alt="">`;
    thumb.addEventListener('click', () => showProjectImage(index));
    projectThumbs.appendChild(thumb);
  });
}

function changeProjectImage(direction) {
  if (projectGalleryImages.length <= 1) return;
  showProjectImage(projectGalleryIndex + direction);
}

function updateProjectGalleryControls() {
  const hasGallery = projectGalleryImages.length > 1;
  projectPrev.hidden = !hasGallery;
  projectNext.hidden = !hasGallery;
  projectSlideCount.hidden = !hasGallery;
  projectSlideCount.textContent = hasGallery
    ? `${projectGalleryIndex + 1} / ${projectGalleryImages.length}`
    : '';
}

projectPrev.addEventListener('click', () => changeProjectImage(-1));
projectNext.addEventListener('click', () => changeProjectImage(1));

function closeProject() {
  projectModal.classList.remove('is-open', 'is-private-project');
  projectModal.setAttribute('aria-hidden', 'true');
  body.classList.remove('modal-open');
  projectGalleryImages = [];
  projectGalleryIndex = 0;
  currentProjectSlug = '';
  delete projectModal.dataset.project;
  updateProjectGalleryControls();
}

projectCards.forEach(card => card.addEventListener('click', () => openProject(card)));
document.querySelectorAll('[data-close-project]').forEach(el => el.addEventListener('click', closeProject));

// Shared media viewer
const mediaModal = document.getElementById('mediaModal');
const mediaImage = document.getElementById('mediaImage');
const mediaTitle = document.getElementById('mediaModalTitle');
const mediaSubtitle = document.getElementById('mediaModalSubtitle');
const openMedia = document.getElementById('openMedia');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const zoomReset = document.getElementById('zoomReset');
const zoomLevel = document.getElementById('zoomLevel');
const mediaStage = document.getElementById('mediaStage');
const mediaPrev = document.getElementById('mediaPrev');
const mediaNext = document.getElementById('mediaNext');
const mediaSlideCount = document.getElementById('mediaSlideCount');
const mediaAlbumPreviews = document.getElementById('mediaAlbumPreviews');

let scale = 1;
let mediaGallery = [];
let mediaGalleryIndex = 0;
const MIN_SCALE = 0.5;
const MAX_SCALE = 3;
const STEP = 0.25;


function openProjectZoomViewer() {
  if (!projectGalleryImages.length || !projectMainImage.src) return;

  mediaGallery = [...projectGalleryImages];
  mediaGalleryIndex = projectGalleryIndex;
  mediaTitle.textContent = projectTitle.textContent || 'Project screenshot';
  mediaSubtitle.textContent = mediaGallery.length > 1
    ? `Project screenshots · ${mediaGallery.length}-image gallery`
    : 'Project screenshot';

  updateMediaSlide(mediaTitle.textContent);
  scale = 1;
  applyZoom();

  mediaModal.classList.add('is-open', 'from-project');
  mediaModal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
  mediaModal.querySelector('.close-modal').focus();
}

projectZoomOpen.addEventListener('click', openProjectZoomViewer);
projectMainImage.addEventListener('click', openProjectZoomViewer);
projectMainImage.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openProjectZoomViewer();
  }
});

function openMediaViewer(card) {
  const src = card.dataset.media;
  const title = card.dataset.mediaTitle || 'Preview';
  const subtitle = card.dataset.mediaSubtitle || '';
  const gallery = card.dataset.mediaGallery;

  mediaGallery = gallery ? gallery.split('|').filter(Boolean) : [src];
  mediaGalleryIndex = 0;

  mediaTitle.textContent = title;
  mediaSubtitle.textContent = subtitle;
  updateMediaSlide(title);

  scale = 1;
  applyZoom();

  mediaModal.classList.add('is-open');
  mediaModal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
  mediaModal.querySelector('.close-modal').focus();
}


function updateMediaSlide(title = mediaTitle.textContent || 'Preview') {
  const src = mediaGallery[mediaGalleryIndex];
  mediaImage.src = src;
  mediaImage.alt = mediaGallery.length > 1
    ? `${title} — image ${mediaGalleryIndex + 1} of ${mediaGallery.length}`
    : `${title} preview`;
  openMedia.href = src;

  const hasGallery = mediaGallery.length > 1;
  mediaPrev.hidden = !hasGallery;
  mediaNext.hidden = !hasGallery;
  mediaSlideCount.hidden = !hasGallery;
  mediaSlideCount.textContent = hasGallery
    ? `${mediaGalleryIndex + 1} / ${mediaGallery.length}`
    : '';

  renderAlbumPreviews(title);
}

function renderAlbumPreviews(title = mediaTitle.textContent || 'Preview') {
  mediaAlbumPreviews.innerHTML = '';

  if (mediaGallery.length <= 1) {
    mediaAlbumPreviews.hidden = true;
    return;
  }

  const previewCount = Math.min(3, mediaGallery.length - 1);
  mediaAlbumPreviews.hidden = false;

  for (let offset = 1; offset <= previewCount; offset += 1) {
    const index = (mediaGalleryIndex + offset) % mediaGallery.length;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'media-album-preview';
    button.setAttribute('aria-label', `Show image ${index + 1} of ${mediaGallery.length}`);
    button.innerHTML = `
      <img src="${mediaGallery[index]}" alt="${title} — preview image ${index + 1}">
      <span>${String(index + 1).padStart(2, '0')}</span>
    `;
    button.addEventListener('click', () => {
      mediaGalleryIndex = index;
      scale = 1;
      updateMediaSlide(title);
      applyZoom();
    });
    mediaAlbumPreviews.appendChild(button);
  }
}

function changeMediaSlide(direction) {
  if (mediaGallery.length <= 1) return;
  mediaGalleryIndex = (mediaGalleryIndex + direction + mediaGallery.length) % mediaGallery.length;
  scale = 1;
  updateMediaSlide();
  applyZoom();
}

function closeMedia() {
  mediaModal.classList.remove('is-open', 'from-project');
  mediaModal.setAttribute('aria-hidden', 'true');
  if (!projectModal.classList.contains('is-open')) {
    body.classList.remove('modal-open');
  }
  mediaImage.src = '';
  mediaGallery = [];
  mediaGalleryIndex = 0;
  mediaPrev.hidden = true;
  mediaNext.hidden = true;
  mediaSlideCount.hidden = true;
  mediaAlbumPreviews.hidden = true;
  mediaAlbumPreviews.innerHTML = '';
}

document.querySelectorAll('[data-media]').forEach(card => {
  card.addEventListener('click', () => openMediaViewer(card));
});
document.querySelectorAll('[data-close-media]').forEach(el => el.addEventListener('click', closeMedia));
mediaPrev.addEventListener('click', () => changeMediaSlide(-1));
mediaNext.addEventListener('click', () => changeMediaSlide(1));

zoomIn.addEventListener('click', () => changeZoom(STEP));
zoomOut.addEventListener('click', () => changeZoom(-STEP));
zoomReset.addEventListener('click', () => {
  scale = 1;
  applyZoom();
});

mediaStage.addEventListener('wheel', event => {
  if (!(event.ctrlKey || event.metaKey)) return;
  event.preventDefault();
  changeZoom(event.deltaY < 0 ? STEP : -STEP);
}, { passive: false });

function changeZoom(amount) {
  scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale + amount));
  applyZoom();
}
function applyZoom() {
  mediaImage.style.width = `${Math.round(scale * 900)}px`;
  zoomLevel.textContent = `${Math.round(scale * 100)}%`;
}

// Keyboard shortcuts
document.addEventListener('keydown', event => {
  // The zoom/media viewer sits above the project modal, so it gets keyboard priority.
  if (mediaModal.classList.contains('is-open')) {
    if (event.key === 'Escape') closeMedia();
    if (event.key === '+' || event.key === '=') changeZoom(STEP);
    if (event.key === '-') changeZoom(-STEP);
    if (event.key === 'ArrowLeft') changeMediaSlide(-1);
    if (event.key === 'ArrowRight') changeMediaSlide(1);
    if (event.key === '0') {
      scale = 1;
      applyZoom();
    }
    return;
  }

  if (projectModal.classList.contains('is-open')) {
    if (event.key === 'Escape') closeProject();
    if (event.key === 'ArrowLeft') changeProjectImage(-1);
    if (event.key === 'ArrowRight') changeProjectImage(1);
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();


// Subtle click feedback. The browser cursor and page colors remain unchanged.
const canUseClickEffects =
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canUseClickEffects) {
  const interactiveSelector =
    'a, button, .interactive-card, .media-card, .award-card, .certificate-card';

  document.addEventListener('pointerdown', event => {
    if (!event.target.closest(interactiveSelector)) return;

    const ripple = document.createElement('span');
    ripple.className = 'page-click-ripple';
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
    document.body.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });
}


// FEU Alabang Tamaraw background effect for the About section.
const tamarawRain = document.getElementById('tamarawRain');

if (tamarawRain) {
  const tamarawDrops = [
    // Left edge lane
    { left: 1.5, size: 28, duration: 15, delay: -3,  drift: 10 },
    { left: 4.5, size: 36, duration: 18, delay: -11, drift: -8 },
    { left: 8.0, size: 30, duration: 14, delay: -7,  drift: 8 },

    // Right edge lane
    { left: 92.0, size: 30, duration: 16, delay: -6,  drift: -8 },
    { left: 95.5, size: 38, duration: 19, delay: -13, drift: 9 },
    { left: 98.0, size: 27, duration: 14, delay: -9,  drift: -6 }
  ];

  tamarawDrops.forEach((drop, index) => {
    const img = document.createElement('img');
    img.src = 'assets/about/tamaraw-icon.png';
    img.alt = '';
    img.className = 'tamaraw-drop';
    img.style.setProperty('--left', `${drop.left}%`);
    img.style.setProperty('--size', `${drop.size}px`);
    img.style.setProperty('--duration', `${drop.duration}s`);
    img.style.setProperty('--delay', `${drop.delay}s`);
    img.style.setProperty('--drift', `${drop.drift}px`);
    img.style.setProperty('--rotation', `${index % 2 === 0 ? 8 : -8}deg`);
    tamarawRain.appendChild(img);
  });
}


