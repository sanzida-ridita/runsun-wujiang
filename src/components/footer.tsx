import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { SiXiaohongshu } from "react-icons/si"; // Red Note (Xiaohongshu)

export default function Footer() {
  return (
    <footer className="bg-[#1b2b3d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- CONTACT SECTION --- */}
        <div className="space-y-4">
          <h4 className="text-[#b35b28] font-semibold text-lg">
            Runsun Textile Factory
          </h4>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-[#b35b28]" />
            <span>
              No.319 Yuanxin Road, Taoyuan Town, Wujiang District, Suzhou City,
              Jiangsu Province, China
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#b35b28]" />
            <span>+86-512-63858128 / +86-18605732767</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#b35b28]" />
            <span>ceo@okyarn.com</span>
          </div>
        </div>

        {/* --- PRODUCTS / SOLUTIONS --- */}
        <div className="space-y-2">
          <h4 className="text-[#b35b28] font-semibold">Products</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Cashmere Yarns</li>
            <li>Wool Blends</li>
            <li>Cotton & Linen</li>
            <li>Eco-friendly Fibers</li>
            <li>Recycled Materials</li>
            <li>Custom Textile Solutions</li>
          </ul>
        </div>

        {/* --- COMPANY --- */}
        <div className="space-y-2">
          <h4 className="text-[#b35b28] font-semibold">Company</h4>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Certifications</li>
            <li>Our Factory</li>
            <li>Contact</li>
            <li>News & Events</li>
          </ul>
        </div>

        {/* --- RESOURCES + SOCIAL MEDIA --- */}
        <div className="space-y-2">
          <h4 className="text-[#b35b28] font-semibold">Resources</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Blog</li>
            <li>Fabric Care Guide</li>
            <li>Technical Specs</li>
            <li>Download Brochure</li>
            <li>Career Opportunities</li>
          </ul>

          {/* --- SOCIAL ICONS --- */}
          <div className="flex gap-4 mt-4 text-2xl">
            <IoLogoWechat
              className="hover:text-[#b35b28] cursor-pointer"
              title="WeChat"
            />
            <SiXiaohongshu
              className="hover:text-[#b35b28] cursor-pointer"
              title="Red Note (Xiaohongshu)"
            />
            <FaLinkedinIn
              className="hover:text-[#b35b28] cursor-pointer"
              title="LinkedIn"
            />
            <FaInstagram
              className="hover:text-[#b35b28] cursor-pointer"
              title="Instagram"
            />
          </div>
        </div>
      </div>

      {/* --- FOOTER BOTTOM --- */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Runsun Textile Co., Ltd. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
