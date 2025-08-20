'use client'

export default function ServicesSection() {
  const services = [
    {
      title: 'Organisations',
      image: '/images/org.jpg',
      href: '/services/organisations',
    },
    {
      title: 'Education',
      image: '/images/edu.jpg',
      href: '/services/education',
    },
    {
      title: 'Workshops',
      image: '/images/workshops.jpg',
      href: '/services/workshops',
    },
    {
      title: 'Resources',
      image: '/images/resources.jpg',
      href: '/services/resources',
    },
    {
      title: 'Contact Us',
      image: '/images/contact.jpg',
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
          <h2 className="text-[#062016]/90 text-4xl md:text-5xl font-semibold tracking-wider uppercase drop-shadow-md">
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
            className="relative block rounded-2xl shadow-md group overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#062016]/30 group-hover:bg-[#11604b]/70 transition-all duration-500 flex items-center justify-center">
              <h3 className="text-[#062016]/80 group-hover:text-[#eff0ea] text-xl md:text-2xl font-medium text-center tracking-wide drop-shadow-sm transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
