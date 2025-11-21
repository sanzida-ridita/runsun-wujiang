import React, { useState } from "react";
import banner from "../assets/colorCardBanner.jpg"; // Reuse ContactPage style banner

type Card = { 
  title: string; 
  img: string; 
  desc: string; 
};

const springSummerFall: Card[] = [
  { 
    title: "Lightweight Cotton", 
    img: "/collections/spring1.png", 
    desc: "Breathable cotton for warm days and easy layering." 
  },
  { 
    title: "Linen Blend", 
    img: "/collections/spring2.png", 
    desc: "Crisp, airy linen for effortless summer outfits." 
  },
  { 
    title: "Pastel Collection", 
    img: "/collections/spring3.png", 
    desc: "Soft hues tailored to Spring/Summer palettes." 
  },
];

const autumnWinterFall: Card[] = [
  { 
    title: "Wool Blend", 
    img: "/collections/winter1.png", 
    desc: "Warmth-forward wool blends for cooler weather." 
  },
  { 
    title: "Cashmere Luxe", 
    img: "/collections/winter2.png", 
    desc: "Soft, insulating cashmere designed for elegance." 
  },
  { 
    title: "Deep Tones", 
    img: "/collections/winter3.png", 
    desc: "Rich, dark shades perfect for A/W statements." 
  },
];

const newFabrics: Card[] = [
  { 
    title: "Premium Knit",
    img: "/collections/new1.png",
    desc: "Soft, flexible knit ideal for modern apparel."
  },
  { 
    title: "Rayon Shine",
    img: "/collections/new2.png",
    desc: "Smooth rayon with a subtle sheen for premium orders."
  },
  { 
    title: "Patterned Jacquard",
    img: "/collections/new3.png",
    desc: "Intricate patterns woven with precision."
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
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border text-sm md:text-base transition ${
      active
        ? "bg-[#b35b28] text-white border-[#b35b28]"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

const CardGrid = ({ items }: { items: Card[] }) => (
  <section className="py-16 px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((card) => (
        <div
          key={card.title}
          className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white"
        >
          <img
            src={card.img}
            alt={`${card.title} fabric collection`}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">{card.title}</h3>
            <p className="text-sm text-white/90">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function Collection() {
  const [tab, setTab] = useState<"spring" | "autumn" | "new">("spring");

  const items =
    tab === "spring"
      ? springSummerFall
      : tab === "autumn"
      ? autumnWinterFall
      : newFabrics;

  const title =
    tab === "spring"
      ? "Spring And Summer ( 春夏 )"
      : tab === "autumn"
      ? "Autumn And Winter ( 秋冬 )"
      : "New Fabrics ( 新布片图 )";

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO Section */}
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <img
          src={banner}
          alt="Collections Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Explore Our Collections
          </h1>
          <p className="text-lg">
            Discover seasonal fabric collections crafted for every occasion.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="bg-white shadow-md rounded-2xl p-3 flex gap-3 w-fit mx-auto">
          <TabButton active={tab === "spring"} onClick={() => setTab("spring")}>
            Spring And Summer ( 春夏 )
          </TabButton>
          <TabButton active={tab === "autumn"} onClick={() => setTab("autumn")}>
            Autumn And Winter ( 秋冬 )
          </TabButton>
          <TabButton active={tab === "new"} onClick={() => setTab("new")}>
            New Fabrics ( 新布片图 )
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
}