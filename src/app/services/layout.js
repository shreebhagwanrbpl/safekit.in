import { BASE_URL, BRAND_NAME } from "@/lib/config";

export const metadata = {
  title: `Biomedical Equipment Services & Support | ${BRAND_NAME}`,
  description: `Professional calibration, repair, maintenance, installation and support services for laboratory diagnostic equipment by ${BRAND_NAME}. Service contracts available.`,
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
