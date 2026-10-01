import { NextResponse } from "next/server";
import { getFullCatalog } from "@/lib/mongoDb";
import { fetchFullCatalog } from "@/lib/data-fetcher";
import { WEBSITE_ID, COMPANY_ID } from "@/lib/catalog-utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const targetWebsiteId = searchParams.get("websiteId") || WEBSITE_ID;
    const targetCompanyId = searchParams.get("companyId") || COMPANY_ID;

    let products = [];
    try {
      products = await getFullCatalog(targetCompanyId, targetWebsiteId);
    } catch (dbErr) {
      console.warn("[api/catalog] Direct MongoDB read failed:", dbErr);
      products = await fetchFullCatalog();
    }

    return NextResponse.json(
      {
        success: true,
        count: products.length,
        products,
        timestamp: Date.now(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch master catalog" },
      { status: 500 }
    );
  }
}
