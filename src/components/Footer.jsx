"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { fetchFullCatalog } from "@/lib/data-fetcher";
import { getContactValue, getPhoneNumbers } from "@/lib/contact-utils";

export default function Footer() {
  const [contactInfo, setContactInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [districtData, setDistrictData] = useState(null);
  const [categories, setCategories] = useState([]);

  const pathname = usePathname();

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const staticRoutes = [
    "about",
    "services",
    "products",
    "contact",
    "items",
  ];

  const district =
    pathParts.length > 0 &&
      !staticRoutes.includes(pathParts[0])
      ? pathParts[0]
      : "";

  useEffect(() => {
    const contactRef = doc(
      db,
      "websites",
      "safekitin",
      "pages",
      "contact"
    );

    const unsubscribe = onSnapshot(
      contactRef,
      (snap) => {
        setContactInfo(
          snap.exists() ? snap.data().contactInfo || [] : []
        );
        setLoading(false);
      },
      (err) => {
        console.error("Error loading contact details:", err);
        setContactInfo([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const loadDistrict = async () => {
      if (!district) return;

      try {
        const snap = await getDoc(
          doc(
            db,
            "websites",
            "safekitin",
            "districts",
            district
          )
        );

        if (snap.exists()) {
          setDistrictData(snap.data());
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadDistrict();
  }, [district]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const catalog = await fetchFullCatalog();
        const uniqueCategories = Array.from(
          new Set(catalog.map((item) => item.category).filter(Boolean))
        );
        setCategories(uniqueCategories.slice(0, 7));
      } catch (err) {
        console.error("Error loading categories in footer:", err);
      }
    };
    loadCategories();
  }, []);

  const phoneNumbers = getPhoneNumbers(contactInfo);
  const email = getContactValue(contactInfo, "email");
  const address = getContactValue(contactInfo, "address");
  const districtAddress = districtData?.address || districtData?.officeAddress || "";
  const dynamicAddress = districtAddress || address;

  const makeLink = (path) => {
    if (!district) return path;

    if (path === "/") {
      return `/${district}`;
    }

    return `/${district}${path}`;
  };

  if (loading) {
    return (
      <footer className="bg-white border-t border-slate-200">
        <div className="container-custom py-16">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-8 w-40 bg-slate-200 rounded animate-pulse mb-6" />

                {[...Array(5)].map((_, j) => (
                  <div
                    key={j}
                    className="h-5 bg-slate-200 rounded animate-pulse mb-4"
                  />
                ))}
              </div>
            ))}

          </div>

          <div className="border-t border-slate-200 mt-12 pt-6">
            <div className="h-5 w-72 bg-slate-200 rounded animate-pulse" />
          </div>

        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#FCFAF7] border-t border-[#E8DDE0]">
      <div className="container-custom py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">


          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold text-[#880514]">
              Raj
              <span className="text-[#241015]">
                {" "}Biosis
              </span>
            </h2>


            <p className="mt-5 text-[#514348] leading-7">
              Delivering trusted diagnostic
              and biomedical solutions with
              innovation, quality, and
              precision healthcare support.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/rajbiosispvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#E8DDE0] flex items-center justify-center text-[#880514] hover:bg-[#880514] hover:text-white transition shadow-sm"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/rajbiosisindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#E8DDE0] flex items-center justify-center text-[#880514] hover:bg-[#880514] hover:text-white transition shadow-sm"
              >
                <FaInstagram size={18} />
              </a>
            </div>

          </div>



          {/* Quick Links */}
          <div className="w-fit">

            <h3 className="text-lg font-semibold mb-5 text-[#241015]">
              Quick Links
            </h3>


            <div className="flex w-fit flex-col gap-3 text-[#514348]">

              <Link
                href={makeLink("/")}
                className="hover:text-[#880514] transition"
              >
                Home
              </Link>


              <Link
                href={makeLink("/about")}
                className="hover:text-[#880514] transition"
              >
                About
              </Link>


              <Link
                href={makeLink("/services")}
                className="hover:text-[#880514] transition"
              >
                Services
              </Link>


              <Link
                href={makeLink("/items")}
                className="hover:text-[#880514] transition"
              >
                Products
              </Link>


              <Link
                href={makeLink("/contact")}
                className="hover:text-[#880514] transition"
              >
                Contact
              </Link>

            </div>

          </div>



          {/* Categories */}
          <div className="w-fit">

            <h3 className="text-lg font-semibold mb-5 text-[#241015]">
              Our Categories
            </h3>

            <div className="flex w-fit flex-col gap-3 text-[#514348]">

              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={makeLink(
                    `/items#${cat.replace(/\s+/g, "-").toLowerCase()}`
                  )}
                  className="w-fit hover:text-[#880514] transition text-left"
                >
                  {cat}
                </Link>
              ))}

              {categories.length === 0 && (
                <>
                  <p>Medical Safety Kits</p>
                  <p>Specimen Collection</p>
                  <p>Protective PPE Gear</p>
                  <p>Safety Compliance</p>
                </>
              )}

            </div>

          </div>





          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-5 text-[#241015]">
              Contact Info
            </h3>


            <div className="space-y-4 text-[#514348]">


              <div className="flex items-start gap-4">

                <div className="
    w-12
    h-12
    rounded-2xl
    bg-[#FFF6D6]
    flex
    items-center
    justify-center
    flex-shrink-0
  ">
                  <MapPin
                    size={24}
                    className="text-[#880514]"
                  />
                </div>

                <p className="leading-7 pt-2">
                  {dynamicAddress}
                </p>

              </div>




              <div className="flex flex-col gap-2">
                {phoneNumbers.map((num, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Phone
                      size={18}
                      className="text-[#880514] flex-shrink-0"
                    />
                    <a href={`tel:${num}`} className="hover:text-[#880514] transition">
                      {num}
                    </a>
                  </div>
                ))}
              </div>




              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-[#880514]"
                />

                <p>
                  <a href={`mailto:${email}`} className="hover:text-[#880514] transition">
                    {email}
                  </a>
                </p>

              </div>



            </div>


          </div>


        </div>




        {/* Bottom */}
        <div className="border-t border-[#E8DDE0] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#514348]">


          <p>
            © 2026 Raj Biosis.
            All rights reserved.
          </p>


          <p className="mt-3 md:mt-0">
            Designed with precision for
            modern diagnostics.
          </p>


        </div>


      </div>
    </footer>
  );
}