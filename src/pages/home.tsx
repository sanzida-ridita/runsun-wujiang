// import FeatureCard from "../components/featureCard";
import HeroSection from "../components/herosection";
import Products1 from "../assets/Products (1).jpg";
import Products2 from "../assets/Products (2).jpg";
import Products3 from "../assets/Products (3).jpg";
import yarnVideo from "../assets/video/yarnFactory.mp4"; // 👈 adjust extension (.mp4 / .webm / .mov)

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero with carousel */}
      <section className="w-full h-screen overflow-hidden">
        <HeroSection />
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Exibition</h2>
          <p className="text-gray-600 mt-2">
            Discover our prvious exebition photos.
          </p>
        </div>

        {/* Product Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={Products1}
              alt="Quality"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Top Quality</h3>
              <p className="text-sm mt-2">
                International standards for premium products.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={Products2}
              alt="Range"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Wide Range</h3>
              <p className="text-sm mt-2">
                From yarn to finished fabrics, we have it all.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={Products3}
              alt="Sustainability"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-sm mt-2">
                Eco-friendly production for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Yarn Products Section */}

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 flex justify-center items-center">
        {/* Bottom Card (orange background) */}
        <div className="absolute w-10/12 h-5/6 inset-0 mx-auto my-auto bg-orange-400 rounded-3xl transform rotate-1 md:rotate-1 shadow-xl"></div>

        {/* Top Card (video fills white box area) */}
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-0 overflow-hidden transform -rotate-1 md:-rotate-1">
          <video
            src={yarnVideo}
            className="w-full h-80 object-fill"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-3 text-3xl">📍</div>
              <h4 className="font-bold mb-2">OUR MAIN OFFICE</h4>
              <p className="text-sm text-gray-700">
                No.319 Yuanxin Road,Taoyuan Town,Wujiang District,Suzhou City,Jiangsu Province
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-3 text-3xl">📞</div>
              <h4 className="font-bold mb-2">PHONE NUMBER</h4>
              <p className="text-sm text-gray-700">+8651263858128</p>
              <p className="text-sm text-gray-700">+8618605732767</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-3 text-3xl">📠</div>
              <h4 className="font-bold mb-2">
Runsun Textile (Puyuan Branch)
</h4>
              <p className="text-sm text-gray-700">No.1638, Gongmao Road, Puyuan, Tongxiang, Zhejiang
</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-3 text-3xl">✉️</div>
              <h4 className="font-bold mb-2">EMAIL</h4>
              <a
                href="mailto:ceo@okyarn.com
"
                className="text-sm text-gray-700 hover:underline"
              >
                ceo@okyarn.com

              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white rounded-2xl p-10 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white font-semibold py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
}
