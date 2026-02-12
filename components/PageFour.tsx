
import React from 'react';
import { PageId, NavigationProps } from '../types';

const PageFour: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen textured-beige paper-grain flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden animate-page-entry">
      
      {/* Decorative Envelope Background Effect */}
      <div className="w-full max-w-3xl bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Small Polaroid inside the letter */}
        <div className="w-48 md:w-56 shrink-0 polaroid rotate-2 hidden md:block">
           <img src="./p4.jpg" className="w-full aspect-square object-cover" alt="Final Memory" />
           <p className="font-handwriting text-black/40 text-xs mt-2 text-center italic">with love.</p>
        </div>

        <div className="flex-1">
          {/* Letter Corners */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-100 to-transparent"></div>
          
          {/* Header */}
          <div className="text-center md:text-left mb-8 md:mb-12">
             <h1 className="text-3xl md:text-5xl font-script text-purple-900/80 mb-2">
               Happy valentine's dayy sayang
             </h1>
             <div className="w-16 h-[1px] bg-purple-200 mx-auto md:mx-0 mt-4"></div>
          </div>

          {/* The Actual Text Body */}
          <div className="space-y-6 font-serif text-gray-700 leading-loose text-base md:text-lg italic text-center md:text-left">
            <p>
              Halo sayangkuu ini krisnaa... 
            </p>
            <p>
              Tanggal 8 februari jam 7 yang kamu kira bobo AHAHAAH, krisnaa tidaa boboo sayangkuuu. 
              Krisnaa lgii muter otakk gimanaa biar krisnaa tetep bisaa rayain valentine buat kmuu meskipunn kamuu gabisaa makan coklat.
            </p>
            <p>
              Akhirnyaa krisnaa buat sesuatu yang mungkinn dann semogaa bisaa bikinn kamu happyyyy... heheehee.
            </p>
            
            <div className="pt-6 text-right">
              <p className="font-handwriting text-3xl text-purple-700">Krisna Putra</p>
              <p className="font-header text-[10px] tracking-widest mt-1 uppercase opacity-40">Forever Yours</p>
            </div>
          </div>
        </div>

        {/* Stamp/Seal at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
           <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
        </div>
      </div>

      {/* Control Actions */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <button 
          onClick={() => onNavigate(PageId.ONE)}
          className="font-header text-[10px] tracking-[0.5em] text-gray-400 hover:text-purple-600 transition-all uppercase border-b border-transparent hover:border-purple-200 pb-1"
        >
          Return to Start
        </button>
        
        <p className="text-[10px] uppercase tracking-[0.6em] text-gray-300 font-header">
          M. Krisna × B. Aisa
        </p>
      </div>

      {/* Floating Petals/Flowers for Page 4 */}
      <img 
        src="https://www.pngarts.com/files/3/Flower-Petals-Transparent-Images.png" 
        className="absolute top-0 right-0 w-64 opacity-20 pointer-events-none" 
        alt="Decor"
      />
      <img 
        src="https://www.pngarts.com/files/3/Flower-Petals-Transparent-Images.png" 
        className="absolute bottom-0 left-0 w-64 opacity-20 pointer-events-none rotate-180" 
        alt="Decor"
      />
    </div>
  );
};

export default PageFour;
