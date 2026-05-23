import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import sunmunLogo from "../assets/sunmun-logo.jpeg";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language === 'zh' ? '中文' : 'EN');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex items-center justify-between transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      {/* Left side - Navigation */}
      <div className="flex space-x-6 font-medium">

        <Link
          to={`/`}
          className={`${scrolled ? 'text-gray-800' : 'text-white'} relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition`}
        >
          {t('navbar.home')}
        </Link>
        <Link
          to={`/Collections`}
          className={`${scrolled ? 'text-gray-800' : 'text-white'} relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition`}
        >
          {t('navbar.collections')}
        </Link>
        <Link
          to={`/Sustainability`}
          className={`${scrolled ? 'text-gray-800' : 'text-white'} relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition`}
        >
          {t('navbar.sustainability')}
        </Link>
        <Link
          to={`/color-cards`}
          className={`${scrolled ? 'text-gray-800' : 'text-white'} relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition`}
        >
          {t('navbar.colorCards')}
        </Link>
      </div>

      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 border">
        <img
          src={sunmunLogo}
          alt={t('navbar.logoAlt')}
          className="w-full h-12 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Search bar with Lucide icon */}
        <div className="relative">
          <Search className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 ${scrolled ? 'text-gray-600' : 'text-gray-800'}`} />
          <input
            type="text"
            placeholder={t('navbar.search')}
            className={`pl-8 pr-3 py-1 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-orange-400 ${
              scrolled
                ? 'border-gray-300 text-gray-800 bg-white'
                : 'border-white text-white bg-white/10 placeholder-white/70'
            }`}
          />
        </div>

        {/* Contact button - outline style */}
        <Link
          to="/contact"
          className={`px-4 py-1 rounded-lg border font-medium hover:bg-orange-400 hover:text-white transition ${
            scrolled
              ? 'border-orange-400 text-orange-400'
              : 'border-orange-400 text-white'
          }`}
        >
          {t('navbar.contact')}
        </Link>

        {/* Language toggle */}
        <div className="flex items-center gap-2">
          <Languages className={`${scrolled ? 'text-gray-800' : 'text-white'} w-4 h-4`} />
          <div className={`flex border rounded-md overflow-hidden text-sm ${
            scrolled ? 'border-gray-300' : 'border-white'
          }`}>
            <button
              onClick={() => {
                i18n.changeLanguage('en');
                setActiveLang('EN');
              }}
              className={`px-3 py-1 transition ${
                activeLang === "EN"
                  ? "bg-orange-400 text-white"
                  : scrolled
                  ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
                  : "text-gray-800 bg-white hover:bg-gray-100"
              }`}
            >
              {t('language.english')}
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage('zh');
                setActiveLang('中文');
              }}
              className={`px-3 py-1 transition ${
                activeLang === "中文"
                  ? "bg-orange-400 text-white"
                  : scrolled
                  ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
                  : "text-gray-800 bg-white hover:bg-gray-100"
              }`}
            >
              {t('language.chinese')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
