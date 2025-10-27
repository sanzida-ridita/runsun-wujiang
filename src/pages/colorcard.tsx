import React, { useState } from "react";
import banner from "../assets/colorCardBanner.jpg"; // 👈 adjust if it's colorcardbanner.png/jpg

type Card = { title: string; img: string; desc: string };

// --- Color Cards ---
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

// --- E-Color Cards ---
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
  ...Array.from({ length: 15 }).map((_, i) => ({
    title: `E-Color ${i + 5}`,
    img: "/ecolor/placeholder.png", // 👈 placeholder image
    desc: "Image coming soon...",
  })),
];

// --- Models Section ---
const modelCards: Card[] = [
  {
    title: "Model 01",
    img: "/models/model1.png",
    desc: "Showcasing our latest fashion material in action.",
  },
  {
    title: "Model 02",
    img: "/models/model2.png",
    desc: "A blend of style and sustainability.",
  },
  {
    title: "Model 03",
    img: "/models/model3.png",
    desc: "Premium fabrics captured in modern fashion form.",
  },
  {
    title: "Model 04",
    img: "/models/model4.png",
    desc: "Comfort meets elegance in motion.",
  },
  {
    title: "Model 05",
    img: "/models/model5.png",
    desc: "Aesthetic simplicity and timeless design.",
  },
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
        ${
          active
            ? "bg-[#b35b28] text-white border-[#b35b28]"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
        }`}
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

const ColorCard = () => {
  // now 3 tabs: color | ecolor | models
  const [tab, setTab] = useState<"color" | "ecolor" | "models">("color");

  const items =
    tab === "color"
      ? baseCards
      : tab === "ecolor"
      ? eColorCards
      : modelCards;

  const title =
    tab === "color"
      ? "Color Cards"
      : tab === "ecolor"
      ? "E-Color Cards"
      : "Models";

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <img
          src={banner}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Explore Our Cards
          </h1>
          <p className="text-lg">
            Discover Color Cards, E-Color Cards, and our Model Showcase.
          </p>
        </div>
      </section>

      {/* Tabs overlay (above hero) */}
      <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="bg-white shadow-md rounded-2xl p-3 flex gap-3 flex-wrap justify-center">
          <TabButton active={tab === "color"} onClick={() => setTab("color")}>
            Color Cards ({baseCards.length})
          </TabButton>
          <TabButton active={tab === "ecolor"} onClick={() => setTab("ecolor")}>
            E-Color Cards ({eColorCards.length})
          </TabButton>
          <TabButton active={tab === "models"} onClick={() => setTab("models")}>
            Models ({modelCards.length})
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

export default ColorCard;
