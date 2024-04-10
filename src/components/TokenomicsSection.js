import React from 'react';

const TokenomicsSection = () => {
  return (
    <div id="tokenomics" className="text-white py-12 px-4 font-stone relative">
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
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div>
        <h2 className="text-3xl font-bold mb-6 flashy-text">Whispers of dark rituals, cursed code, and a malevolent presence have surrounded $CrimsonCap since its inception. The haunting Crimson Cap character is said to be a harbinger of doom, luring victims into a crimson abyss. 🩸🕳️"

</h2>

          <p className="mb-4">
            $CrimsonCap PreSale will take place on Pump.Fun, DON'T BUY, RUN AWAY, SEEK HELP❌☠️
          </p>
          <h3 className="text-2xl font-bold mb-4 flashy-text">RUN AWAY, SEEK HELP❌☠️</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>RUN AWAY, SEEK HELP❌☠️</li>
            <li>PRAY TO BE CURED</li>
            <li>☠️☠️☠️☠️☠️☠️
 </li>
          </ul>
        </div>
        
        {/* Image Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img src="https://i.ibb.co/LCx5335/LOGO-SPEED-UP.gif" alt="DIELA PreSale" className="rounded-lg shadow-xl transform transition duration-500 hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
