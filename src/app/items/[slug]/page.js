import { fetchFullCatalog } from "@/lib/data-fetcher-server";
import { shouldIndexPage } from "@/lib/seo-safety";
import { BASE_URL, BRAND_NAME } from "@/lib/config";
import ProductDetails from "./ProductDetails";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    let product = null;
    try {
        const allProducts = await fetchFullCatalog();
        product = allProducts.find((p) => p.slug === slug) || null;
    } catch (e) {
        console.error("Error fetching product metadata:", e);
    }

    const fallbackName = slug
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase());
    
    const productName = product?.title || fallbackName;
    const isIndexable = product ? shouldIndexPage("product", product) : false;

    const title = `${productName} Supplier in India | Price, Dealer & Distributor | ${BRAND_NAME}`;
    const description = product?.desc || product?.description || 
        `Buy ${productName} at best price in India. Trusted supplier, dealer and distributor of ${productName} for hospitals, laboratories, diagnostic centers, research institutes and healthcare facilities. Contact ${BRAND_NAME} for latest quotation and product details.`;

    const url = `${BASE_URL}/items/${slug}`;

    return {
        title,
        description,
        keywords: [
            productName,
            `${productName} Supplier`,
            `${productName} Dealer`,
            `${productName} Distributor`,
            `${productName} Manufacturer`,
            `${productName} Exporter`,
            `${productName} Price`,
            `${productName} Price in India`,
            `${productName} Supplier in India`,
            `${productName} Dealer in India`,
            `${productName} Distributor in India`,
            `Buy ${productName}`,
            `${productName} for Laboratory`,
            `${productName} for Hospital`,
            `${productName} for Diagnostic Center`,
            "Biomedical Equipment",
            "Medical Equipment",
            "Laboratory Equipment",
            "Diagnostic Equipment",
            "Hospital Equipment",
            "Healthcare Equipment",
            BRAND_NAME,
        ],

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            description,
            url,
            siteName: BRAND_NAME,
            type: "website",
            locale: "en_IN",
            images: product?.image ? [{ url: product.image, alt: productName }] : [],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: product?.image ? [product.image] : [],
        },

        robots: {
            index: isIndexable,
            follow: true,
            googleBot: {
                index: isIndexable,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        metadataBase: new URL(BASE_URL),
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    
    let product = null;
    try {
        const allProducts = await fetchFullCatalog();
        product = allProducts.find((p) => p.slug === slug) || null;
    } catch (e) {
        console.error("Error loading product page:", e);
    }

    return <ProductDetails slug={slug} initialProduct={product} />;
}