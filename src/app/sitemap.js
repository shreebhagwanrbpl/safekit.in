import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { fetchFullCatalog } from "@/lib/data-fetcher-server";
import { shouldIndexPage } from "@/lib/seo-safety";
import { BASE_URL } from "@/lib/config";

export default async function sitemap() {
    const baseUrl = BASE_URL;
    const urls = [];

    // 1. Static Pages (always indexable)
    urls.push(
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/items`, lastModified: new Date() }
    );

    try {
        // Fetch all products catalog
        const allProducts = await fetchFullCatalog();

        // Fetch all active districts
        const districtSnap = await getDocs(
            collection(db, "websites", "safekitin", "districts")
        );
        const districts = districtSnap.docs.map((doc) => doc.data());

        // 2. District Static Pages
        districts.forEach((district) => {
            const slug = district.slug;
            if (!slug) return;

            // Score check for location landing page
            const districtData = { 
                district: district.district || slug, 
                state: district.state || "India",
                productsCount: allProducts.length 
            };
            if (!shouldIndexPage("district", districtData)) return;

            urls.push(
                { url: `${baseUrl}/${slug}`, lastModified: new Date() },
                { url: `${baseUrl}/${slug}/about`, lastModified: new Date() },
                { url: `${baseUrl}/${slug}/services`, lastModified: new Date() },
                { url: `${baseUrl}/${slug}/contact`, lastModified: new Date() },
                { url: `${baseUrl}/${slug}/items`, lastModified: new Date() }
            );
        });

        // 3. Product Pages (Index only standard product pages to avoid doorway duplicate pages)
        allProducts.forEach((product) => {
            if (!product.slug) return;

            // Score check for the main product page
            if (shouldIndexPage("product", product)) {
                urls.push({
                    url: `${baseUrl}/items/${product.slug}`,
                    lastModified: new Date(),
                });
            }
        });
    } catch (error) {
        console.error("Sitemap Generation Error:", error);
    }

    return urls;
}