
import React from 'react';
import { PageId, NavigationProps } from '../types';

const PageTwo: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen textured-beige paper-grain flex items-center justify-center p-6 md:p-20 overflow-hidden animate-page-entry">
      <div className="relative w-full max-w-7xl h-[800px] md:h-[650px]">
        
        {/* Layer 1: Background Elements */}
        <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
        
        {/* Large Beach Polaroid */}
        <div className="absolute top-0 left-0 md:left-[5%] polaroid -rotate-6 z-10 w-[240px] md:w-[320px]">
          <div className="tape tape-edge -top-2 left-1/2 -translate-x-1/2 opacity-30"></div>
          <img 
            src="./p2.jpg" 
            alt="Moments" 
            className="w-full aspect-[3/4] object-cover grayscale-[30%]"
          />
          <p className="font-handwriting text-black/40 text-sm mt-2 text-center">the sea, and you.</p>
        </div>

        {/* Purple Letter/Card */}
        <div className="absolute bottom-[20%] left-[2%] md:left-[10%] bg-[#8e44ad] w-[220px] md:w-[300px] p-6 shadow-2xl z-30 rotate-3 text-white">
          <div className="border border-white/20 p-4 h-full flex flex-col justify-center items-center">
            <span className="font-script text-7xl md:text-8xl opacity-90 leading-none">BAP</span>
            <span className="font-header text-[10px] tracking-[0.5em] mt-4 opacity-50 uppercase">Bilkhis Aisa Putri</span>
          </div>
          <img 
            src="https://www.pngmart.com/files/1/Purple-Rose-PNG-Photos.png" 
            className="absolute -top-16 -right-12 w-40 drop-shadow-xl pointer-events-none" 
            alt="Decor" 
          />
        </div>

        {/* Center Main Card (Message) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] md:max-w-[400px] z-20">
          <div className="bg-white p-8 md:p-12 shadow-xl border-t-[6px] border-[#8e44ad] relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-script text-purple-800 text-3xl">Special for you</div>
            <div className="text-center space-y-4">
               <span className="block text-xs font-header tracking-widest text-gray-400">FEBRUARY 14, 2025</span>
               <div className="h-[1px] w-12 bg-gray-200 mx-auto"></div>
               <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-tight">
                 Happy Valentine's day My girlfriend
               </h2>
               <p className="font-handwriting text-2xl text-purple-600 pt-4">-Krisna</p>
            </div>
            <img 
              src="https://www.pngmart.com/files/15/Butterfly-Shadow-PNG-Transparent-Image.png" 
              className="absolute -bottom-10 -right-10 w-24 opacity-80 rotate-12"
              alt="Butterfly"
            />
          </div>
        </div>

        {/* Collage Frame */}
        <div className="absolute bottom-4 right-0 md:right-[5%] bg-white p-3 shadow-lg -rotate-2 z-30 w-56 md:w-64">
           <div className="grid grid-cols-2 gap-2">
              <img src="./c1.jpg" className="w-full aspect-square object-cover" alt="Collage 1" />
              <img src="./c2.jpg" className="w-full aspect-square object-cover" alt="Collage 2" />
              <img src="./c3.jpg" className="w-full aspect-square object-cover" alt="Collage 3" />
              <img src="./c4.jpg" className="w-full aspect-square object-cover" alt="Collage 4" />
           </div>
           <div className="mt-4 flex justify-between items-center px-1">
              <span className="font-handwriting text-sm text-gray-400">Us together</span>
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-200"></div>)}
              </div>
           </div>
           <img 
              src="https://www.pngmart.com/files/11/Purple-Ribbon-Bow-Transparent-Background.png" 
              className="absolute -bottom-12 -left-8 w-32 drop-shadow-md"
              alt="Ribbon"
           />
        </div>

        {/* Navigation Label */}
        <button 
           onClick={() => onNavigate(PageId.THREE)}
           className="absolute -bottom-12 md:bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group z-50"
        >
          <span className="font-header text-[10px] tracking-[0.4em] text-gray-400 group-hover:text-purple-600 transition-colors uppercase">Next Chapter</span>
          <div className="w-[1px] h-12 bg-gray-200 group-hover:h-16 group-hover:bg-purple-400 transition-all"></div>
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
