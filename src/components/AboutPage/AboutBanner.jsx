export default function AboutBanner() {
  return (
    <div className="relative h-[300px] md:h-[420px] w-full">
      {/* Background image */}
      <img
        src="/images/about-banner.jpg"
        alt="About Sanera Minds"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,32,22,0.82)] via-[rgba(6,32,22,0.78)] to-[rgba(17,96,75,0.72)]" />

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl">
          About Sanera Minds
        </h1>
      </div>
    </div>
  )
}
