# Better Than Mascara

A multi-page static website for the Better Than Mascara nail & lash studio in Brampton.

## Pages

- `index.html` — Home / Hero landing page
- `about.html` — About Esmirandah + photo gallery
- `services.html` — Service menu, pricing, CTA, and booking form
- `policy.html` — Studio policies, deposits, consent forms, and booking form

## File Structure

```
.
├── css/
│   └── styles.css       # All shared styles and color variables
├── js/
│   └── main.js          # Mobile menu + accordion interactions
├── index.html
├── about.html
├── services.html
├── policy.html
└── README.md
```

## Brand Color Codes

These colors are defined as CSS custom properties in `css/styles.css` and match the design screenshots:

| Color                 | Hex Code  | Usage                                  |
|-----------------------|-----------|----------------------------------------|
| Pink (footer)         | `#e07ecb` | Footer background, brand accent        |
| Pink dark             | `#d166b5` | Hover states on pink elements          |
| Black                 | `#000000` | Primary buttons, CTA cards, headings   |
| White                 | `#ffffff` | Page background, cards, text on dark   |
| Off-white             | `#f7f7f7` | Light section backgrounds              |
| Cream                 | `#faf9f7` | Alternate section background           |
| Gold / Bronze         | `#c9a66b` | Section labels, hero label, accents    |
| Gold dark             | `#b08d55` | Gold hover state                       |
| Dark green            | `#2f3f39` | Consent form accordion headers         |
| Dark green hover      | `#26332e` | Accordion header hover state           |
| Body text             | `#1a1a1a` | Main paragraph text                    |
| Light text            | `#555555` | Secondary/descriptive text             |
| Muted text            | `#888888` | Duration labels, tertiary text         |
| Border                | `#e5e5e5` | Dividers, input borders                |

## Running Locally

Use any static file server. For example, with Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Notes

- The photo gallery on the About page uses placeholder images from Unsplash. Replace them with the actual studio photos.
- The booking form is styled and ready; wire it to a backend or form service (e.g., Formspree, Netlify Forms) for live submissions.
