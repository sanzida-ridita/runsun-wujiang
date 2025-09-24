
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#1b2b3d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaComments />
            <span className="font-semibold">Chat With Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>1 (888) 602-6756</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="font-semibold">sales@pressable.com</span>
          </div>
        </div>

        {/* Solutions */}
        <div className="space-y-2">
          <h4 className="text-teal-400 font-semibold">Solutions</h4>
          <ul className="space-y-1">
            <li>Managed WordPress Hosting</li>
            <li>Agencies</li>
            <li>Small & Medium-Sized Businesses</li>
            <li>Freelancers</li>
            <li>High-Traffic Websites</li>
            <li>WooCommerce</li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <h4 className="text-teal-400 font-semibold">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Stories</li>
            <li>Contact</li>
            <li>Legal</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-2">
          <h4 className="text-teal-400 font-semibold">Resources</h4>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>eBooks</li>
            <li>Knowledge Base</li>
            <li>Customer Reviews</li>
            <li>Affiliate Program</li>
            <li>Strategic Partners</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <IoLogoWechat className="hover:text-teal-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-teal-400 cursor-pointer" />
            <FaTwitter className="hover:text-teal-400 cursor-pointer" />
            <FaInstagram className="hover:text-teal-400 cursor-pointer" />
            <FaYoutube className="hover:text-teal-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>
          <span className="mr-2">Powered by WordPress</span> | <span className="underline ml-2 cursor-pointer">Host With Pressable</span>
        </p>
      </div>
    </footer>
  );
}
