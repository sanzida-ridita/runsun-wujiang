import { useTranslation } from "react-i18next";
import PremiumImage from "../components/PremiumImage";

export default function Sustainability() {
  const { t } = useTranslation();
  const topics = [
    {
      title: t('sustainability.topics.commitments.title'),
      desc: t('sustainability.topics.commitments.desc'),
    },
    {
      title: t('sustainability.topics.naturalFarm.title'),
      desc: t('sustainability.topics.naturalFarm.desc'),
    },
    {
      title: t('sustainability.topics.carbonNeutrality.title'),
      desc: t('sustainability.topics.carbonNeutrality.desc'),
    },
    {
      title: t('sustainability.topics.certifications.title'),
      desc: t('sustainability.topics.certifications.desc'),
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO (same style as ContactPage) */}
      <section className="relative h-[35vh] md:h-[50vh] flex items-center justify-center text-white text-center">
        <img
          src="/assets/images/colorCardBanner.jpg" // 👈 replace with a sustainability banner if available
          alt="Sustainability Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t('sustainability.hero.title')}</h1>
          <p className="text-lg md:text-xl">
            {t('sustainability.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN: list of topics */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#b35b28] mb-4">
              {t('sustainability.focus')}
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
            <PremiumImage
              src="/assets/images/hero1.jpg"
              alt={t('sustainability.hero.alt')}
              className="w-full h-full object-cover"
              type="banner"
              fallbackTitle="Sustainable Practices"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
