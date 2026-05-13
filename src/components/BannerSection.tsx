export const BannerSection = () => {
  return (
    <div className="w-full relative">
      <img
        src="/banner.png"
        alt="Landscape Visual"
        className="w-full h-auto"
      />
      {/* Optional dark overlay to blend it slightly with the dark theme */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
};
