"use client";

import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Activity,
} from "lucide-react";

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
            "safekitin",
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
    <div className="site9-static">
      {/* Services Introduction */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              badge="What We Offer"
              title="Clinical Safety & Biomedical Supply Services"
              description="We support healthcare organizations with product sourcing, safety-supply guidance and practical assistance for routine laboratory and clinical requirements."
              center
            />

            <div className="mt-8 space-y-5 text-[#514348] leading-8">
              <p>
                Modern laboratories require more than high-quality equipment.
                They also need proper planning, technical understanding,
                installation assistance, maintenance, and responsive support.
                Our services are designed around these practical requirements
                so that healthcare professionals can operate their equipment
                with greater confidence.
              </p>

              <p>
                We work with customers to understand their application,
                workflow, equipment requirements, and operational priorities.
                Based on these requirements, we help identify suitable
                solutions and provide assistance throughout the equipment
                lifecycle.
              </p>

              <p>
                Our focus is on building reliable and long-term relationships
                with healthcare organizations by combining product knowledge,
                technical support, professional communication, and practical
                service assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Healthcare Supply Services"
            title="Support Built Around the Job at Hand"
            description="Explore services that help teams identify suitable safety products, understand specifications and manage recurring biomedical supply needs."
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
                      border border-[#E8DDE0]
                      shadow-[0_15px_40px_rgba(136,5,20,0.08)]
                      animate-pulse
                    "
                >
                  <div
                    className="
                        w-20
                        h-20
                        rounded-3xl
                        bg-[#FFF8E5]
                        mb-8
                      "
                  />

                  <div
                    className="
                        h-8
                        bg-[#FFF8E5]
                        rounded
                        mb-6
                      "
                  />

                  <div className="space-y-3">
                    <div className="h-4 bg-[#FFF8E5] rounded" />
                    <div className="h-4 bg-[#FFF8E5] rounded w-11/12" />
                    <div className="h-4 bg-[#FFF8E5] rounded w-8/12" />
                  </div>
                </div>
              ))
              : services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={icons[index % icons.length]}
                  title={service.title}
                  description={service.desc}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              badge="What We Can Help With"
              title="From Product Enquiry to Ongoing Supply"
              description="From the first product question to repeat procurement, our support is designed to keep the buying process clear and practical."
              center
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#880514] text-white flex items-center justify-center">
                <Microscope size={27} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Product Selection Help
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                We help healthcare organizations understand equipment
                specifications, applications, workflow requirements, and
                available options before making purchasing decisions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#880514] text-white flex items-center justify-center">
                <Wrench size={27} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Order & Setup Coordination
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                Proper installation and setup are important for dependable
                equipment operation. We assist customers with implementation
                requirements and technical coordination.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#880514] text-white flex items-center justify-center">
                <ShieldCheck size={27} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Repeat Supply Assistance
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                Regular maintenance and timely technical assistance can help
                laboratories maintain equipment performance and reduce
                unnecessary operational interruptions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#880514] text-white flex items-center justify-center">
                <Activity size={27} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Get Product Guidance
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                Our support approach focuses on helping customers address
                technical requirements and understand the practical use of
                their biomedical systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionTitle
                badge="Why Healthcare Supply Services Matter"
                title="Clear Information Makes Healthcare Procurement Easier"
                description="Healthcare teams often need to make purchasing decisions quickly while balancing application, quantity, specifications and budget. Clear information helps reduce avoidable confusion."
              />
            </div>

            <div className="space-y-6 text-[#514348] leading-8">
              <p>
                A product should make sense for the work it is expected to perform. That means looking beyond a product name and checking its application, configuration, capacity, handling needs and other relevant details.
              </p>

              <p>
                Our role is to make those details easier to understand. We help customers frame the requirement clearly and identify which product information deserves attention.
              </p>

              <p>
                For products that need additional coordination, clear communication around delivery, setup and follow-up can make the overall procurement experience smoother.
              </p>

              <p>
                We keep the focus on useful information, practical communication and support that can continue when the same product is needed again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <SectionTitle
            badge="Our Enquiry Process"
            title="A Clear Path From Requirement to Supply"
            description="We keep the process straightforward so the product requirement, quantity and next steps are easy to understand."
            center
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: "01",
                title: "Tell Us What You Need",
                desc:
                  "Share the product name, application, quantity or any available specification you already have.",
              },
              {
                step: "02",
                title: "Narrow the Options",
                desc:
                  "We use the available requirement to point you toward relevant products and clarify important specifications or variants.",
              },
              {
                step: "03",
                title: "Finalize the Requirement",
                desc:
                  "Once the preferred item is clear, we confirm quantity, delivery details and any additional information needed for the order.",
              },
              {
                step: "04",
                title: "Get Product Guidance",
                desc:
                  "Questions about specifications, application or product details can be raised before or after the enquiry.",
              },
              {
                step: "05",
                title: "Plan Repeat Requirements",
                desc:
                  "Plan Repeat Requirements assistance helps customers plan for continued equipment performance and address service requirements when they arise.",
              },
              {
                step: "06",
                title: "Long-Term Support",
                desc:
                  "We aim to maintain strong customer relationships by providing responsive communication and support as healthcare technology requirements evolve.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  border border-[#E8DDE0]
                  shadow-[0_15px_40px_rgba(136,5,20,0.08)]
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(136,5,20,0.15)]
                  transition-all
                  duration-300
                "
              >
                <span
                  className="
                    text-5xl
                    font-bold
                    text-[#E8DDE0]
                  "
                >
                  {item.step}
                </span>

                <h3
                  className="
                    text-2xl
                    font-semibold
                    mt-5
                    text-[#241015]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[#514348]
                    mt-4
                    leading-7
                  "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Focus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="rounded-[35px] bg-[#880514] px-8 py-12 lg:px-16 lg:py-14 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#FFF6D6]">
                  Our Commitment
                </span>

                <h2 className="mt-4 text-3xl lg:text-4xl font-black text-white leading-tight">
                  Support When You Need the Next Step
                </h2>
              </div>

              <div className="text-[#FFF9E8] leading-8">
                <p>
                  We believe that successful biomedical equipment
                  relationships are built through dependable communication and
                  continued assistance. Our objective is to understand customer
                  requirements, respond to technical needs, and help healthcare
                  organizations get practical value from their equipment.
                </p>

                <p className="mt-4">
                  Whether you are establishing a new laboratory, expanding an
                  existing facility, upgrading equipment, or planning
                  maintenance support, our team is available to discuss your
                  requirements and identify suitable next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}