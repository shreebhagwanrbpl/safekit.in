import { fetchFullCatalog } from "@/lib/data-fetcher-server";
import ProductsClient from "./ProductsClient";
import { BASE_URL, BRAND_NAME } from "@/lib/config";

export const revalidate = 3600; // Revalidate cache every hour

export const metadata = {
  title: `Biomedical & Laboratory Equipment Catalog | ${BRAND_NAME}`,
  description: `Explore our catalog of diagnostic equipment, biochemistry analyzers, hematology instruments and laboratory reagents at ${BRAND_NAME}. Buy high-quality medical products.`,
  alternates: {
    canonical: `${BASE_URL}/items`,
  },
};

export default async function ProductsPage({ district = null, city = null }) {
  // Fetch full catalog from server cache
  const allProducts = await fetchFullCatalog();

  return (
    <ProductsClient
      initialProducts={allProducts}
      district={district}
      city={city}
    />
  );
}