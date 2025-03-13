import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialBanner = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTiktok />, url: 'https://tiktok.com', label: 'TikTok' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 overflow-hidden py-2 text-center">
      <div className="inline-flex whitespace-nowrap items-center justify-center">
        <p className="text-white font-medium mr-4">
          SÍGUENOS EN
        </p>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white mx-5 hover:text-gray-200 transition duration-300"
          >
            <span className="text-xl mr-2">{social.icon}</span>
            <span className="font-medium">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialBanner;
