import { BASE_URL } from "@/lib/config";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/admin/",
                "/dashboard/",
                "/api/",
                "/_next/",
                "/*?search=",
                "/*?filter=",
                "/*&filter=",
                "/*?sort=",
            ],
        },

        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}