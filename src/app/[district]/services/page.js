import { fetchDistrictData } from "@/lib/data-fetcher";
import { BASE_URL, BRAND_NAME } from "@/lib/config";
import ServicesPage from "@/app/services/page";

export async function generateMetadata({ params }) {
  const { district = "jaipur" } = await params;
  
  let districtInfo = null;
  try {
    districtInfo = await fetchDistrictData(district);
  } catch (e) {
    console.error("Error fetching district services metadata:", e);
  }

  const cityName = districtInfo?.district || district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const stateName = districtInfo?.state || "India";

  return {
    title: `Biomedical Support & Services in ${cityName} | ${BRAND_NAME}`,
    description: `We offer biochemistry analyzer calibration, CBC machine maintenance, installation, and technical support services in ${cityName}, ${stateName}. Contact ${BRAND_NAME} today.`,
    alternates: {
      canonical: `${BASE_URL}/${district}/services`,
    },
  };
}

export default async function Page({ params }) {
  const { district = "jaipur" } = await params;

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <div className="site9-static"><ServicesPage city={city} /></div>;
}