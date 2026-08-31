import { BASE_URL, BRAND_NAME } from "@/lib/config";

export const metadata = {
  title: `Contact Us | Biomedical & Laboratory Equipment Supplier | ${BRAND_NAME}`,
  description: `Contact ${BRAND_NAME} for laboratory equipment price quotations, biochemistry analyzer installation, or service maintenance enquiries. Get our phone, email and office details.`,
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
