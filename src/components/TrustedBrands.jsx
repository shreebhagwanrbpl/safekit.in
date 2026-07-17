export default function TrustedBrands() {
  const brands = [
    "HealthCare+",
    "BioMed Labs",
    "MediCore",
    "Life Diagnostics",
    "Care Plus",
  ];

  return (
    <section className="py-16 bg-[#FFF8F9] border-y border-[#E8C8D0]">

      <div className="container-custom">


        <p className="text-center text-[#6B4A54] font-medium mb-10">
          Trusted by Healthcare &
          Biomedical Organizations
        </p>




        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">


          {brands.map((brand, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center font-semibold text-[#7B1E3A] border border-[#E8C8D0] shadow-[0_10px_30px_rgba(123,30,58,0.08)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(123,30,58,0.15)] transition-all duration-300"
            >

              {brand}

            </div>

          ))}


        </div>


      </div>


    </section>
  );
}