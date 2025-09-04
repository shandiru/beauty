 export default function AboutBanner() {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <img
        src="/images/about-banner.jpg" // <-- your uploaded banner image path
        alt="About Sanera Minds"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-[#062016]/70 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide">
          About Us
        </h1>
      </div>
    </div>
  )
}