"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Microscope,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Microscope size={30} />,
      title: "Application-Ready Range",
      description: "A focused selection of safety and diagnostic supplies intended for routine clinical and laboratory workflows.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Specification-Led Selection",
      description: "Product choices are reviewed around stated specifications, intended use, handling needs and practical operating conditions.",
    },
    {
      icon: <HeartPulse size={30} />,
      title: "Built for Care Settings",
      description: "Suitable options are available for clinics, collection points, laboratories, hospitals and other care environments.",
    },
    {
      icon: <BadgeCheck size={30} />,
      title: "Helpful Product Guidance",
      description: "Get assistance with product comparisons, quantities, specifications, quotations and routine procurement questions.",
    },
  ];

  return (
    <section className="section-padding bg-[#FCFAF7]">

      <div className="container-custom">


        {/* Section Title */}
        <SectionTitle
          badge="What Makes SafeKit Practical"
          title="Designed Around Everyday Clinical Work"
          description="SafeKit brings together everyday safety products and biomedical essentials with straightforward product information and responsive assistance."
          center
        />



        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">


          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="bg-white p-8 rounded-[28px] border border-[#E8DDE0] shadow-[0_15px_40px_rgba(136,5,20,0.08)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(136,5,20,0.15)] transition-all duration-300"
            >


              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#FFF6D6] text-[#880514] flex items-center justify-center mb-6">
                {item.icon}
              </div>




              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-[#241015]">
                {item.title}
              </h3>




              {/* Description */}
              <p className="text-[#514348] leading-7">
                {item.description}
              </p>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}