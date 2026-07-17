"use client";
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Activity,
} from "lucide-react";

import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const icons = [
    <Microscope size={30} />,
    <FlaskConical size={30} />,
    <ShieldCheck size={30} />,
    <Stethoscope size={30} />,
    <Wrench size={30} />,
    <Activity size={30} />,
  ];
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const snap = await getDoc(
          doc(
            db,
            "websites",
            "centralbiomedicals",
            "pages",
            "services"
          )
        );

        if (snap.exists()) {
          setServices(snap.data().services || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
  return (
    <>
      {/* Banner */}
      <PageBanner
        title="Our Services"
        subtitle="Delivering trusted biomedical and diagnostic services with innovation, precision, and healthcare excellence."
      />

      {/* Services Grid */}
      <section className="section-padding bg-[#FFF8F9]">

        <div className="container-custom">


          <SectionTitle
            badge="What We Offer"
            title="Premium Biomedical Services"
            description="We provide innovative healthcare and biomedical solutions tailored to modern diagnostics and laboratory excellence."
            center
          />



          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">


            {loading

              ? Array.from({ length: 6 }).map((_, index) => (

                <div
                  key={index}
                  className="
              bg-white
              rounded-[30px]
              p-10
              border border-[#E8C8D0]
              shadow-[0_15px_40px_rgba(123,30,58,0.08)]
              animate-pulse
            "
                >


                  <div className="
              w-20
              h-20
              rounded-3xl
              bg-[#F3E5E8]
              mb-8
            ">
                  </div>




                  <div className="
              h-8
              bg-[#F3E5E8]
              rounded
              mb-6
            ">
                  </div>




                  <div className="space-y-3">


                    <div className="h-4 bg-[#F3E5E8] rounded">
                    </div>


                    <div className="h-4 bg-[#F3E5E8] rounded w-11/12">
                    </div>


                    <div className="h-4 bg-[#F3E5E8] rounded w-8/12">
                    </div>


                  </div>


                </div>


              ))


              : services.map((service, index) => (

                <ServiceCard
                  key={index}
                  icon={icons[index]}
                  title={service.title}
                  description={service.desc}
                />

              ))}



          </div>


        </div>


      </section>

      {/* Working Process */}
      <section className="section-padding bg-[#FFF8F9]">

        <div className="container-custom">


          <SectionTitle
            badge="How We Work"
            title="Simple & Professional Process"
            description="We follow a streamlined process to ensure reliable biomedical and healthcare solutions."
            center
          />



          <div className="grid lg:grid-cols-3 gap-8 mt-16">


            {[
              {
                step: "01",
                title: "Consultation",
                desc:
                  "Understanding healthcare requirements and diagnostics needs.",
              },
              {
                step: "02",
                title: "Implementation",
                desc:
                  "Delivering biomedical equipment and technical setup.",
              },
              {
                step: "03",
                title: "Support",
                desc:
                  "Providing maintenance and healthcare assistance.",
              },
            ].map((item, index) => (


              <div
                key={index}
                className="
            bg-white
            rounded-[30px]
            p-8
            border border-[#E8C8D0]
            shadow-[0_15px_40px_rgba(123,30,58,0.08)]
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(123,30,58,0.15)]
            transition-all
            duration-300
          "
              >



                {/* Step Number */}
                <span className="
            text-5xl
            font-bold
            text-[#E8C8D0]
          ">
                  {item.step}
                </span>




                {/* Title */}
                <h3 className="
            text-2xl
            font-semibold
            mt-5
            text-[#2D1B21]
          ">
                  {item.title}
                </h3>




                {/* Description */}
                <p className="
            text-[#6B4A54]
            mt-4
            leading-7
          ">
                  {item.desc}
                </p>



              </div>


            ))}


          </div>


        </div>


      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}