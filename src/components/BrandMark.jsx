import siteLogo from "@/assets/site-logo.png";

const logoSizes = {
  navbar: "h-12 sm:h-14",
  footer: "h-16 sm:h-20",
};

export default function BrandMark({ className = "", variant = "navbar" }) {
  const sizeClass = logoSizes[variant] ?? logoSizes.navbar;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={siteLogo}
        alt="RewayaEdu logo"
        className={`${sizeClass} w-auto object-contain`}
      />
    </div>
  );
}
