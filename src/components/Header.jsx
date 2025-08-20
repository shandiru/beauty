'use client'
import { useState } from 'react'

export default function Header() {
  const [openServices, setOpenServices] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [openMobileServices, setOpenMobileServices] = useState(false)

  return (
    <header className="bg-[#eff0ea] border-b border-[#11604b]/20 relative z-[1000]">
      {/* MOBILE+TABLET BAR — visible < lg */}
      <div className="lg:hidden grid grid-cols-[1fr_auto_1fr] items-center px-5 py-3">
        <span aria-hidden className="block" />
        <a href="/" className="justify-self-center">
          <img
            src="/logo png.png"
            alt="Sanera Minds"
            className="h-8 sm:h-14 w-auto"
          />
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={openMobile}
          onClick={() => setOpenMobile(s => !s)}
          className="justify-self-end inline-flex flex-col items-center justify-center w-11 h-11 gap-1.5"
        >
          <span className="w-8 h-[2px] bg-[#062016]" />
          <span className="w-8 h-[2px] bg-[#062016]" />
          <span className="w-8 h-[2px] bg-[#062016]" />
        </button>
      </div>

      {/* DESKTOP BAR — visible >= lg */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6 min-h-24 px-6 lg:px-1 max-w-7xl mx-auto">
        {/* LEFT NAV */}
        <nav aria-label="Primary (left)" className="hidden lg:flex items-center gap-8">
          <a href="/" className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition">Home</a>

          <div
            className="relative group"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openServices}
              onClick={() => setOpenServices(s => !s)}
              className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition"
            >
              Services <span className="ml-1 text-[12px] opacity-80">▾</span>
            </button>

            <ul
              role="menu"
              className={[
                "absolute left-0 mt-3 min-w-64 rounded-xl border border-[#11604b]/25 bg-white shadow-xl p-2 z-50",
                openServices ? "block" : "hidden",
                "group-hover:block focus-within:block"
              ].join(' ')}
            >
              {[
                { label: 'Organisations', href: '/services/organisations' },
                { label: 'Education', href: '/services/education' },
                { label: 'Workshops', href: '/services/workshops' },
                { label: 'Resources', href: '/services/resources' },
                { label: 'Contact us', href: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <a role="menuitem" href={item.href} className="block px-3 py-2 rounded-lg text-[15px] tracking-[0.02em] text-[#062016] hover:bg-[#eff0ea]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="/about" className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition">About me</a>
          <a href="/price-list" className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition">Price list</a>
        </nav>

        {/* CENTER LOGO (further reduced on desktop) */}
        <a href="/" aria-label="Sanera Minds" className="flex items-center justify-center shrink-0">
          <img
            src="/logo png.png"
            alt="Sanera Minds"
            className="h-8 lg:h-5 xl:h-6 w-full"
          />
        </a>

        {/* RIGHT NAV */}
        <nav aria-label="Primary (right)" className="hidden lg:flex items-center gap-8 justify-end">
          <a href="/contact" className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition">Contact us</a>
          <a href="/faqs" className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition">FAQs</a>
          <a href="/blog" className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition">Blog</a>
          <a href="/appointments" className="px-4 py-3 rounded-lg uppercase tracking-[0.15em] text-[14px] font-bold bg-[#11604b] text-white hover:opacity-90 transition">Book Now</a>
        </nav>
      </div>

      {/* MOBILE/TABLET PANEL — visible < lg */}
      <div className={`lg:hidden overflow-hidden bg-[#eff0ea] border-t border-[#11604b]/20 transition-[max-height] duration-200 ${openMobile ? 'max-h-[75vh]' : 'max-h-0'}`}>
        <nav className="flex flex-col py-2">
          <a href="/" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">Home</a>

          <button
            type="button"
            aria-expanded={openMobileServices}
            onClick={() => setOpenMobileServices(s => !s)}
            className="px-6 py-3 text-left uppercase tracking-[0.18em] text-[13px] text-[#062016] flex items-center justify-between"
          >
            <span>Services</span>
            <span className="text-[12px]">{openMobileServices ? '▴' : '▾'}</span>
          </button>
          <div className={`${openMobileServices ? 'block' : 'hidden'} px-3 pb-2`}>
            {[
              { label: 'Organisations', href: '/services/organisations' },
              { label: 'Education', href: '/services/education' },
              { label: 'Workshops', href: '/services/workshops' },
              { label: 'Resources', href: '/services/resources' },
              { label: 'Contact us', href: '/contact' },
            ].map(item => (
              <a key={item.label} href={item.href} className="block mx-3 mb-2 px-4 py-2 rounded-lg border border-[#11604b]/25 bg-white text-[#062016] tracking-[0.02em]">
                {item.label}
              </a>
            ))}
          </div>

          <a href="/about" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">About me</a>
          <a href="/price-list" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">Price list</a>
          <a href="/contact" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">Contact us</a>
          <a href="/faqs" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">FAQs</a>
          <a href="/blog" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">Blog</a>
          <a href="/appointments" className="mx-6 my-3 text-center px-4 py-3 rounded-lg uppercase tracking-[0.15em] text-[14px] font-bold bg-[#11604b] text-white hover:opacity-90 transition">
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
