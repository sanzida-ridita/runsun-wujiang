import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PremiumImage from "../components/PremiumImage";

type Card = { title: string; img: string; desc: string };

// --- Color Cards ---
const getBaseCards = (t: any): Card[] => [
  {
    title: t('colorCard.products.cashmere.title'),
    img: "/colorcard/cashmere.png",
    desc: t('colorCard.products.cashmere.desc'),
  },
  {
    title: t('colorCard.products.humanNature.title'),
    img: "/colorcard/humanandnature.png",
    desc: t('colorCard.products.humanNature.desc'),
  },
  {
    title: t('colorCard.products.luxuryMaterial.title'),
    img: "/colorcard/luxury.png",
    desc: t('colorCard.products.luxuryMaterial.desc'),
  },
  {
    title: t('colorCard.products.semiWorsted.title'),
    img: "/colorcard/semiworsted.png",
    desc: t('colorCard.products.semiWorsted.desc'),
  },
  {
    title: t('colorCard.products.sustainableFunction.title'),
    img: "/colorcard/sustainable.png",
    desc: t('colorCard.products.sustainableFunction.desc'),
  },
  {
    title: t('colorCard.products.traditionalWoolen.title'),
    img: "/colorcard/traditionalwoolen.png",
    desc: t('colorCard.products.traditionalWoolen.desc'),
  },
];

// --- E-Color Cards ---
const getEColorCards = (t: any): Card[] => [
  {
    title: t('colorCard.products.bestseller.title'),
    img: "/ecolor/bestseller.png",
    desc: t('colorCard.products.bestseller.desc'),
  },
  {
    title: t('colorCard.products.runsun9.title'),
    img: "/ecolor/runsun9.png",
    desc: t('colorCard.products.runsun9.desc'),
  },
  {
    title: t('colorCard.products.runsunA.title'),
    img: "/ecolor/runsunA.png",
    desc: t('colorCard.products.runsunA.desc'),
  },
  {
    title: t('colorCard.products.runsunJ.title'),
    img: "/ecolor/runsunJ.png",
    desc: t('colorCard.products.runsunJ.desc'),
  },
  ...Array.from({ length: 15 }).map((_, i) => ({
    title: `${t('colorCard.products.eColorPlaceholder.title')} ${i + 5}`,
    img: "/ecolor/placeholder.png", // 👈 placeholder image
    desc: t('colorCard.products.eColorPlaceholder.desc'),
  })),
];

// --- Models Section ---
const getModelCards = (t: any): Card[] => [
  {
    title: t('colorCard.products.model1.title'),
    img: "/models/model1.png",
    desc: t('colorCard.products.model1.desc'),
  },
  {
    title: t('colorCard.products.model2.title'),
    img: "/models/model2.png",
    desc: t('colorCard.products.model2.desc'),
  },
  {
    title: t('colorCard.products.model3.title'),
    img: "/models/model3.png",
    desc: t('colorCard.products.model3.desc'),
  },
  {
    title: t('colorCard.products.model4.title'),
    img: "/models/model4.png",
    desc: t('colorCard.products.model4.desc'),
  },
  {
    title: t('colorCard.products.model5.title'),
    img: "/models/model5.png",
    desc: t('colorCard.products.model5.desc'),
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
          <PremiumImage
            src={card.img}
            alt={card.title}
            className="w-full h-64 object-cover"
            type="card"
            fallbackTitle={card.title}
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
  const { t } = useTranslation();
  // now 3 tabs: color | ecolor | models
  const [tab, setTab] = useState<"color" | "ecolor" | "models">("color");

  const items =
    tab === "color"
      ? getBaseCards(t)
      : tab === "ecolor"
      ? getEColorCards(t)
      : getModelCards(t);

  const title =
    tab === "color"
      ? t('colorCard.tabs.colorCards')
      : tab === "ecolor"
      ? t('colorCard.tabs.eColorCards')
      : t('colorCard.tabs.models');

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <PremiumImage
          src="/assets/images/colorCardBanner.jpg"
          alt={t('colorCard.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover"
          type="banner"
          fallbackTitle="Explore Our Cards"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {t('colorCard.hero.title')}
          </h1>
          <p className="text-lg">
            {t('colorCard.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Tabs overlay (above hero) */}
      <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="bg-white shadow-md rounded-2xl p-3 flex gap-3 flex-wrap justify-center">
          <TabButton active={tab === "color"} onClick={() => setTab("color")}>
            {t('colorCard.tabs.colorCards')} (6)
          </TabButton>
          <TabButton active={tab === "ecolor"} onClick={() => setTab("ecolor")}>
            {t('colorCard.tabs.eColorCards')} (19)
          </TabButton>
          <TabButton active={tab === "models"} onClick={() => setTab("models")}>
            {t('colorCard.tabs.models')} (5)
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
