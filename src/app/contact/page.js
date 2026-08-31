"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  onSnapshot,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import { getContactValue, getPhoneNumbers } from "@/lib/contact-utils";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [districtData, setDistrictData] =
    useState(null);
  const [contactInfo, setContactInfo] =
    useState([]);

  const [submitting, setSubmitting] =
    useState(false);
  const pathname = usePathname();

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const currentDistrict =
    pathParts.length > 0
      ? pathParts[0]
      : null;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
      /^[6-9]\d{9}$/;

    if (!form.name.trim()) {
      return toast.error(
        "Name is required"
      );
    }

    if (!emailRegex.test(form.email)) {
      return toast.error(
        "Enter valid email"
      );
    }

    if (!phoneRegex.test(form.phone)) {
      return toast.error(
        "Enter valid mobile number"
      );
    }

    if (!form.message.trim()) {
      return toast.error(
        "Message is required"
      );
    }

    try {
      setSubmitting(true);

      await addDoc(
        collection(
          db,
          "websitesQueries",
          "safekitin",
          "contactQueries"
        ),
        {
          ...form,
          createdAt: new Date(),
        }
      );

      toast.success(
        "Message submitted successfully"
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong"
      );
    } finally {
      setSubmitting(false);
    }
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    const loadDistrict = async () => {
      if (!currentDistrict) return;

      try {
        const snap = await getDoc(
          doc(
            db,
            "websites",
            "safekitin",
            "districts",
            currentDistrict
          )
        );

        if (snap.exists()) {
          setDistrictData(snap.data());
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadDistrict();
  }, [currentDistrict]);
  useEffect(() => {
    const contactRef = doc(
      db,
      "websites",
      "safekitin",
      "pages",
      "contact"
    );

    const unsubscribe = onSnapshot(
      contactRef,
      (snap) => {
        setContactInfo(
          snap.exists() ? snap.data().contactInfo || [] : []
        );
        setLoading(false);
      },
      (err) => {
        console.error("Error loading contact details:", err);
        setContactInfo([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);



  const phoneNumbers = getPhoneNumbers(contactInfo);
  const email = getContactValue(contactInfo, "email");
  const address = getContactValue(contactInfo, "address");
  const hours = getContactValue(contactInfo, "hours");

  // A district may provide its own address. Otherwise use the main
  // contact address from Firestore. No contact value is hardcoded.
  const districtAddress = districtData?.address || districtData?.officeAddress || "";
  const dynamicAddress = districtAddress || address;
  const mapAddress = dynamicAddress ? encodeURIComponent(dynamicAddress) : "";
  if (loading) {
    return (
      <div className="site9-static">
        <section className="section-padding">
          <div className="container-custom">

            <div className="grid lg:grid-cols-2 gap-12">

              <div>
                <div className="h-12 w-64 bg-slate-200 rounded animate-pulse mb-8" />

                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-28 bg-slate-200 rounded-3xl animate-pulse mb-6"
                  />
                ))}
              </div>

              <div className="bg-white p-10 rounded-3xl">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-14 bg-slate-200 rounded-2xl animate-pulse mb-5"
                  />
                ))}
              </div>

            </div>

          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="site9-static">
      {/* Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="Reach our clinical safety team for premium diagnostic and biomedical solutions."
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14">

          {/* Left Info */}
          <div>


            {/* Badge */}
            <span className="inline-block bg-[#FFF6D6] border border-[#E8DDE0] text-[#880514] px-5 py-2 rounded-full font-semibold mb-5">
              Contact Information
            </span>




            <h2 className="section-title text-[#241015]">
              Let’s Start a Conversation
            </h2>




            <p className="section-subtitle text-[#514348]">
              Reach out to us for
              healthcare consultation,
              biomedical products, and
              advanced diagnostic support.
            </p>





            {/* Contact Cards */}
            <div className="space-y-6 mt-10">



              {/* Phone */}
              <div className="flex items-start gap-5 bg-[#FCFAF7] p-6 rounded-[28px] border border-[#E8DDE0] hover:shadow-[0_15px_40px_rgba(136,5,20,0.10)] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#880514]">
                  <Phone size={24} />
                </div>


                <div>
                  <h4 className="font-semibold text-lg text-[#241015]">
                    Mobile Contact
                  </h4>

                  <div className="space-y-1 mt-2">
                    {phoneNumbers.map((num, i) => (
                      <p key={i} className="text-[#514348]">
                        <a href={`tel:${num}`} className="hover:text-[#880514] transition">
                          {num}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

              </div>





              {/* Email */}
              <div className="flex items-start gap-5 bg-[#FCFAF7] p-6 rounded-[28px] border border-[#E8DDE0] hover:shadow-[0_15px_40px_rgba(136,5,20,0.10)] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#880514]">
                  <Mail size={24} />
                </div>


                <div>
                  <h4 className="font-semibold text-lg text-[#241015]">
                    Work Email Address
                  </h4>

                  <p className="text-[#514348] mt-2">
                    {email}
                  </p>
                </div>

              </div>





              {/* Address */}
              <div className="flex items-start gap-5 bg-[#FCFAF7] p-6 rounded-[28px] border border-[#E8DDE0] hover:shadow-[0_15px_40px_rgba(136,5,20,0.10)] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#880514]">
                  <MapPin size={24} />
                </div>


                <div>
                  <h4 className="font-semibold text-lg text-[#241015]">
                    Office Address
                  </h4>

                  <p className="text-[#514348] mt-2">
                    {dynamicAddress}
                  </p>
                </div>

              </div>





              {/* Working Hours */}
              <div className="flex items-start gap-5 bg-[#FCFAF7] p-6 rounded-[28px] border border-[#E8DDE0] hover:shadow-[0_15px_40px_rgba(136,5,20,0.10)] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#880514]">
                  <Clock3 size={24} />
                </div>


                <div>
                  <h4 className="font-semibold text-lg text-[#241015]">
                    Working Hours
                  </h4>

                  <p className="text-[#514348] mt-2">
                    {hours}
                  </p>
                </div>

              </div>



            </div>


          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[40px] p-8 lg:p-10 border border-[#E8DDE0] shadow-[0_20px_60px_rgba(136,5,20,0.10)]">


            <h3 className="text-3xl font-bold text-[#241015]">
              Request Safety Supply Support
            </h3>



            <p className="text-[#514348] mt-3">
              Fill out the form and our
              team will contact you soon.
            </p>



            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >



              <input
                type="text"
                name="name"
                placeholder="Responsible Person"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[#E8DDE0] rounded-2xl px-5 py-4 outline-none text-[#241015] placeholder:text-[#6C7F90] focus:border-[#880514] focus:ring-2 focus:ring-[#880514]/10 transition"
              />



              <input
                type="email"
                name="email"
                placeholder="Work Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[#E8DDE0] rounded-2xl px-5 py-4 outline-none text-[#241015] placeholder:text-[#6C7F90] focus:border-[#880514] focus:ring-2 focus:ring-[#880514]/10 transition"
              />



              <input
                type="tel"
                name="phone"
                placeholder="Mobile Contact"
                maxLength={10}
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="w-full border border-[#E8DDE0] rounded-2xl px-5 py-4 outline-none text-[#241015] placeholder:text-[#6C7F90] focus:border-[#880514] focus:ring-2 focus:ring-[#880514]/10 transition"
              />



              <input
                type="text"
                name="subject"
                placeholder="Safety Requirement"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-[#E8DDE0] rounded-2xl px-5 py-4 outline-none text-[#241015] placeholder:text-[#6C7F90] focus:border-[#880514] focus:ring-2 focus:ring-[#880514]/10 transition"
              />



              <textarea
                rows={5}
                name="message"
                placeholder="Describe your safety supply need"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-[#E8DDE0] rounded-2xl px-5 py-4 outline-none text-[#241015] placeholder:text-[#6C7F90] focus:border-[#880514] focus:ring-2 focus:ring-[#880514]/10 transition resize-none"
              />



              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#880514] text-white py-4 rounded-2xl font-semibold hover:bg-[#6F0411] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
              >

                {submitting
                  ? "Submitting..."
                  : "Send Message"}

              </button>



            </form>


          </div>
        </div>
      </section>

      {/* Google Map */}
      {mapAddress && (
        <section className="pb-24 bg-white">
          <div className="container-custom">
            <div className="rounded-[40px] overflow-hidden border border-slate-100 card-shadow">
              <iframe
                src={`https://maps.google.com/maps?q=${mapAddress}&z=13&output=embed`}
                width="100%"
                height="500"
                loading="lazy"
                className="border-0 w-full"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  );
}