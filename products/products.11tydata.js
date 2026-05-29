const CDN_DEFAULT = 'https://cdn.jsdelivr.net/gh/renoomenard/customcover-products-data@main/images';
// Guard against env var being set with "KEY = value" format instead of just the URL
const raw = process.env.PRODUCT_IMAGE_BASE || '';
const IMAGE_BASE = raw.startsWith('http') ? raw.trim() : CDN_DEFAULT;

module.exports = {
  layout: 'layouts/product.njk',
  permalink: '/{{ slug }}/',
  eleventyComputed: {
    // Full CDN URL — available as {{ imageUrl }} in every template
    imageUrl: data => data.image ? `${IMAGE_BASE}/${data.image}` : null,
  }
};
