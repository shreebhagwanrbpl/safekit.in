export default function TrustedBrands() {
  const brands = [
  "SafeShield",
  "HygiCare",
  "SecurLab",
  "MediPack",
  "BioShield"
];

  return (
    <section className="py-16 bg-[#FCFAF7] border-y border-[#E8DDE0]">

      <div className="container-custom">


        <p className="text-center text-[#514348] font-medium mb-10">
          Product categories selected for clinical, laboratory and field use
        </p>




        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">


          {brands.map((brand, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center font-semibold text-[#880514] border border-[#E8DDE0] shadow-[0_10px_30px_rgba(136,5,20,0.08)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(136,5,20,0.15)] transition-all duration-300"
            >

              {brand}

            </div>

          ))}


        </div>


      </div>


    </section>
  );
}