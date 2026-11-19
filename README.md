# Xiuhuazure · personal site

A personal side quest diary. Plain static HTML, CSS and a few lines of JS, so there is no build step.

Future home: https://xiuhuazure.pages.dev

## Files

- `index.html` the whole site, one page
- `styles.css` design tokens and layout (Fraunces + Nunito, sunflower yellows, Twilight Ink / Deep Azure text)
- `script.js` tiny touches (footer year, tap the glints)
- `assets/` portrait illustration and icons
- `404.html`, `_headers`, `robots.txt`, `sitemap.xml` Cloudflare Pages extras

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy to Cloudflare Pages

1. Cloudflare dashboard, Workers & Pages, Create, Pages, Connect to Git.
2. Pick this repository and branch.
3. Framework preset: None. Build command: leave empty. Build output directory: `/`.
4. Name the project `xiuhuazure` so it lands on `xiuhuazure.pages.dev`.

## Planned

- Substack: its own section on the page (not only an icon).
- Socials: TikTok, Instagram and YouTube as icons in the footer.
- Keep the existing YouTube buttons in the page as they are.
