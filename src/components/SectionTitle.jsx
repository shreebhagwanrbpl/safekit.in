export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className={`${center ? "text-center mx-auto" : ""
        } max-w-3xl`}
    >

      {/* Badge */}
      {badge && (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF6D6] border border-[#E8DDE0] text-[#880514] text-sm font-semibold mb-5">
          {badge}
        </div>
      )}


      {/* Title */}
      <h2 className="section-title text-[#241015]">
        {title}
      </h2>


      {/* Description */}
      <p className="section-subtitle text-[#514348]">
        {description}
      </p>


    </div>
  );
}