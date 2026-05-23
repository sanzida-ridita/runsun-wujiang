import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PremiumImage from "../components/PremiumImage";

type Card = {
  title: string;
  img: string;
  desc: string;
};

const getSpringSummerFall = (t: any): Card[] => [
  {
    title: t('collection.products.lightweightCotton.title'),
    img: "/collections/spring1.png",
    desc: t('collection.products.lightweightCotton.desc')
  },
  {
    title: t('collection.products.linenBlend.title'),
    img: "/collections/spring2.png",
    desc: t('collection.products.linenBlend.desc')
  },
  {
    title: t('collection.products.pastelCollection.title'),
    img: "/collections/spring3.png",
    desc: t('collection.products.pastelCollection.desc')
  },
];

const getAutumnWinterFall = (t: any): Card[] => [
  {
    title: t('collection.products.woolBlend.title'),
    img: "/collections/winter1.png",
    desc: t('collection.products.woolBlend.desc')
  },
  {
    title: t('collection.products.cashmereLuxe.title'),
    img: "/collections/winter2.png",
    desc: t('collection.products.cashmereLuxe.desc')
  },
  {
    title: t('collection.products.deepTones.title'),
    img: "/collections/winter3.png",
    desc: t('collection.products.deepTones.desc')
  },
];

const getNewFabrics = (t: any): Card[] => [
  {
    title: t('collection.products.premiumKnit.title'),
    img: "/collections/new1.png",
    desc: t('collection.products.premiumKnit.desc')
  },
  {
    title: t('collection.products.rayonShine.title'),
    img: "/collections/new2.png",
    desc: t('collection.products.rayonShine.desc')
  },
  {
    title: t('collection.products.patternedJacquard.title'),
    img: "/collections/new3.png",
    desc: t('collection.products.patternedJacquard.desc')
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

const CardGrid = ({ items, t }: { items: Card[]; t: any }) => (
  <section className="py-16 px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((card) => (
        <div
          key={card.title}
          className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white"
        >
          <PremiumImage
            src={card.img}
            alt={`${card.title} ${t('collection.hero.alt')}`}
            className="w-full h-64 object-cover"
            type="card"
            fallbackTitle={card.title}
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
  const { t } = useTranslation();
  const [tab, setTab] = useState<"spring" | "autumn" | "new">("spring");

  const items =
    tab === "spring"
      ? getSpringSummerFall(t)
      : tab === "autumn"
      ? getAutumnWinterFall(t)
      : getNewFabrics(t);

  const title =
    tab === "spring"
      ? t('collection.tabs.springSummer')
      : tab === "autumn"
      ? t('collection.tabs.autumnWinter')
      : t('collection.tabs.newFabrics');

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO Section */}
      <section className="relative h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <PremiumImage
          src="/assets/images/colorCardBanner.jpg"
          alt={t('collection.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover"
          type="banner"
          fallbackTitle="Our Collections"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {t('collection.hero.title')}
          </h1>
          <p className="text-lg">
            {t('collection.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="bg-white shadow-md rounded-2xl p-3 flex gap-3 w-fit mx-auto">
          <TabButton active={tab === "spring"} onClick={() => setTab("spring")}>
            {t('collection.tabs.springSummer')}
          </TabButton>
          <TabButton active={tab === "autumn"} onClick={() => setTab("autumn")}>
            {t('collection.tabs.autumnWinter')}
          </TabButton>
          <TabButton active={tab === "new"} onClick={() => setTab("new")}>
            {t('collection.tabs.newFabrics')}
          </TabButton>
        </div>
      </div>

      {/* Title + Grid */}
      <h2 className="text-3xl font-semibold text-center text-[#b35b28] mb-2">
        {title}
      </h2>
      <CardGrid items={items} t={t} />
    </div>
  );
}