import React from "react";
import banner from "../assets/colorCardBanner.jpg"; // 👈 you can swap for a dedicated sustainability banner

export default function Sustainability() {
  const topics = [
    {
      title: "Our Commitments",
      desc: "Long-term dedication to responsible sourcing, eco-friendly practices, and innovation toward a greener future.",
    },
    {
      title: "Runsun Natural Farm",
      desc: "Partnering with local farms to ensure transparency, animal welfare, and naturally grown fibers.",
    },
    {
      title: "Carbon² – Carbon Neutrality",
      desc: "Progressive initiatives to reduce carbon emissions across production, supply chain, and operations.",
    },
    {
      title: "Certifications & Accolades",
      desc: "Industry-recognized certifications and awards validating our journey toward sustainable manufacturing.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO (same style as ContactPage) */}
      <section className="relative h-[35vh] md:h-[50vh] flex items-center justify-center text-white text-center">
        <img
          src={banner} // 👈 replace with a sustainability banner if available
          alt="Sustainability Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Sustainability</h1>
          <p className="text-lg md:text-xl">
            Responsible practices shaping a better tomorrow.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN: list of topics */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#b35b28] mb-4">
              Sustainability Focus
            </h2>
            <ul className="space-y-4">
              {topics.map((topic, idx) => (
                <li key={idx} className="border-b pb-4">
                  <h3 className="text-lg font-bold">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{topic.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: illustrative image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/sustainability/goats.jpg" // 👈 place in /public/sustainability
              alt="Eco Practices"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
