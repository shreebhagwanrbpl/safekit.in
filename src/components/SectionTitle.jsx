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
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF5F7] border border-[#E8C8D0] text-[#7B1E3A] text-sm font-semibold mb-5">
          {badge}
        </div>
      )}


      {/* Title */}
      <h2 className="section-title text-[#2D1B21]">
        {title}
      </h2>


      {/* Description */}
      <p className="section-subtitle text-[#6B4A54]">
        {description}
      </p>


    </div>
  );
}