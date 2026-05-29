const IMAGE_BASE = process.env.PRODUCT_IMAGE_BASE ||
  'https://cdn.jsdelivr.net/gh/renoomenard/customcover-products-data@main/images';

module.exports = {
  layout: 'layouts/product.njk',
  permalink: '/{{ slug }}/',
  eleventyComputed: {
    // Full CDN URL — available as {{ imageUrl }} in every template
    imageUrl: data => data.image ? `${IMAGE_BASE}/${data.image}` : null,
  }
};
