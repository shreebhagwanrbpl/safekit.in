import { fetchDistrictData } from "@/lib/data-fetcher";
import { BASE_URL, BRAND_NAME } from "@/lib/config";
import ProductsPage from "@/app/items/page";

export async function generateMetadata({ params }) {
  const { district = "jaipur" } = await params;
  
  let districtInfo = null;
  try {
    districtInfo = await fetchDistrictData(district);
  } catch (e) {
    console.error("Error fetching district items metadata:", e);
  }

  const cityName = districtInfo?.district || district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const stateName = districtInfo?.state || "India";

  return {
    title: `Biomedical & Laboratory Analyzer Supplier in ${cityName} | ${BRAND_NAME}`,
    description: `Buy advanced medical laboratory equipment, biochemistry analyzers, and reagents in ${cityName}, ${stateName} from ${BRAND_NAME}. View our dynamic products directory.`,
    alternates: {
      canonical: `${BASE_URL}/${district}/items`,
    },
  };
}

export default async function Page({ params }) {
  const { district = "jaipur" } = await params;

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <ProductsPage city={city} />;
}