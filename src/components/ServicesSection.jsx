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
      {/* Top Banner with Overlay Text */}
      <div className="relative h-[300px] w-full">
        <img
          src="/images/banner.jpg"
          alt="Services"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">Services</h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <a
            key={idx}
            href={service.href}
            className="relative block overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl md:text-2xl font-medium text-center">
                {service.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
