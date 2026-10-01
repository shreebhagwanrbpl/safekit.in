/**
 * Single Source of Truth for Website Configuration & Domain Normalization (safekit.in)
 */

export const WEBSITE_ID = "safekitin";
export const COMPANY_ID = "rajbiosis";

export function normalizeDomainId(str = "") {
  if (!str || typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

export const makeSlug = (text = "") =>
  String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export function isItemVisibleOnWebsite(item, targetWebsiteId = WEBSITE_ID) {
  if (!item || typeof item !== "object") return false;
  if (item.isPublished === false) return false;
  if (item.status === "inactive" || item.status === "draft") return false;

  if (Array.isArray(item.websiteIds)) {
    if (item.websiteIds.length === 0) return false;
    const targetNorm = normalizeDomainId(targetWebsiteId);
    return item.websiteIds.some((w) => {
      const n = normalizeDomainId(String(w));
      return n === "all" || n === targetNorm || n === "safekit" || n === "safekitin";
    });
  }

  if (item.websiteIds === undefined || item.websiteIds === null) {
    return true;
  }

  return false;
}
