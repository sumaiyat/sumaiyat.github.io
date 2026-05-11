export const BannerSection = () => {
  return (
    <div className="w-full h-48 md:h-64 relative overflow-hidden">
      <img
        src="/banner.png"
        alt="Landscape Visual"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Optional dark overlay to blend it slightly with the dark theme */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
};
