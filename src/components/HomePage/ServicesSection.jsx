'use client'

export default function ServicesSection() {
  const services = [
    {
      title: 'Organisations',
      href: '/services/organisations',
    },
    {
      title: 'Education',
      href: '/services/education',
    },
    {
      title: 'Workshops',
      href: '/services/workshops',
    },
    {
      title: 'Resources',
      href: '/services/resources',
    },
    {
      title: 'Contact Us',
      href: '/contact',
    },
  ]

  return (
    <section className="bg-[#eff0ea]">
      {/* Top Banner with Overlay Gradient */}
      <div className="relative h-[300px] w-full">
        <img
          src="/images/banner.jpg"
          alt="Services"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062016]/90 to-[#11604b]/90 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wider uppercase drop-shadow-md">
            Services
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <a
            key={idx}
            href={service.href}
            className="relative block rounded-2xl shadow-md group overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-[#11604b]"
          >
            <div className="flex items-center justify-center h-[300px]">
              <h3 className="text-white group-hover:text-[#eff0ea] text-xl md:text-2xl font-semibold text-center tracking-wide transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
