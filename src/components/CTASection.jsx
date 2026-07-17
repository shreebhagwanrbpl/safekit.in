"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export default function CTASection({ city }) {

  const pathname = usePathname();

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
    <section className="section-padding bg-[#FFF8F9]">
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
          className="relative overflow-hidden rounded-[42px] bg-gradient-to-r from-[#7B1E3A] to-[#A63D5A] p-10 lg:p-20 text-white"
        >

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-[100px]" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E8C8D0]/20 rounded-full blur-[120px]" />


          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">


            {/* Left Content */}
            <div>

              <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-5">
                Get In Touch
              </span>


              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Need Premium Biomedical Solutions?
              </h2>


              <p className="mt-6 text-white/80 text-lg leading-8 max-w-xl">
                Discover innovative diagnostic
                systems and trusted biomedical
                technologies tailored for modern
                healthcare excellence.
              </p>

            </div>



            {/* Contact Card */}
            <div className="flex lg:justify-end">

              <div className="bg-white text-[#2D1B21] rounded-[32px] p-8 max-w-md w-full shadow-2xl border border-[#E8C8D0]">


                <div className="w-16 h-16 rounded-2xl bg-[#FFF5F7] text-[#7B1E3A] flex items-center justify-center mb-6">
                  <PhoneCall size={30} />
                </div>


                <h3 className="text-2xl font-bold">
                  Let’s Talk
                </h3>


                <p className="mt-3 text-[#6B4A54] leading-7">
                  Contact our biomedical experts
                  for consultation, equipment,
                  and healthcare support.
                </p>



                <div className="flex flex-col sm:flex-row gap-4 mt-8">


                  <Link
                    href={makeLink("/contact")}
                    className="flex-1"
                  >

                    <button className="w-full bg-[#7B1E3A] text-white px-6 py-4 rounded-2xl font-semibold hover:bg-[#5A132B] hover:scale-[1.02] transition-all flex items-center justify-center gap-2">

                      Contact Us

                      <ArrowRight size={18} />

                    </button>

                  </Link>



                  <a
                    href="tel:+919876543210"
                    className="border-2 border-[#E8C8D0] text-[#7B1E3A] px-6 py-4 rounded-2xl font-semibold hover:bg-[#FFF5F7] transition text-center"
                  >
                    Call Now
                  </a>


                </div>


              </div>

            </div>


          </div>


        </motion.div>

      </div>
    </section>
  );
}