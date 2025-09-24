import React, { useState } from "react";

type Card = { title: string; img: string; desc: string };

const baseCards: Card[] = [
  {
    title: "Cashmere",
    img: "/colorcard/cashmere.png",
    desc: "Luxuriously soft, lightweight, and incredibly warm. Cashmere fabric offers timeless elegance, unmatched comfort, and durability—perfect for refined everyday wear and premium sustainable fashion.",
  },
  {
    title: "Human and Nature collection",
    img: "/colorcard/humanandnature.png",
    desc: "Where comfort meets sustainability — Human and Nature fabric, crafted for people, inspired by the planet.",
  },
  {
    title: "Luxury Material",
    img: "/colorcard/luxury.png",
    desc: "Refined, versatile, and eco-friendly. A fabric that embodies elegance and care for the earth.",
  },
  {
    title: "Semi Worsted",
    img: "/colorcard/semiworsted.png",
    desc: "Smooth, durable, and breathable. A fabric crafted for comfort with a refined finish.",
  },
  {
    title: "Sustainable & Function collection",
    img: "/colorcard/sustainable.png",
    desc: "Eco-friendly, functional, and stylish — the Sustainable & Function Collection is your everyday conscious choice.",
  },
  {
    title: "Traditional Woolen",
    img: "/colorcard/traditionalwoolen.png",
    desc: "Heritage in every thread — Traditional Woolen combines natural warmth with lasting durability.",
  },
];

const eColorCards: Card[] = [
  {
    title: "Bestseller",
    img: "/ecolor/bestseller.png",
    desc: "Digitally curated palette with precise repeatability across batches.",
  },
  {
    title: "Runsun 9",
    img: "/ecolor/runsun9.png",
    desc: "Digitally curated palette with precise repeatability across batches.",
  },
  {
    title: "Runsun A",
    img: "/ecolor/runsunA.png",
    desc: "Digitally curated palette with precise repeatability across batches.",
  },
  {
    title: "Runsun J",
    img: "/ecolor/runsunJ.png",
    desc: "Digitally curated palette with precise repeatability across batches.",
  },
  // --- 15 blanks just for structure ---
  ...Array.from({ length: 15 }).map((_, i) => ({
    title: `E-Color ${i + 5}`, // starts from 5
    img: "/ecolor/placeholder.png", // 👈 you can create one placeholder.png in /public/ecolor/
    desc: "Image coming soon...",
  })),
];

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm md:text-base transition
        ${active ? "bg-[#b35b28] text-white border-[#b35b28]" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
    >
      {children}
    </button>
  );
};

const CardGrid = ({ items }: { items: Card[] }) => (
  <section className="py-16 px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((card, index) => (
        <div
          key={index}
          className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-white/90">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Colorcards = () => {
  // "color" = the 6 base cards, "ecolor" = 19 e-color cards
  const [tab, setTab] = useState<"color" | "ecolor">("color");

  const items = tab === "color" ? baseCards : eColorCards;
  const title = tab === "color" ? "Color Cards" : "E-Color Cards";

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <img
          src="https://images.unsplash.com/photo-1611504496688-7a5df6a3e975?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Explore Our Cards
          </h1>
          <p className="text-lg">
            Discover classic Color Cards and our digital-first E-Color series.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 -mt-8 mb-8">
        <div className="bg-white shadow-md rounded-2xl p-3 flex gap-3 w-fit mx-auto">
          <TabButton active={tab === "color"} onClick={() => setTab("color")}>
            Color Cards ({baseCards.length})
          </TabButton>
          <TabButton active={tab === "ecolor"} onClick={() => setTab("ecolor")}>
            E-Color Cards ({eColorCards.length})
          </TabButton>
        </div>
      </div>

      {/* Title + Grid */}
      <h2 className="text-3xl font-semibold text-center text-[#b35b28] mb-2">
        {title}
      </h2>
      <CardGrid items={items} />
    </div>
  );
};

export default Colorcards;
