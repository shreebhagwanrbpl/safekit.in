"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import CBG from "../components/img/CBG.png";

import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  BadgeCheck,
} from "lucide-react";

export default function HeroSection({ city }) {
  const [loading, setLoading] = useState(true);

  const [heroData, setHeroData] = useState({
    title: "",
    description: "",
    button1Text: "",
    button2Text: "",
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const snap = await getDoc(
          doc(db, "websites", "centralbiomedicals", "pages", "home")
        );

        if (snap.exists()) {
          setHeroData(snap.data());
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // District Routing
  const districtSlug = city
    ? city.toLowerCase().replace(/\s+/g, "-")
    : "";

  const makeLink = (path) => {
    return districtSlug ? `/${districtSlug}${path}` : path;
  };

  return (
    <section className="gradient-bg overflow-hidden">
      <div className="container-custom min-h-[85vh] py-20 lg:py-0 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8C8D0] bg-[#FFF5F7] px-4 py-2 text-sm font-semibold text-[#7B1E3A] mb-7 shadow-sm">
            <ShieldCheck size={18} className="text-[#7B1E3A]" />
            Trusted Biomedical Systems
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-[#2D1B21]">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-12 bg-[#F3E5E8] rounded w-[80%]"></div>
                <div className="h-12 bg-[#F3E5E8] rounded w-[60%]"></div>
                <div className="h-12 bg-[#F3E5E8] rounded w-[70%]"></div>
              </div>
            ) : (
              <>
                {heroData.title}

                {city && (
                  <>
                    <br />
                    <span className="text-2xl lg:text-4xl font-semibold text-[#7B1E3A]">
                      in {city}
                    </span>
                  </>
                )}
              </>
            )}
          </h1>

          {/* Description */}
          {loading ? (
            <div className="animate-pulse mt-7 space-y-3">
              <div className="h-4 bg-[#F3E5E8] rounded w-full"></div>
              <div className="h-4 bg-[#F3E5E8] rounded w-[90%]"></div>
              <div className="h-4 bg-[#F3E5E8] rounded w-[75%]"></div>
            </div>
          ) : (
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B4A54]">
              {heroData.description}
              {city && (
                <>
                  {" "}across{" "}
                  <strong className="text-[#7B1E3A]">{city}</strong>
                </>
              )}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {loading ? (
              <>
                <div className="animate-pulse h-12 w-44 rounded-xl bg-[#F3E5E8]"></div>
                <div className="animate-pulse h-12 w-36 rounded-xl bg-[#F3E5E8]"></div>
              </>
            ) : (
              <>
                <Link href={makeLink("/services")}>
                  <button className="flex items-center gap-2 rounded-xl bg-[#7B1E3A] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#5A132B] hover:shadow-xl">
                    {heroData.button1Text || "Explore Services"}
                    <ArrowRight size={18} />
                  </button>
                </Link>

                <Link href={makeLink("/contact")}>
                  <button className="rounded-xl border-2 border-[#7B1E3A] bg-white px-8 py-4 font-semibold text-[#7B1E3A] transition-all duration-300 hover:bg-[#FFF5F7] hover:text-[#5A132B]">
                    {heroData.button2Text || "Contact Us"}
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-[#7B1E3A]">
                10+
              </h3>
              <p className="mt-1 text-[#6B4A54]">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#7B1E3A]">
                500+
              </h3>
              <p className="mt-1 text-[#6B4A54]">
                Products Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#7B1E3A]">
                100%
              </h3>
              <p className="mt-1 text-[#6B4A54]">
                Quality Assurance
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="glass-card rounded-[40px] border border-[#E8C8D0] bg-white p-6 shadow-[0_20px_60px_rgba(123,30,58,0.12)]">

            <Image
              src={CBG}
              alt="Central Biomedical"
              width={1200}
              height={900}
              className="rounded-[28px] object-cover object-[20%_center] h-[350px] sm:h-[450px] lg:h-[550px] w-full"
            />

          </div>


          {/* Floating Card 1 */}
          <div
            className="absolute top-10 -left-10 hidden items-center gap-4 rounded-3xl border border-[#E8C8D0] bg-white p-5 shadow-xl lg:flex"
            style={{ marginTop: "-27px" }}
          >

            <div className="rounded-2xl bg-[#FFF5F7] p-3">
              <Microscope className="text-[#7B1E3A]" />
            </div>


            <div>
              <h4 className="font-semibold text-[#2D1B21]">
                Modern Labs
              </h4>

              <p className="text-sm text-[#6B4A54]">
                Precision Equipment
              </p>
            </div>

          </div>


          {/* Floating Card 2 */}
          <div className="absolute bottom-10 -right-8 hidden items-center gap-4 rounded-3xl border border-[#E8C8D0] bg-white p-5 shadow-xl lg:flex">

            <div className="rounded-2xl bg-[#FFF5F7] p-3">
              <BadgeCheck className="text-[#7B1E3A]" />
            </div>


            <div>
              <h4 className="font-semibold text-[#2D1B21]">
                Trusted Quality
              </h4>

              <p className="text-sm text-[#6B4A54]">
                Certified Solutions
              </p>
            </div>

          </div>


        </motion.div>

      </div>
    </section>
  );
}