import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-black text-white py-12 px-4">
      <style>
        {`
          @keyframes textFlash {
            0%, 100% { color: white; }
            50% { color: #e34b4b; } /* Light green color */
          }

          .flashy-text {
            animation: textFlash 0.5s infinite;
          }
        `}
      </style>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side Content */}
        <div className="font-stone"> {/* Apply the font to the entire div to affect all child text elements */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flashy-text">STAY AWAY from $CrimsonCap! <br></br> <br></br> Hat of all Misery❌ </h2>
          <p className="text-base mb-4">
          This cursed entity will stop at nothing to claim more souls. If you suspect someone has fallen under its spell, seek help immediately! 🏃‍♂️🆘
          </p>
          <h3 className="text-xl md:text-2xl font-bold mb-3 flashy-text">⚠️ Beware the allure of the enigmatic $CrimsonCap! 🧢💀</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
          <li> This sinister token is going to lurk in the shadows of the Pump.fun tokens, preying on the curious and unsuspecting. 🕷️</li>
          </ul>
          <img src="https://i.ibb.co/rG3YnqN/side-bar-2.gif" alt="Wen Logo" className="mx-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </div>
        
        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/Dt0nNrf/side-bar-2-gif.gif" alt="Skull Animation" className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </div>
      </div>
    </div>
  );
}
