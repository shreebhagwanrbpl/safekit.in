"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getPhoneNumbers } from "@/lib/contact-utils";
import {
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export default function CTASection({ city }) {

  const pathname = usePathname();
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  useEffect(() => {
    const contactRef = doc(db, "websites", "safekitin", "pages", "contact");

    const unsubscribe = onSnapshot(
      contactRef,
      (snap) => {
        const info = snap.exists() ? snap.data().contactInfo || [] : [];
        setPhoneNumbers(getPhoneNumbers(info));
      },
      (error) => {
        console.error("Error loading CTA contact details:", error);
        setPhoneNumbers([]);
      }
    );

    return () => unsubscribe();
  }, []);

  const staticRoutes = [
    "about",
    "services",
    "products",
    "contact",
    "items",
    "enquiry",
  ];

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const urlDistrict =
    pathParts.length > 0 &&
      !staticRoutes.includes(pathParts[0])
      ? pathParts[0]
      : "";

  const districtSlug = city
    ? city.toLowerCase().replace(/\s+/g, "-")
    : urlDistrict;

  const makeLink = (path) => {
    if (!districtSlug) return path;

    if (path === "/") {
      return `/${districtSlug}`;
    }

    return `/${districtSlug}${path}`;
  };

  return (
    <section className="section-padding bg-[#FCFAF7]">
      <div className="container-custom">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[42px] bg-gradient-to-r from-[#880514] to-[#C59A00] p-10 lg:p-20 text-white"
        >

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-[100px]" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E8DDE0]/20 rounded-full blur-[120px]" />


          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">


            {/* Left Content */}
            <div>

              <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-5">
                Need Help Choosing a Safety Product?
              </span>


              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Planning Your Next Safety Supply Order?</h2>


              <p className="mt-6 text-white/80 text-lg leading-8 max-w-xl">Tell us what your facility needs and we can help narrow down suitable safety, collection and biomedical supply options.</p>

            </div>



            {/* Contact Card */}
            <div className="flex lg:justify-end">

              <div className="bg-white text-[#241015] rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-[#E8DDE0]">


                <div className="w-16 h-16 rounded-2xl bg-[#FFF6D6] text-[#880514] flex items-center justify-center mb-6">
                  <PhoneCall size={30} />
                </div>


                <h3 className="text-2xl font-bold">
                  Speak With Our Team
                </h3>


                <p className="mt-3 text-[#514348] leading-7">
                  Share your requirement, quantity or product question and our team can guide you toward the next step.
                </p>



                <div className="flex flex-col sm:flex-row gap-4 mt-8">


                  <Link
                    href={makeLink("/contact")}
                    className="flex-1"
                  >

                    <button className="w-full bg-[#880514] text-white px-6 py-4 rounded-2xl font-semibold hover:bg-[#6F0411] hover:scale-[1.02] transition-all flex items-center justify-center gap-2">

                      Send an Enquiry

                      <ArrowRight size={18} />

                    </button>

                  </Link>



                  {phoneNumbers.length > 0 && (
                    <a
                      href={`tel:${phoneNumbers[0].replace(/[^\d+]/g, "")}`}
                      className="border-2 border-[#E8DDE0] text-[#880514] px-6 py-4 rounded-2xl font-semibold hover:bg-[#FFF6D6] transition text-center"
                    >
                      Call the Team
                    </a>
                  )}


                </div>


              </div>

            </div>


          </div>


        </motion.div>

      </div>
    </section>
  );
}