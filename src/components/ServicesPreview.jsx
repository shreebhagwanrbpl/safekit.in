"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function ServicesPreview() {
  const services = [
    {
      icon: <Microscope size={30} />,
      title: "Safety Kit Supply",
      description:
        "Ready-to-use and configurable safety supplies for clinical handling, collection and emergency needs.",
    },
    {
      icon: <FlaskConical size={30} />,
      title: "Collection & Transport Supplies",
      description:
        "Options for specimen handling, containment, transfer and organized collection workflows.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Protective Consumables",
      description:
        "Protective wear and routine consumables for staff-facing and patient-facing environments.",
    },
    {
      icon: <Stethoscope size={30} />,
      title: "Usage & Product Guidance",
      description:
        "Practical help with selecting products according to the task, environment, quantity and stated specifications.",
    }
  ];

  return (
    <section className="section-padding bg-[#FCFAF7]">

      <div className="container-custom">


        {/* Title */}
        <SectionTitle
          badge="Services for Safer Clinical Workflows"
          title="Procurement & Support for Clinical Supplies"
          description="We help healthcare teams source safety products and biomedical essentials with clear specifications, practical guidance and dependable follow-up."
          center
        />



        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">


          {services.map(
            (service, index) => (

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
                className="hover:drop-shadow-[0_20px_40px_rgba(123,30,58,0.12)] transition"
              >


                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={
                    service.description
                  }
                />


              </motion.div>

            )
          )}


        </div>


      </div>


    </section>
  );
}