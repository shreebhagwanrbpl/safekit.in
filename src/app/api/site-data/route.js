import { NextResponse } from "next/server";
import { getPageData, getDistricts, getDistrictData } from "@/lib/mongoDb";
import { WEBSITE_ID, COMPANY_ID } from "@/lib/catalog-utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "home";
    const district = searchParams.get("district") || undefined;
    const page = searchParams.get("page") || undefined;
    const websiteId = searchParams.get("websiteId") || WEBSITE_ID;
    const companyId = searchParams.get("companyId") || COMPANY_ID;

    let data = null;
    if (type === "districts") {
      data = await getDistricts(websiteId, companyId);
    } else if (type === "district" && district) {
      data = await getDistrictData(district, websiteId, companyId);
    } else {
      data = await getPageData(page || type, websiteId, companyId);
    }

    return NextResponse.json({ success: true, type, data, timestamp: Date.now() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
