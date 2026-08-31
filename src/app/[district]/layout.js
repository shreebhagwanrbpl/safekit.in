export async function generateMetadata({ params }) {

  const { district = "jaipur" } = await params;

  const districtName = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const url = `https://safekit.in/${district}`;

  return {
    title: `Medical Safety Kits & Clinical Safety Sourcing in ${districtName} | Raj Biosis`,

    description: `Raj Biosis helps hospitals and clinical facilities in ${districtName} source certified safety kits, sample collection tools, and protective gear.`,

    keywords: [
      `Safety Kits ${districtName}`,
      `Clinical Safety Supplies ${districtName}`,
      `Specimen Collection Tools ${districtName}`,
      `Medical PPE ${districtName}`,
      `First Aid Kits ${districtName}`,
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `Medical Safety Kits & Clinical Safety Sourcing in ${districtName} | Raj Biosis`,
      description: `Raj Biosis helps hospitals and clinical facilities in ${districtName} source certified safety kits, sample collection tools, and protective gear.`,
      url,
      type: "website",
    },
  };
}

export default function DistrictLayout({ children }) {
  return children;
}