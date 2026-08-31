"use client";

import { motion } from "framer-motion";

export default function PageBanner({
  title,
  subtitle,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF6D6] via-white to-[#FFF9E8] py-28 lg:py-36">


      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E8DDE0]/40 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#880514]/10 rounded-full blur-[120px]" />


      <div className="container-custom relative z-10">


        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center max-w-4xl mx-auto"
        >


          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#241015] leading-tight">

            {title}

          </h1>



          {/* Subtitle */}
          <p className="mt-6 text-[#514348] text-lg leading-8 max-w-2xl mx-auto">

            {subtitle}

          </p>


        </motion.div>


      </div>


    </section>
  );
}