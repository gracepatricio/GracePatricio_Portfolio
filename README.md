# Grace Patricio Portfolio — Refined Version

This version incorporates the latest layout and privacy changes.

## Main changes

- Hero headline changed to a clearer, more personal statement: **I design and build web & mobile applications.**
- Replaced the awkward Currently / Focus / Also Into cards with one compact profile summary.
- Order Tracking System is now treated as a **private business project**. No screenshots are required.
- The private project uses a privacy-safe system overview graphic plus a note explaining why screenshots are withheld.
- ImprentaX still supports a 3-image screenshot gallery and is the only project prepared for a Live Demo link.
- Casa Carmina and Baguette Bites use screenshot galleries only; no live-link button is shown.
- Skills were changed from the uneven bento layout into three clean full-width skill rows.
- Contact was redesigned into a balanced two-column card with clear Email and Résumé actions.

## Project images

### Order Tracking System
Do **not** replace `assets/projects/order-tracking-private.svg` with a system screenshot. It is intentionally a privacy-safe visual.

### ImprentaX
Replace:
- `assets/projects/imprentax-1.svg`
- `assets/projects/imprentax-2.svg`
- `assets/projects/imprentax-3.svg`

with your screenshots.

To add the live link, open `index.html`, find the ImprentaX project card, and change:

```html
data-live=""
```

to your live URL, for example:

```html
data-live="https://your-live-site.com"
```

The Live Demo button will automatically become active.

### Casa Carmina
Replace the three `casa-carmina-*.svg` files with screenshots. No live link is shown.

### Baguette Bites
Replace the three `baguette-bites-*.svg` files with screenshots. No live link is shown.

## Profile, awards, certifications, and design work

The existing placeholders remain in their folders so you can replace them later without changing the layout.


## Hero refinement

- Rephrased the rotating hero line to “I turn ideas into …”
- Replaced the profile résumé-style list with a Build / Design / Automate capability card
- Replaced the plain scrolling technology list with a rounded Toolbox marquee using individual tool chips

## Latest hero update

The hero now uses a more lively but still minimalist visual system:
- an animated capability map for Build, Design, and Power Platform
- subtle orbital motion and floating capability modules
- a two-lane kinetic toolkit moving in opposite directions
- hover-to-pause and hover micro-interactions
- reduced-motion support for accessibility


## Latest minimalist hero revision

The hero was simplified after visual review:

- Removed the creative/orbit capability map and decorative labels.
- Replaced it with a single clean profile summary card.
- Kept only three relevant areas: Web & Mobile, UI/UX Design, and Power Platform.
- Replaced the two-row kinetic toolkit with one restrained horizontal tools marquee.
- The tools strip still moves and pauses on hover, but remains visually quiet.


## Latest update

- Improved responsiveness of the hero “About my work” card.
- Improved the About section layout for tablet and mobile.
- Added the ImprentaX live-system link.
- Added a minimal custom desktop cursor.
- Removed the Order Tracking System image requirement.
- Clicking the private Order Tracking project now shows a privacy-safe workflow overview.
- See `ASSET_GUIDE.md` for exact image replacement instructions.


## Modal and pointer interaction cleanup

- The private Order Tracking System popup no longer reserves an empty image area.
- The workflow is now presented as four compact system steps in a 2×2 grid.
- Duplicate privacy messaging was removed and consolidated into one note.
- The browser's default cursor is restored.
- Desktop users get a subtle ambient glow near the pointer and a small ripple when clicking interactive elements.


## Tamaraw + private project refinement

- The project modal is now centered vertically and horizontally.
- The “Private business project” label is reduced to a subtle status chip.
- Workflow arrows/check marks were removed; the numbered steps are now emphasized instead.
- The About section now includes a falling Tamaraw background effect using `assets/about/tamaraw-icon.png`.
- The Tamaraw layer sits behind the About content and peaks at roughly 40% opacity.


## Final About animation polish

- Tamaraw icons now fall only in the far-left and far-right edge lanes.
- The central About content area is masked off so icons cannot pass behind the photo or text.
- Peak icon opacity was reduced to about 22%.
- Tamaraw rain is disabled below 1180px wide, where safe side margins are too small.
- The “Private business project” status chip was reduced further with a specificity-safe CSS rule.


## Blush editorial revision

- Secondary accent changed from purple to `#F9E6E4`.
- The hero right side was redesigned from a UI/dashboard card into a simpler editorial profile note.
- The moving tools area was simplified from pills/chips into a plain text ticker.
- The rotating hero line now uses a hand-drawn blush highlight instead of colored text.
- Purple effects, hover accents, step markers, and pointer effects were converted to the blush palette.
- Rounded-card styling in the hero was reduced to avoid an overly templated or AI-generated appearance.


