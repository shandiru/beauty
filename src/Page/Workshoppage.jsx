'use client'
import React from 'react'

/* === Banner === */
function WorkshopBanner() {
  return (
    <div className="relative h-[280px] md:h-[380px] w-full">
      <img
        src="/images/workshops-banner.jpg" /* change if needed */
        alt="Workshops"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,32,22,0.82)] via-[rgba(6,32,22,0.78)] to-[rgba(17,96,75,0.72)]" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl tracking-wide">
          Workshops
        </h1>
      </div>
    </div>
  )
}

/* === Intro === */
function WorkshopIntro() {
  return (
    <section className="bg-[#eff0ea] py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Mental wellbeing workshops aren’t just for corporate settings! We also create meaningful,
          down-to-earth sessions for small businesses, hen dos, and friend groups who want to learn
          something new or connect on a deeper level.
        </p>
        <p className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mt-5">
          Whether you’re planning a team away day, organising a unique hen weekend, or just want to
          bring your circle together for something different, we offer workshops that are grounded,
          practical, and genuinely uplifting.
        </p>
      </div>
    </section>
  )
}

/* === Classic Image + Copy (optional, for elegant break) === */
function WorkshopImageBlock() {
  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-5">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Therapist-led, human-first
          </h2>
          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            All sessions are led by qualified therapists and designed to feel warm, welcoming,
            and genuinely useful — no awkward icebreakers, no lectures. Just practical tools,
            rich conversation, and space to breathe.
          </p>
        </div>
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/workshops-classic.jpg" /* change if needed */
            alt="Sanera Minds Workshops"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.20)] mix-blend-multiply" />
        </div>
      </div>
    </section>
  )
}

/* === What to Expect === */
function WorkshopExpect() {
  const items = [
    "Therapist-led sessions that are interactive and warm. This means no awkward icebreakers or lectures.",
    "Breathing exercises and grounding techniques to calm the nervous system and help you feel more present.",
    "Connection exercises that spark meaningful conversations, laughter, and a real sense of togetherness.",
    "Real-life topics like stress, self-worth, confidence, boundaries, emotional regulation, or whatever feels most relevant to your group.",
    "Customisable content so you can pick 'n' mix the topics that suit your vibe. Don’t fancy a topic? We’ll leave it out. Want more of one thing? We’ll build it in.",
    "A practical toolkit based in CBT so you leave with takeaways you can actually use in everyday life.",
    "Flexible formats from one-hour Zooms to in-person sessions, in your space or ours.",
  ]

  return (
    <section className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-[#11604b] mb-6">
          What to expect
        </h2>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="group">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#11604b]" />
                <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
              <div className="ml-[18px] mt-3 h-px bg-[#11604b]/15 group-last:hidden" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* === Closing === */
function WorkshopClosing() {
  return (
    <section className="bg-white py-18 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mb-6">
          Whether it’s for personal growth, bonding with friends, or creating space to breathe in
          the middle of a busy life — our sessions are tailored to you. Because mental wellbeing
          isn’t one-size-fits-all, and neither are we.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition"
        >
          Enquire about a workshop
        </a>
      </div>
    </section>
  )
}

/* === PAGE EXPORT === */
export default function WorkshopsPage() {
  return (
    <main>
      <WorkshopBanner />
      <WorkshopIntro />
      <WorkshopImageBlock />
      <WorkshopExpect />
      <WorkshopClosing />
    </main>
  )
}
