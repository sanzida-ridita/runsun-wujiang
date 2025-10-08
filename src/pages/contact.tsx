import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

export default function Contact() {
  const offices = [
    {
      title: "Runsun Textile Factory",
      address:
        "No.319 Yuanxin Road, Taoyuan Town, Wujiang District, Suzhou City, Jiangsu Province, China",
      phone: "+86-512-63858128 / +86-18605732767",
      email: "ceo@okyarn.com",
    },
    {
      title: "Runsun Textile (Puyuan Branch)",
      address: "No.1638, Gongmao Road, Puyuan, Tongxiang, Zhejiang",
      email: "bert@okyarn.com",
    },
    {
      title: "South Korea Office",
      address:
        "2nd Floor, 26-20 Janghan-ro 18gil, Dongdaemun-gu, Seoul, Republic of Korea (02640)",
      email: "come112212@gmail.com",
    },
    {
      title: "Hong Kong Office",
      address:
        "Workshop 19, 11/F Thriving Industrial Centre, 26-38 Sha Tsui Road, Tsuen Wan, New Territories",
      email: "Patrick@okyarn.com",
    },
    {
      title: "Japan Office",
      email: "nakauchi@100pw.com",
    },
    {
      title: "UK Office",
      email: "uksales@okyarn.com",
    },
    {
      title: "Business Department One",
      name: "Kris",
      email: "zenglicheng@okyarn.com",
    },
    {
      title: "Business Department Two",
      name: "Tom",
      email: "Sales02@okyarn.com",
    },
    {
      title: "Business Department Three",
      name: "Pete",
      email: "Sales03@okyarn.com",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 pt-14">
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative h-[44vh] md:h-[56vh] flex items-center justify-center text-white text-center">
        <img
          src="/contactBanner.jpg" // 👈 Put your banner image inside /public or adjust the path
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-95">
            Get in touch with Runsun Textile offices worldwide.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT GRID ---------- */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 transition border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#b35b28] mb-3">
              {office.title}
            </h3>
            {office.address && (
              <p className="flex items-start gap-2 text-gray-700 mb-2">
                <FaMapMarkerAlt className="mt-1 text-[#b35b28]" />{" "}
                <span>{office.address}</span>
              </p>
            )}
            {office.phone && (
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <FaPhoneAlt className="text-[#b35b28]" /> {office.phone}
              </p>
            )}
            {office.email && (
              <p className="flex items-center gap-2 text-gray-700 mb-1">
                <FaEnvelope className="text-[#b35b28]" /> {office.email}
              </p>
            )}
            {office.name && (
              <p className="text-gray-600 mt-1 text-sm">Contact: {office.name}</p>
            )}
          </div>
        ))}
      </section>

      {/* ---------- MAP SECTION ---------- */}
      <section className="max-w-7xl mx-auto mb-16 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#b35b28] mb-6">
          Our Location
        </h2>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Runsun Textile Factory Location"
            src="https://www.google.com/maps?q=No.319+Yuanxin+Road,+Taoyuan+Town,+Wujiang+District,+Suzhou+City,+Jiangsu+Province,+China&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
