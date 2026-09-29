# How to replace the pictures and visual assets

The website is already wired to placeholder files. The easiest method is to replace
the placeholder file with your real image and then update the filename in `index.html`
if your file extension/name is different.

## 1. Profile photo

Folder:
`assets/profile/`

Current placeholder:
`profile-placeholder.svg`

Recommended:
- Export your portrait as JPG, PNG, or WebP.
- Example: `assets/profile/grace-profile.jpg`
- In `index.html`, find:
  `assets/profile/profile-placeholder.svg`
- Change it to:
  `assets/profile/grace-profile.jpg`

The CSS already crops it using `object-fit: cover`, so a portrait-oriented image works best.

## 2. ImprentaX screenshots

Folder:
`assets/projects/`

The project viewer currently expects:
- `imprentax-1.svg`
- `imprentax-2.svg`
- `imprentax-3.svg`

Recommended:
- Export three screenshots as JPG/PNG/WebP.
- Either preserve the base names and adjust the JavaScript extension, or rename them
  and update the image paths in `script.js`.

The current live system is already linked to:
https://imprenta-x-system.web.app/

## 3. Casa Carmina screenshots

Folder:
`assets/projects/`

Current placeholders:
- `casa-carmina-1.svg`
- `casa-carmina-2.svg`
- `casa-carmina-3.svg`

Use the same replacement approach as ImprentaX.

## 4. Baguette Bites screenshots

Folder:
`assets/projects/`

Current placeholders:
- `baguette-bites-1.svg`
- `baguette-bites-2.svg`
- `baguette-bites-3.svg`

Use the same replacement approach as ImprentaX.

## 5. Order Tracking System

No picture is required anymore.

The project card and popup now use HTML/CSS to explain the workflow without exposing
screenshots or business information. You do not need to replace any image for this project.

## 6. Design work

Folder:
`assets/design-work/`

Current placeholders:
- `photoshop-1.svg`
- `photoshop-2.svg`
- `figma-1.svg`
- `figma-2.svg`
- `canva-1.svg`
- `canva-2.svg`

Replace each with your own work. If the file names/extensions change, update the matching
`src` and `data-media` attributes in `index.html`.

## 7. Certifications

Folder:
`assets/certifications/`

Replace the placeholder certificate images there. If you keep the same filenames,
the website will continue working without HTML changes.

## 8. Awards

Folder:
`assets/awards/`

Replace each placeholder with the actual award image. If you keep the same filenames,
no HTML changes are needed.

## Recommended image formats

- WebP: best for website performance
- JPG: good for screenshots/photos
- PNG: good when transparency or very sharp UI text is needed

For project screenshots, use images with roughly the same 16:9 or 16:10 proportions.


## About section Tamaraw icon

The animated FEU Alabang Tamaraw background uses:

`assets/about/tamaraw-icon.png`

You can replace that file with another transparent PNG if needed. Keep the same filename to avoid changing the HTML/JavaScript.

The animation opacity and size are controlled near the bottom of `styles.css` under the **ABOUT — TAMARAW RAIN BACKGROUND** section. The icon list, positions, sizes, and speeds are defined near the bottom of `script.js`.


### ImprentaX gallery
Real screenshots are stored in `assets/projects/imprentax-gallery/` as `imprentax-01.png` through `imprentax-07.png`. The project card's `data-project-gallery` attribute controls their slideshow order.
