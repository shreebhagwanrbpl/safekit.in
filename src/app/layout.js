import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL(
    "https://safekit.in"
  ),

  title: "Medical Safety Kits & Clinical Safety Supplies | Raj Biosis",

  description: "Raj Biosis supplies clinical safety kits, specimen collection supplies, personal protective gear, and medical safety accessories in India.",

  keywords: [
    "Medical Safety Kits",
    "Clinical Safety Supplies Dealer",
    "Specimen Collection Tools",
    "PPE Kits Supplier India",
    "First Aid Kit Dealer",
    "Lab Safety Accessories",
    "Healthcare Safety Containment",
  ],

  openGraph: {
    title: "Medical Safety Kits & Clinical Safety Supplies | Raj Biosis",

    description: "Premium supplier of diagnostics and medical equipment across India.",

    url: "https://safekit.in",

    siteName: "Raj Biosis",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Raj Biosis",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Medical Safety Kits & Clinical Safety Supplies | Raj Biosis",

    description: "Premium supplier of diagnostics and medical equipment across India.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://safekit.in",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />

        <main>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />

          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}