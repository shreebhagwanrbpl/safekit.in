import { fetchFullCatalog, fetchDistrictData } from "@/lib/data-fetcher";
import { shouldIndexPage } from "@/lib/seo-safety";
import { BASE_URL, BRAND_NAME } from "@/lib/config";
import ProductDetails from "../../../items/[slug]/ProductDetails";

export async function generateMetadata({ params }) {
    const { slug, district } = await params;
    
    let product = null;
    let districtInfo = null;
    try {
        const [allProducts, distData] = await Promise.all([
            fetchFullCatalog(),
            fetchDistrictData(district)
        ]);
        product = allProducts.find((p) => p.slug === slug) || null;
        districtInfo = distData || null;
    } catch (e) {
        console.error("Error fetching district product metadata:", e);
    }

    const districtName = districtInfo?.district || district
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const fallbackName = slug
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase());
    
    const productName = product?.title || fallbackName;

    // Safety check scoring including local context
    const isIndexable = product && districtInfo
        ? shouldIndexPage("product", { ...product, district: districtName, state: districtInfo.state })
        : false;

    // Formula: [Product Name] Supplier in [District/City] | Brand
    const title = `${productName} Supplier in ${districtName} | Price, Dealer & Distributor | ${BRAND_NAME}`;
    const description = `Looking for ${productName} in ${districtName}? ${BRAND_NAME} is a leading supplier, dealer and distributor of ${productName} in ${districtName}, ${districtInfo?.state || "India"}. Contact us for quotation and delivery options.`;

    const url = `${BASE_URL}/${district}/items/${slug}`;

    return {
        title,
        description,
        keywords: [
            productName,
            `${productName} in ${districtName}`,
            `${productName} Supplier ${districtName}`,
            `${productName} Dealer ${districtName}`,
            `${productName} Distributor ${districtName}`,
            `${productName} Price in ${districtName}`,
            `${productName} Exporter in ${districtName}`,
            `Buy ${productName} in ${districtName}`,
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
    const { slug, district } = await params;
    
    let product = null;
    try {
        const allProducts = await fetchFullCatalog();
        product = allProducts.find((p) => p.slug === slug) || null;
    } catch (e) {
        console.error("Error loading district product page:", e);
    }

    return (
        <ProductDetails
            slug={slug}
            district={district}
            initialProduct={product}
        />
    );
}