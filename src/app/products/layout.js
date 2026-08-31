import { BASE_URL, BRAND_NAME } from "@/lib/config";

export const metadata = {
  title: `Featured Biomedical Equipment & Analyzers | ${BRAND_NAME}`,
  description: `Explore premium medical laboratory analyzer instruments, biochemistry machines, electrolyte reagents and rapid test kits at ${BRAND_NAME}.`,
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
};

export default function ProductsLayout({ children }) {
  return children;
}
