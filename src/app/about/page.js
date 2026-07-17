import Image from "next/image";

import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import DDS from "@/components/img/Dds.png";

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        title="About Central Biomedicals"
        subtitle="Delivering trusted diagnostic and biomedical technologies with innovation, quality, and healthcare precision."
      />

      {/* About Section */}
      <section className="section-padding bg-[#FFF8F9]">

        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">


          {/* Left Image */}
          <div className="relative">


            <div className="rounded-[40px] overflow-hidden border border-[#E8C8D0] bg-white p-10 shadow-[0_20px_60px_rgba(123,30,58,0.10)] h-[600px] flex items-center justify-center">

              <Image
                src={DDS}
                alt="About"
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain"
              />

            </div>




            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-[26px] border border-[#E8C8D0] shadow-2xl hidden lg:block">


              <h3 className="text-3xl font-bold text-[#7B1E3A]">
                10+
              </h3>


              <p className="text-[#6B4A54]">
                Years of Excellence
              </p>


            </div>


          </div>





          {/* Right Content */}
          <div>


            <SectionTitle
              badge="Who We Are"
              title="Trusted Partner in Biomedical & Diagnostics"
              description="We provide advanced diagnostic and biomedical solutions focused on healthcare innovation, laboratory precision, and modern medical excellence."
            />




            <p className="mt-8 text-[#6B4A54] leading-8">

              At Central Biomedicals,
              we are committed to
              delivering premium-quality
              healthcare and biomedical
              technologies designed to
              improve diagnostics,
              laboratory performance,
              and medical efficiency.

            </p>




            <p className="mt-5 text-[#6B4A54] leading-8">

              Our mission is to empower
              healthcare professionals
              with trusted equipment,
              expert consultation, and
              innovative biomedical
              support.

            </p>





            {/* Feature Points */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">


              <div className="bg-white p-5 rounded-2xl border border-[#E8C8D0] shadow-sm hover:-translate-y-1 transition-all duration-300">

                <h4 className="font-semibold text-lg text-[#2D1B21]">
                  Premium Equipment
                </h4>


                <p className="text-[#6B4A54] mt-2">
                  High-end diagnostic
                  technologies.
                </p>


              </div>




              <div className="bg-white p-5 rounded-2xl border border-[#E8C8D0] shadow-sm hover:-translate-y-1 transition-all duration-300">

                <h4 className="font-semibold text-lg text-[#2D1B21]">
                  Expert Support
                </h4>


                <p className="text-[#6B4A54] mt-2">
                  Trusted healthcare
                  consultation.
                </p>


              </div>


            </div>


          </div>


        </div>


      </section>
    </>
  );
}