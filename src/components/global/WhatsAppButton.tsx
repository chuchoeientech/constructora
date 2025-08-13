import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '595981613500';
  const chatUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <span className="sr-only">Chatear por WhatsApp</span>
      <div className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-xl p-4 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400">
        <FaWhatsapp className="w-7 h-7" aria-hidden="true" />
      </div>
    </a>
  );
};

export default WhatsAppButton; 