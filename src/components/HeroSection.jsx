"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import {
  ArrowRight,
  ShieldCheck,
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
          doc(db, "websites", "safekitin", "pages", "home")
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
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat hero-section"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(29, 14, 18, 0.72), rgba(90, 19, 43, 0.55)), url('/homebanner.png')",
        minHeight: "55vh"
      }}
    >
      <div className="container-custom min-h-[55vh] py-10 flex items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#FFF6D6] mb-7 shadow-lg backdrop-blur-md">
            <ShieldCheck size={18} className="text-[#FFF6D6]" />
            Purpose-Built Safety & Diagnostic Supplies
          </div>

          {/* Title */}
          <h1 className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-12 bg-white/20 rounded w-[80%]"></div>
                <div className="h-12 bg-white/20 rounded w-[60%]"></div>
                <div className="h-12 bg-white/20 rounded w-[70%]"></div>
              </div>
            ) : (
              <>
                {heroData.title}

                {city && (
                  <>
                    <br />
                    <span className="text-2xl lg:text-4xl font-semibold text-[#FFF6D6]">
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
              <div className="h-4 bg-white/20 rounded w-full"></div>
              <div className="h-4 bg-white/20 rounded w-[90%]"></div>
              <div className="h-4 bg-white/20 rounded w-[75%]"></div>
            </div>
          ) : (
            <p className="mt-7 text-lg leading-8 text-[#FFF6D6]/90 font-medium">
              {heroData.description}
              {city && (
                <>
                  {" "}across{" "}
                  <strong className="text-white">{city}</strong>
                </>
              )}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {loading ? (
              <>
                <div className="animate-pulse h-12 w-44 rounded-xl bg-white/20"></div>
                <div className="animate-pulse h-12 w-36 rounded-xl bg-white/20"></div>
              </>
            ) : (
              <>
                <Link href={makeLink("/items")}>
                  <button className="flex items-center gap-2 rounded-xl bg-[#880514] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#6F0411] hover:shadow-xl hover:-translate-y-0.5">
                    {heroData.button1Text || "Browse Safety Range"}
                    <ArrowRight size={18} />
                  </button>
                </Link>

                <Link href={makeLink("/contact")}>
                  <button className="rounded-xl border-2 border-white/80 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#880514] hover:border-white hover:-translate-y-0.5">
                    {heroData.button2Text || "Talk to Our Team"}
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 border-t border-white/10 pt-6">
            <div>
              <h3 className="text-3xl font-bold text-white">
                10+
              </h3>
              <p className="mt-1 text-[#FFF6D6]/80">
                Industry Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>
              <p className="mt-1 text-[#FFF6D6]/80">
                Solutions Supplied
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100%
              </h3>
              <p className="mt-1 text-[#FFF6D6]/80">
                Quality-Focused Selection
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}