import React from "react";
import profile from "../Assets/background.png";
import TypingAnimation from "./animations/Typing";
import { BiDownload } from "react-icons/bi";
import resume from "../Assets/resume.pdf";
import { links } from "../data/links";
import { redirectToLink } from "../utils/commonFunction";
import QRCode from "qrcode";

const Home = () => {
  const myRoles = ["Fullstack Developer", "Mobile App Developer"];

  const handleDownload = async () => {
    const link = document.createElement('a');
    // const response = await fetch('https://as1.ftcdn.net/v2/jpg/06/50/89/34/1000_F_650893467_s4vMfhFd8LAA2Gh5ZVVF5w1gKP6TZS82.jpg');
    // const blob = await response.blob();
    // link.href = URL.createObjectURL(blob);

    // TODO: replace with link once backend is ready
    link.href = resume;
    // link.href = 'https://res.cloudinary.com/dbg5xqub7/raw/upload/v1726257006/ng3mmkgmb8myb7uimegm';
    link.download = 'Vinay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(process.env);
  }
  
  const handleRedirectToPayment = () => {
    const upiUrl = `upi://pay?pa=vinayaksingh920@oksbi&pn=Vinay%20Singh&am=150.00&cu=INR`;
  
    QRCode.toDataURL(upiUrl, function (err, qrCodeDataUrl) {
      if (err) return console.error(err);
  
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head><title>Scan to Pay</title></head>
            <body style="display: flex; align-items: center; justify-content: center; height: 100vh;">
              <div style="text-align: center;">
                <h2>Scan this QR to Pay ₹150</h2>
                <img src="${qrCodeDataUrl}" alt="UPI QR Code" />
              </div>
            </body>
          </html>
        `);
      }
    });
  };
  

  return (
    <div className="bg-center bg-no-repeat flex">
      <div className="mt-20 p-10">
        <span className="text-5xl text-normal">Hi I'm Vinay Singh</span>
        <div className="min-h-12">
          <TypingAnimation texts={myRoles} />
        </div>
        <div className="text-slate-400 mt-6 text-lg">
          <span>
            I’m a full-stack developer who enjoys working on both the frontend
            and backend. I use React to build interactive web apps and React
            Native to bring mobile apps to life, especially on Android. My
            backend expertise in Node.js, Mongoose, and MongoDB allows me to
            design smooth, efficient services. I also incorporate Elasticsearch
            for powerful search features. I’m committed to precision and
            crafting well-structured code that leads to high-quality, scalable
            solutions.
          </span>
        </div>
        <div className="mt-4 p-2 ml-4 flex flex-col gap-4">
          <div>
            {links.map((item, index) => {
              const IconComponent = item.icon;
              return ( !item.isHidden &&
                <div className="relative inline-flex group ml-2" key={index} onClick={() => redirectToLink(item.link)}>
                  <div className="absolute opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    className="relative inline-flex items-center justify-center px-2 py-2 transition-all duration-200 bg-gray-900 font-pj rounded-xl"
                    role="button"
                  >
                    <IconComponent size={item.size} color={item.color} />
                  </a>
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="bg-gray-700 active:bg-gray-700 hover:bg-gray-200 hover:text-gray-700 text-headings font-bold py-2 px-8 rounded text-lg flex items-center justify-between transition-all duration-200"
              onClick={handleDownload}
            >
              <span>Download Resume</span>
              <BiDownload className="ml-4" />
            </button>
            <button
              className="bg-gray-700 active:bg-gray-700 hover:bg-gray-200 hover:text-gray-700 text-headings font-bold py-2 px-8 rounded text-lg flex items-center justify-between transition-all duration-200"
              onClick={handleRedirectToPayment}
            >
              <span>Buy Me A Coffee ☕️</span>
              {/* <BiDownload className="ml-4" /> */}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-contain w-[100%] h-[100%]">
        <img src={profile}></img>
      </div>
    </div>
  );
};

export default Home;
