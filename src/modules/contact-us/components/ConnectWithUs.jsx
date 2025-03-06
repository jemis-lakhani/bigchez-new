import React from "react";

const ConnectWithUs = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'url("./footer/bg.jpeg' }}
      ></div>
      <div className="main-container relative z-20">
        <div className="grid grid-cols-3 gap-24 pt-20 pb-50">
          <div className="bg-primary flex items-center justify-center gap-5 rounded-full px-6 py-4">
            <img src="./contact-us/whatsapp.svg" />
            <span className="text-2xl font-semibold text-white">
              Connect on WhatsApp
            </span>
          </div>
          <div className="relative flex items-center justify-center gap-5 rounded-full bg-white/10 px-6 py-4 backdrop-blur-[32px]">
            <img src="./contact-us/phone.svg" />
            <span className="text-2xl font-semibold text-white">
              Call us directly
            </span>
          </div>
          <div className="flex items-center justify-center gap-5 rounded-full bg-white/10 px-6 py-4 backdrop-blur-[32px]">
            <img src="./contact-us/mail.svg" />
            <span className="text-2xl font-semibold text-white">Email us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