## Light beige palette update

- Secondary color changed from blush pink to light beige `#F2E7D5`.
- Light mode uses darker warm-brown accent text for readable contrast.
- Dark mode uses a lighter cream accent so labels and step numbers remain readable.
- Availability status remains green because it communicates status rather than brand color.
- Hero lead-in restored to **“I create …”** while keeping the animated phrase and beige underline/highlighter.


## Latest content and contrast update

- Hero supporting message rewritten to sound more personal.
- Light beige accents strengthened in light mode while retaining readable warm-brown text.
- Skill enumeration badges now have explicit high-contrast colors in both themes.
- Project detail areas now use a consistent fixed/minimum height for a uniform card grid.
- Order Tracking System workflow corrected to: Microsoft Forms customer order → Power Apps employee tracking → employee status updates → customer email notifications.


## Accuracy fix

- Fixed a malformed CSS append that prevented the previous contrast/uniformity rules from applying.
- Skill numbers now use a clearly visible beige badge with dark brown text in light mode.
- Beige accents are stronger across project tags, skill chips, workflow numbers, hover states, and the private project card.
- All project card detail sections now use the same fixed height on desktop/tablet.
- The private modal header is shortened to `Private business project · Order Tracking System`.
- Both `Private business project` badges now use a gray fill with white text.


## Hover readability update

- Removed the mouse-follow card spotlight that was washing beige over text.
- Removed the ambient pointer-follow glow.
- Hover feedback now uses only a subtle 2px lift, warm beige border, and restrained shadow.
- Light and dark modes have separate hover border/shadow values.
- Card surfaces and text colors no longer change on hover.
- Image zoom was reduced to a very small amount.
- The normal browser cursor remains unchanged.
- A small click ripple is retained as the only pointer-following interaction.


## Dark-brown minimalist polish

- Secondary color changed from light beige to dark brown (`#5A3A2E`) in light mode.
- Dark mode uses a lighter warm-brown counterpart where necessary for readable contrast.
- Removed the `01` marker from the hero editorial separator.
- Reworded `A little about my work` to `How I approach projects`.
- Reworded `Selected tools` to `Tools I work with`.
- Slowed and softened the tools marquee and rotating hero text.
- Smoothed reveal, hover, and modal transitions.
- Added clear `:focus-visible` keyboard states and larger interaction targets.
- Availability green remains green because it communicates status rather than decoration.


## Hero reimagined

- Replaced the previous wordy hero sidebar with a compact three-row focus list.
- Simplified the headline to “Designing practical digital experiences.”
- Kept the animated “I create …” line as the main creative motion element.
- Reduced the hero toolkit to eight representative tools and shortened its label to “Toolkit.”
- Light mode retains the existing dark-brown accent palette.
- Dark mode now uses a light beige/cream secondary palette with dark text on filled beige elements for accessibility.


## Navbar refinement

This version keeps the `grace_portfolio_hero_reimagined` layout and updates only the navigation experience:

- Floating glass-like navbar with subtle border and shadow.
- Grace Patricio name appears beside the GP mark on desktop.
- Navigation links are visually centered rather than pushed toward one side.
- Active section gets a restrained animated underline.
- Hover states use the existing site accent palette.
- Theme toggle is cleaner and announces the theme it will switch to.
- Mobile menu opens directly below the floating navbar with a smoother transition.
- Hamburger animates into a close icon.
- Escape closes the mobile menu.
- Header subtly tightens after scrolling.


## Navbar width alignment

- Navbar now matches the main 1160px content container.
- Left and right grid columns are balanced so the navigation remains truly centered.
- Desktop links have slightly more breathing room.
- Tablet and mobile widths follow the same responsive gutters as the rest of the page.


## Section art update

- Removed the GP logo/mark from the navbar and kept a text-only Grace Patricio brand.
- Added low-opacity decorative section art across multiple sections for a more creative feel.
- Projects now feature subtle paint-splatter background accents.
- Skills, Certifications, Awards, and Contact also have restrained background details so the site feels more visually cohesive.
- Decorative elements sit behind the content, use about 20% opacity or less, and move slightly with scroll for a gentle parallax effect.


## Refined section art

The previous decorative shapes were replaced with a quieter, unified visual system:

- Projects: oversized browser/window outlines at the edges.
- Skills: thin editorial grid lines and one subtle circle.
- Certifications: offset document outlines.
- Awards: soft concentric arcs.
- Contact: clean outline rings.
- All section art stays near the margins at low opacity and uses much slower scroll movement.
- Decorative elements are reduced further or disabled on smaller screens.


