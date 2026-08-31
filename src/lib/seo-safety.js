/**
 * Programmatic SEO Safety Gate & Quality Scorer
 */

export function calculatePageSeoScore(pageType, data) {
  if (!data) return { score: 0, isIndexable: false };
  
  let score = 0;

  // 1. Technical SEO (Max 20)
  score += 20; 

  // 2. Content Quality (Max 20)
  if (pageType === "product") {
    const desc = data.desc || data.description || "";
    if (desc.length > 200) score += 20;
    else if (desc.length > 100) score += 15;
    else if (desc.length > 30) score += 10;
    else score += 5;
  } else if (pageType === "district") {
    const productsCount = data.productsCount || 0;
    if (productsCount > 5) score += 20;
    else if (productsCount > 0) score += 15;
    else score += 5;
  } else if (pageType === "product-district") {
    // Location-product combinations are duplicate templates
    // They score 0 on content quality unless they have unique local pricing or content
    if (data.hasUniqueLocalContent) {
      score += 15;
    } else {
      score += 0;
    }
  } else {
    score += 15;
  }

  // 3. Search Intent Alignment (Max 15)
  if (pageType === "product") {
    if (data.model && data.brand) score += 15;
    else if (data.brand || data.model) score += 10;
    else score += 5;
  } else if (pageType === "district") {
    if (data.district && data.state) score += 15;
    else score += 5;
  } else if (pageType === "product-district") {
    // Lower intent score because the user intent is duplicate of the main product page
    score += 5;
  } else {
    score += 15;
  }

  // 4. Internal Linking Context (Max 10)
  score += 10; 

  // 5. Metadata Uniqueness (Max 10)
  if (pageType === "product") {
    if (data.title && (data.desc || data.description)) score += 10;
    else score += 5;
  } else if (pageType === "district") {
    if (data.district) score += 10;
    else score += 5;
  } else {
    score += 5; // dynamic combinations share boilerplate metadata
  }

  // 6. Structured Data / Schema Markup (Max 10)
  score += 10;

  // 7. Performance Optimizations (Max 5)
  score += 5;

  // 8. Image Optimization / Alt Tag Assets (Max 5)
  if (pageType === "product") {
    if (data.image || (data.images && data.images.length > 0)) score += 5;
  } else {
    score += 5;
  }

  // 9. Local Relevance / Geographic Focus (Max 5)
  if (pageType === "district" || pageType === "product-district") {
    score += 5;
  } else {
    score += 3;
  }

  // Final indexing check:
  // product-district pages are not indexable unless they have unique local content
  let isIndexable = score >= 50;
  if (pageType === "product-district" && !data.hasUniqueLocalContent) {
    isIndexable = false;
  }

  return {
    score,
    isIndexable
  };
}

export function shouldIndexPage(pageType, data) {
  const result = calculatePageSeoScore(pageType, data);
  return result.isIndexable;
}
