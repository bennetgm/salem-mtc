type BrandLogoProps = {
  variant?: "shield" | "lockup";
  className?: string;
  alt?: string;
};

export default function BrandLogo({
  variant = "shield",
  className = "",
  alt = "Salem Mar Thoma Church Southampton logo",
}: BrandLogoProps) {
  const lightSrc =
    variant === "lockup"
      ? "/images/brands/salem-logo-light.png"
      : "/images/brands/salem-shield-light.png";
  const darkSrc =
    variant === "lockup"
      ? "/images/brands/salem-logo-dark.png"
      : "/images/brands/salem-shield-dark.png";

  return (
    <>
      <img src={lightSrc} alt={alt} className={`block dark:hidden ${className}`.trim()} />
      <img src={darkSrc} alt={alt} className={`hidden dark:block ${className}`.trim()} />
    </>
  );
}