## Textured section separation update

- Removed the added decorative art from Projects, Skills, Certifications, Awards, and Contact.
- Kept the About section decoration untouched.
- Added subtle textured section backgrounds to visually separate the remaining sections instead.
- Each section now has a slightly different low-contrast texture so the layout feels cleaner but still visually structured.
- Dark mode uses softer light-beige textures for readability and consistency.


## Seamless section update

- Replaced the boxed section separators with soft seamless section bands.
- Removed the obvious card/container look from Projects, Skills, Certifications, Awards, and Contact.
- Each section now separates through a gentle background shift and subtle texture fade instead of hard edges.
- Dark mode uses very soft light-beige bands so the transitions stay smooth and readable.


## Flat texture separator revision

- Removed the gradient separator bands completely.
- Sections now flow as full-width flat surfaces with no rounded boxes or fade edges.
- Projects, Certifications, and Contact use a very subtle warm background tone.
- Skills and Awards remain on the base page background for natural visual rhythm.
- A fine paper-like texture is used at very low opacity instead of gradients.
- Dark mode uses a restrained warm-charcoal / light-beige texture treatment.


## Latest refinements

- Removed the underline from the hero “I create …” phrase.
- Improved the spacing between the Projects heading and subtitle for a cleaner section intro.


## Latest portfolio update

- Canva Work 02 now opens as a 2-image slideshow album with previous/next controls and left/right keyboard navigation.
- Figma Work 02 was removed from the Design Work gallery.
- Four Academic Excellence Award — With Honors certificates were added using the supplied images.
- The former generic With Honors placeholder card was replaced by the four actual awards.


## Final verified navbar/slideshow fix

- Navbar is now a true edge-to-edge header bar, not a centered rounded pill.
- Added Grace Francine M. Patricio to About.
- Canva album arrows are outside the scrollable media stage and pinned to the vertical center-left / center-right.


## Canva Work 02 update
- Removed the duplicate Full name row from About while keeping the displayed full name above the introduction.
- Replaced Canva Work 02 placeholders with the two uploaded images.
- Canva Work 02 opens as a two-image slideshow using `canva-2-1.png` and `canva-2-2.png`.


## Album preview thumbnails

- Figma Work 01 now shows clickable previews of the next three images beneath the main album viewer.
- Canva Work 02 uses the same preview system and shows the next available image.
- Preview thumbnails update as the user moves through the slideshow.


## ImprentaX screenshot gallery update

- Replaced the ImprentaX placeholder project screenshots with 7 real screenshots supplied by Grace.
- The project card now uses the first real screenshot as its cover.
- The project modal shows all 7 screenshots as clickable thumbnails while retaining the live-system link.
- Preserved the privacy-safe National Vacancy Tracker content from the earlier portfolio revision.


## Project slideshow controls

- Added previous/next arrow controls to screenshot-based project galleries, including ImprentaX.
- Added an image counter inside the project image viewer.
- Thumbnail navigation remains available.
- Left/right keyboard arrows now navigate project screenshots while the project modal is open.


## ImprentaX preview-strip refinement
- The ImprentaX slideshow still contains all 7 screenshots.
- Only 3 upcoming screenshot previews are shown beneath the main image at a time.
- The three previews update automatically as the user moves through the slideshow.
- Clicking a preview jumps directly to that screenshot.


## Casa Carmina gallery update

- Replaced the Casa Carmina project placeholders with four real screenshots: Home, Shop, About Us, and Contact Us.
- The project card now uses the real homepage screenshot as its cover.
- Casa Carmina uses the project slideshow arrows and shows only the next three preview thumbnails at a time.


## Project screenshot zoom
- Screenshot-based project modals now include a compact **View & zoom** control above the image.
- Clicking the main screenshot also opens the full zoom viewer.
- The zoom viewer includes zoom in/out/reset, full-size opening, slideshow arrows, keyboard navigation, and album previews.
- Closing the zoom viewer returns to the still-open project modal.
- The confidential National Vacancy Tracker remains screenshot-free and does not expose a zoom control.


## Baguette Bites gallery update

- Added five real Baguette Bites screenshots: Home, About, Menu, Gallery, and Contact.
- Replaced the placeholder project cover with the real homepage screenshot.
- Baguette Bites now uses project slideshow arrows and shows only three upcoming preview thumbnails at a time.
- The existing View & zoom feature works across all five Baguette Bites screenshots.

## National Vacancy Tracker screenshot fix
- Removed the Project Screenshot / View & zoom controls from the confidential National Vacancy Tracker modal.
- Screenshot/zoom controls remain available for projects that have real screenshot galleries.
