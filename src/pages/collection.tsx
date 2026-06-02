import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
    className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm md:text-base transition ${
      active
        ? "bg-[#b35b28] text-white border-[#b35b28]"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

const CardGrid = ({ items, t }: { items: Card[]; t: any }) => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {items.map((card) => (
        <div
          key={card.title}
          className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white"
        >
          <img
            src={card.img}
            alt={`${card.title} ${t('collection.hero.alt')}`}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-3 sm:p-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-300 mb-2">{card.title}</h3>
            <p className="text-xs sm:text-sm text-white/90 line-clamp-3">{card.desc}</p>
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
      <section className="relative h-[35vh] sm:h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <img
          src="/assets/images/colorCardBanner.jpg"
          alt={t('collection.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {t('collection.hero.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            {t('collection.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-6 sm:mb-8">
        <div className="bg-white shadow-md rounded-xl sm:rounded-2xl p-2 sm:p-3 flex gap-2 sm:gap-3 flex-wrap justify-center w-fit mx-auto">
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
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#b35b28] mb-4 sm:mb-6">
        {title}
      </h2>
      <CardGrid items={items} t={t} />
    </div>
  );
}