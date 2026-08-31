export default function SeoContent({ city = "" }) {
    const location = city || "India";

    return (
        <section className="py-20 bg-[#FCFAF7]">

            <div className="container-custom">


                {/* Main Heading */}
                <h2 className="text-4xl font-extrabold text-[#241015] mb-8">
                    Medical Safety Kits & Clinical Safety Supplies Supplier in {location}
                </h2>



                {/* Content */}
                <div className="space-y-6 text-[#514348] leading-8 text-lg">


                    <p>Raj Biosis distributes medical safety kits and clinical protective supplies across multiple cities, securing safety compliance for diagnostic centers and healthcare teams.</p>


                </div>





                {/* FAQ Section */}
                <div className="mt-16">


                    <h2 className="text-3xl font-extrabold text-[#241015] mb-8">
                        Frequently Asked Questions
                    </h2>




                    <div className="space-y-6">



                        <div className="rounded-2xl border border-[#E8DDE0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#880514]">Do you supply medical safety kits across India?</h3>

                            <p className="text-[#514348] mt-2">Yes, we supply medical safety kits, specimen collection supplies, and clinical protective wear across multiple districts and cities in India.</p>

                        </div>





                        <div className="rounded-2xl border border-[#E8DDE0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#880514]">Which clinical safety products do you supply?</h3>

                            <p className="text-[#514348] mt-2">We supply sterile first aid kits, clinical safety kits, specimen collection containers, medical PPE, and laboratory safety gear.</p>

                        </div>





                        <div className="rounded-2xl border border-[#E8DDE0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#880514]">Do you provide support for safety compliance?</h3>

                            <p className="text-[#514348] mt-2">Yes, we provide detailed technical specifications, certifications, and product sheets to ensure your safety tools meet regulatory standards.</p>

                        </div>





                        <div className="rounded-2xl border border-[#E8DDE0] bg-white p-6 shadow-sm">

                            <h3 className="font-semibold text-xl text-[#880514]">Who can purchase clinical safety kits from you?</h3>

                            <p className="text-[#514348] mt-2">Hospitals, health clinics, diagnostic collection centers, corporate medical departments, and safety compliance managers can order safety kits from us.</p>

                        </div>



                    </div>


                </div>


            </div>

        </section>
    );
}