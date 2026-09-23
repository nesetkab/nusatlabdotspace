## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Images

- Raster images (jpg/png/webp): use `<Image>` / `<Picture>` from `astro:assets`.
- SVGs (logos, wordmarks, illustrations): use them as SVG components
  (`import Logo from '../assets/brand/nsl-logo-light.svg'` → `<Logo class="h-16 w-auto" />`,
  adding `aria-hidden="true"` when decorative or `role="img" aria-label="…"` otherwise).
  Do not pass SVGs to `<Image>` — with `imageService: 'compile'`, the Cloudflare adapter's dev
  image endpoint rejects SVG with `400 Unsupported format: svg`, so they break under `astro dev`
  even though builds work.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
