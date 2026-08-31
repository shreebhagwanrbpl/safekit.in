"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Laboratory Operations Lead",
      review:
        "The product information made it easier for our team to compare collection and safety supplies before placing an order.",
    },
    {
      name: "Amit Sharma",
      role: "Procurement Coordinator",
      review:
        "We value the clear specifications and quick responses when we need help with routine supply requirements.",
    },
    {
      name: "Neha Verma",
      role: "Clinical Support Coordinator",
      review:
        "SafeKit has been useful when we need practical safety items for day-to-day clinical operations and replenishment.",
    }
  ];

  return (
    <section className="section-padding bg-[#FCFAF7]">

      <div className="container-custom">


        <SectionTitle
          badge="Customer Experiences"
          title="What Customers Say About Working With Us"
          description="Feedback from teams using safety supplies in clinical, collection and laboratory settings."
          center
        />



        <div className="grid lg:grid-cols-3 gap-8 mt-16">


          {reviews.map((item, index) => (

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
              className="bg-white rounded-[32px] p-8 border border-[#E8DDE0] shadow-[0_15px_40px_rgba(136,5,20,0.08)] hover:-translate-y-2 transition-all duration-300"
            >


              {/* Stars */}
              <div className="flex gap-1 text-[#C59A00] text-xl mb-5">
                ★★★★★
              </div>




              {/* Review */}
              <p className="text-[#514348] leading-8 italic">
                "{item.review}"
              </p>




              {/* User */}
              <div className="mt-8 border-t border-[#E8DDE0] pt-5">

                <h4 className="font-semibold text-lg text-[#241015]">
                  {item.name}
                </h4>


                <p className="text-[#514348]">
                  {item.role}
                </p>

              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}