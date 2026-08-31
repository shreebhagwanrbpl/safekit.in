import { fetchDistrictData } from "@/lib/data-fetcher";
import { BASE_URL, BRAND_NAME } from "@/lib/config";
import ContactPage from "@/app/contact/page";

export async function generateMetadata({ params }) {
  const { district = "jaipur" } = await params;
  
  let districtInfo = null;
  try {
    districtInfo = await fetchDistrictData(district);
  } catch (e) {
    console.error("Error fetching district contact metadata:", e);
  }

  const cityName = districtInfo?.district || district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const stateName = districtInfo?.state || "India";

  return {
    title: `Contact ${BRAND_NAME} in ${cityName} | Get Quote & Office Details`,
    description: `Get in touch with ${BRAND_NAME} in ${cityName}, ${stateName}. Find our local contact numbers, office location, and request price quotations for laboratory diagnostic equipment.`,
    alternates: {
      canonical: `${BASE_URL}/${district}/contact`,
    },
  };
}

export default async function Page({ params }) {
  const { district = "jaipur" } = await params;

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <div className="site9-static"><ContactPage city={city} /></div>;
}