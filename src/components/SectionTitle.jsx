import react from "react";

const SectionTitle = ({ eyebrow, title, description, align = "center" }) => {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div className={`flex flex-col max-w-2xl mb-14 ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow text-sky mb-3 flex items-center gap-2">
          {/* <span className="h-px w-6 bg-brand-line" /> */}
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/55 text-base lg:text-lg lg:leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
