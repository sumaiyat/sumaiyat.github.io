export const BannerSection = () => {
  return (
    <div className="w-full relative">
      <img
        src="/banner.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="w-full h-auto"
      />
      {/* Optional dark overlay to blend it slightly with the dark theme */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
};
