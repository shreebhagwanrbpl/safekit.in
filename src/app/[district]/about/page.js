import { fetchDistrictData } from "@/lib/data-fetcher";
import { BASE_URL, BRAND_NAME } from "@/lib/config";
import AboutPage from "@/app/about/page";

export async function generateMetadata({ params }) {
  const { district = "jaipur" } = await params;
  
  let districtInfo = null;
  try {
    districtInfo = await fetchDistrictData(district);
  } catch (e) {
    console.error("Error fetching district about metadata:", e);
  }

  const cityName = districtInfo?.district || district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const stateName = districtInfo?.state || "India";

  return {
    title: `About ${BRAND_NAME} in ${cityName} | Laboratory & Biomedical Supplier`,
    description: `Learn about ${BRAND_NAME} in ${cityName}, ${stateName}. We are a trusted supplier of biochemistry analyzers, CBC machines, and medical diagnostic solutions in ${cityName}.`,
    alternates: {
      canonical: `${BASE_URL}/${district}/about`,
    },
  };
}

export default async function Page({ params }) {
  const { district = "jaipur" } = await params;

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <div className="site9-static"><AboutPage city={city} /></div>;
}