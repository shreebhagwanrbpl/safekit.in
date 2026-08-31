import Image from "next/image";

import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { BASE_URL, BRAND_NAME } from "@/lib/config";

export const metadata = {
  title: `About ${BRAND_NAME} | Leading Biomedical Equipment Supplier`,
  description: `Learn about ${BRAND_NAME}, a trusted supplier of biomedical, pathology and diagnostic laboratory equipment in India. Discover our mission, values and commitment to healthcare quality.`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="site9-static">
      {/* Banner */}
      <PageBanner
        title="About SafeKit"
        subtitle="A practical source for safety products, collection supplies and selected biomedical essentials used across healthcare settings."
      />

      {/* Introduction */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              badge="Inside SafeKit"
              title="Practical Supplies for Safer Healthcare Workflows"
              description="SafeKit supports healthcare teams with a focused range of safety, specimen-handling and biomedical products, backed by clear product information and responsive assistance."
            />

            <div className="mt-8 space-y-5 text-[#514348] leading-8 text-[16px]">
              <p>
                Modern healthcare depends on accurate information, dependable
                laboratory processes, and equipment that performs consistently.
                At Raj Biosis, we understand the importance of these
                requirements and focus on bringing practical, reliable, and
                professionally supported solutions to healthcare environments.
              </p>

              <p>
                We focus on the real task behind a product request: where it will be used, how often it is needed, what quantity is appropriate and which specifications matter for the application.
              </p>

              <p>
                Our catalogue covers practical safety and biomedical requirements, allowing customers to review product details and ask for help when a more specific configuration is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden border border-[#E8DDE0] bg-[#FCFAF7] p-10 shadow-[0_20px_60px_rgba(136,5,20,0.10)] h-[600px] flex items-center justify-center">
              <Image
                src="/aboutimg.png"
                alt="Raj Biosis biomedical and diagnostic solutions"
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-[26px] border border-[#E8DDE0] shadow-2xl hidden lg:block">
              <h3 className="text-3xl font-bold text-[#880514]">
                10+
              </h3>

              <p className="text-[#514348]">
                Years Serving Healthcare Needs
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <SectionTitle
              badge="Our Role"
              title="A Straightforward Source for Clinical & Laboratory Supplies"
              description="We combine product knowledge with a simple enquiry process so healthcare buyers can identify suitable supplies without unnecessary complexity."
            />

            <div className="mt-8 space-y-5 text-[#514348] leading-8">
              <p>
                SafeKit is intended for organizations that need dependable safety supplies and biomedical products for routine operations, replenishment or facility requirements. We aim to keep product information useful and communication responsive.
              </p>

              <p>
                Requirements vary between a small clinic, a sample collection point and a busy laboratory. Product selection should therefore reflect the actual task, operating environment and expected usage.
              </p>

              <p>
                We help customers review specifications, intended applications, pack sizes, technical details and available options so purchasing decisions are easier to make.
              </p>

              <p>
                Good supply support continues after an enquiry. We remain available for product questions, repeat requirements and assistance with understanding the information provided for a selected item.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-[#E8DDE0] shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg text-[#241015]">
                  Selected Product Range
                </h4>

                <p className="text-[#514348] mt-2 leading-7">
                  A focused collection of safety, collection and biomedical items for professional use.
                </p>
              </div>

              <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-[#E8DDE0] shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg text-[#241015]">
                  Clear Product Information
                </h4>

                <p className="text-[#514348] mt-2 leading-7">
                  Useful details that help buyers compare intended use, specifications and available options.
                </p>
              </div>

              <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-[#E8DDE0] shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg text-[#241015]">
                  Responsive Assistance
                </h4>

                <p className="text-[#514348] mt-2 leading-7">
                  Help with product questions, requirements, quotations and follow-up communication.
                </p>
              </div>

              <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-[#E8DDE0] shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-semibold text-lg text-[#241015]">
                  Procurement Support
                </h4>

                <p className="text-[#514348] mt-2 leading-7">
                  A straightforward process for enquiries, repeat orders and routine healthcare supply needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SafeKit Works */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              badge="How SafeKit Works"
              title="Start With the Requirement, Then Match the Product"
              description="We begin with the application and practical requirement, then help identify products that fit the request."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#880514] text-white flex items-center justify-center text-xl font-bold">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Understand the Use Case
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                We look at where the item will be used, the type of work involved, expected quantity and any relevant operating considerations.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#880514] text-white flex items-center justify-center text-xl font-bold">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Review Specifications
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                We compare the available product information, including size, pack, capacity, application and other stated technical details.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#E8DDE0] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#880514] text-white flex items-center justify-center text-xl font-bold">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#241015]">
                Ongoing Assistance
              </h3>

              <p className="mt-3 text-[#514348] leading-7">
                Our customer-focused approach continues beyond procurement with
                assistance related to installation, operation, maintenance, and
                service requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Reliability */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle
                badge="Quality & Reliability"
                title="Solutions Designed Around Professional Healthcare Environments"
                description="Reliability is especially important when equipment becomes part of a laboratory or diagnostic workflow."
              />
            </div>

            <div className="space-y-6 text-[#514348] leading-8">
              <p>
                Laboratory and diagnostic equipment can directly influence
                operational efficiency, testing workflows, and the ability of
                healthcare teams to work consistently. For this reason, we
                place strong emphasis on understanding product specifications
                and intended applications.
              </p>

              <p>
                We help customers navigate different equipment categories and
                technical options so they can identify solutions that align
                with their operational requirements rather than selecting
                equipment based only on basic specifications.
              </p>

              <p>
                Our objective is to build long-term confidence by combining
                suitable products with responsible communication and service
                support. This approach helps customers plan their equipment
                requirements with greater clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-7">
            <div className="bg-white rounded-[30px] p-8 lg:p-10 border border-[#E8DDE0] shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-[#880514]">
                Our Mission
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#241015]">
                Supporting Healthcare With Better Technology Choices
              </h2>

              <p className="mt-5 text-[#514348] leading-8">
                Our mission is to make reliable biomedical and diagnostic
                technologies more accessible to healthcare organizations by
                providing suitable products, useful technical information, and
                dependable customer support.
              </p>

              <p className="mt-4 text-[#514348] leading-8">
                We aim to contribute to better laboratory operations by
                connecting healthcare professionals with solutions that fit
                their practical requirements.
              </p>
            </div>

            <div className="bg-[#880514] rounded-[30px] p-8 lg:p-10 shadow-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FFF6D6]">
                Our Vision
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Growing With the Future of Diagnostics
              </h2>

              <p className="mt-5 text-[#FFF9E8] leading-8">
                Our vision is to become a trusted name in biomedical and
                diagnostic technology by continuously expanding our product
                knowledge, service capabilities, and understanding of the
                changing healthcare landscape.
              </p>

              <p className="mt-4 text-[#FFF9E8] leading-8">
                We look forward to building stronger relationships with
                healthcare professionals and supporting modern laboratories as
                technology and diagnostic practices continue to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Raj Biosis */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              badge="Why Raj Biosis"
              title="A Partner Focused on Long-Term Value"
              description="Choosing biomedical equipment is an important decision for any healthcare organization. We focus on making that decision more informed and practical."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            <div className="text-center p-6 rounded-3xl border border-[#E8DDE0] bg-[#FCFAF7]">
              <h3 className="font-bold text-lg text-[#241015]">
                Product Knowledge
              </h3>
              <p className="mt-3 text-sm text-[#514348] leading-6">
                Clear information about equipment capabilities and applications.
              </p>
            </div>

            <div className="text-center p-6 rounded-3xl border border-[#E8DDE0] bg-[#FCFAF7]">
              <h3 className="font-bold text-lg text-[#241015]">
                Practical Solutions
              </h3>
              <p className="mt-3 text-sm text-[#514348] leading-6">
                Recommendations based on real operational requirements.
              </p>
            </div>

            <div className="text-center p-6 rounded-3xl border border-[#E8DDE0] bg-[#FCFAF7]">
              <h3 className="font-bold text-lg text-[#241015]">
                Responsive Service
              </h3>
              <p className="mt-3 text-sm text-[#514348] leading-6">
                Assistance designed to keep customer communication simple and
                effective.
              </p>
            </div>

            <div className="text-center p-6 rounded-3xl border border-[#E8DDE0] bg-[#FCFAF7]">
              <h3 className="font-bold text-lg text-[#241015]">
                Long-Term Relationships
              </h3>
              <p className="mt-3 text-sm text-[#514348] leading-6">
                We value continued partnerships rather than one-time
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="section-padding bg-[#FCFAF7]">
        <div className="container-custom">
          <div className="rounded-[35px] bg-[#880514] px-8 py-12 lg:px-16 lg:py-16 text-center shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Supporting Your Healthcare Technology Journey
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-[#FFF9E8] text-lg leading-8">
              Whether you are setting up a new laboratory, upgrading existing
              diagnostic capabilities, expanding your equipment portfolio, or
              looking for dependable technical assistance, Raj Biosis is
              committed to helping you explore the right biomedical solutions
              for your requirements.
            </p>

            <p className="max-w-3xl mx-auto mt-4 text-[#FFF9E8] leading-7">
              Our focus remains simple: dependable technology, informed
              decisions, professional support, and lasting customer
              relationships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}