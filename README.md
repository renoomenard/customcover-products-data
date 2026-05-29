# CustomCover Products Data

Central source of truth for all Custom Cover Company product pages across all country sites.

## Structure

```
products/    ← Eleventy markdown files (one per product)
images/      ← Product images (served via jsDelivr CDN)
.github/
  workflows/
    deploy.yml   ← Auto-triggers Vercel rebuilds on all country sites
```

## Image CDN URL

Images are served via jsDelivr directly from this repo — no hosting setup needed:

```
https://cdn.jsdelivr.net/gh/renoomenard/customcover-products-data@main/images/FILENAME.webp
```

## Adding a Country Site

1. Add your site's Vercel Deploy Hook URL as a secret in this repo (Settings → Secrets → Actions)
   - Name it `VERCEL_DEPLOY_HOOK_XX` (e.g. `VERCEL_DEPLOY_HOOK_UK`)
2. Add the secret name to the `deploy.yml` workflow
3. In your country site repo, add this repo as a git submodule:
   ```
   git submodule add https://github.com/renoomenard/customcover-products-data.git src/products-data
   ```
4. Set `PRODUCT_IMAGE_BASE=https://cdn.jsdelivr.net/gh/renoomenard/customcover-products-data@main/images` in your Vercel environment variables

## Updating Products

1. Edit files in `products/` or add/replace images in `images/`
2. Commit and push to `main`
3. All country sites rebuild automatically via Vercel Deploy Hooks

## Country Sites

| Site | Repo | Deploy Hook Secret |
|------|------|--------------------|
| Australia | renoomenard/WEB-customcovernetau | `VERCEL_DEPLOY_HOOK_AU` |
