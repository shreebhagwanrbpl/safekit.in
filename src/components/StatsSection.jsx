"use client";

import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  BadgeCheck,
  Building2,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Building2 size={34} />,
      number: "10+",
      label: "Industry Experience",
    },
    {
      icon: <FlaskConical size={34} />,
      number: "500+",
      label: "Safety & Biomedical Items",
    },
    {
      icon: <Users size={34} />,
      number: "200+",
      label: "Healthcare Customers",
    },
    {
      icon: <BadgeCheck size={34} />,
      number: "100%",
      label: "Quality-Focused Range",
    },
  ];

  return (
    <section className="section-padding bg-[#FCFAF7]">

      <div className="container-custom">


        <div className="bg-white rounded-[40px] p-10 lg:p-16 border border-[#E8DDE0] shadow-[0_20px_60px_rgba(136,5,20,0.08)]">


          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">


            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
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
                className="text-center"
              >


                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-[24px] bg-[#FFF6D6] text-[#880514] flex items-center justify-center mb-6">
                  {item.icon}
                </div>



                {/* Number */}
                <h3 className="text-4xl lg:text-5xl font-bold text-[#241015]">
                  {item.number}
                </h3>



                {/* Label */}
                <p className="mt-3 text-[#514348] text-lg">
                  {item.label}
                </p>


              </motion.div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
}