export default function SeoContent({ city = "" }) {
    const location = city || "India";

    return (
        <section className="py-20 bg-[#FFF8F9]">

            <div className="container-custom">


                {/* Main Heading */}
                <h2 className="text-4xl font-extrabold text-[#2D1B21] mb-8">
                    Biomedical Equipment Supplier in {location}
                </h2>



                {/* Content */}
                <div className="space-y-6 text-[#6B4A54] leading-8 text-lg">


                    <p>
                        Central Biomedicals is a trusted supplier of biomedical
                        and laboratory equipment in {location}. We provide
                        CBC Machines, Hematology Analyzers, Biochemistry
                        Analyzers, Urine Analyzers, ELISA Readers and
                        diagnostic instruments for hospitals, pathology labs
                        and healthcare facilities.
                    </p>



                    <p>
                        Our mission is to provide reliable and high-quality
                        laboratory equipment to healthcare professionals across
                        India. We work with diagnostic centres, hospitals,
                        research laboratories and medical institutions to
                        deliver advanced biomedical solutions.
                    </p>



                    <p>
                        We offer installation assistance, product guidance and
                        technical support for a wide range of laboratory
                        instruments. Whether you are setting up a new
                        diagnostic laboratory or upgrading existing equipment,
                        our team can help you select the right solution.
                    </p>



                    <p>
                        Central Biomedicals supplies equipment across multiple
                        districts and cities, helping healthcare providers
                        improve testing efficiency and diagnostic accuracy.
                    </p>


                </div>





                {/* FAQ Section */}
                <div className="mt-16">


                    <h2 className="text-3xl font-extrabold text-[#2D1B21] mb-8">
                        Frequently Asked Questions
                    </h2>




                    <div className="space-y-6">



                        <div className="rounded-2xl border border-[#E8C8D0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#7B1E3A]">
                                Do you supply biomedical equipment across India?
                            </h3>

                            <p className="text-[#6B4A54] mt-2">
                                Yes, we supply biomedical and laboratory
                                equipment across multiple districts and cities.
                            </p>

                        </div>





                        <div className="rounded-2xl border border-[#E8C8D0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#7B1E3A]">
                                Which laboratory instruments do you provide?
                            </h3>

                            <p className="text-[#6B4A54] mt-2">
                                We provide CBC Machines, Hematology Analyzers,
                                Biochemistry Analyzers, ELISA Readers, Urine
                                Analyzers and other diagnostic equipment.
                            </p>

                        </div>





                        <div className="rounded-2xl border border-[#E8C8D0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#7B1E3A]">
                                Do you provide installation support?
                            </h3>

                            <p className="text-[#6B4A54] mt-2">
                                Yes, installation assistance and technical
                                support are available depending on location and
                                equipment type.
                            </p>

                        </div>





                        <div className="rounded-2xl border border-[#E8C8D0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#7B1E3A]">
                                Who can purchase biomedical equipment?
                            </h3>

                            <p className="text-[#6B4A54] mt-2">
                                Hospitals, pathology labs, diagnostic centres,
                                research laboratories and healthcare facilities
                                can purchase equipment from us.
                            </p>

                        </div>



                    </div>


                </div>


            </div>

        </section>
    );
}