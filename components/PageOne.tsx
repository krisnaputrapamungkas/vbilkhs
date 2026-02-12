
import React from 'react';
import { PageId, NavigationProps } from '../types';

const PageOne: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen textured-purple paper-grain flex flex-col items-center justify-between p-6 py-12 md:p-16 text-white overflow-hidden relative animate-page-entry">
      
      {/* Top Text - More Minimal and Elegant */}
      <div className="text-center z-20 space-y-1">
        <h2 className="text-[10px] md:text-sm tracking-[0.4em] font-header text-white/60 uppercase">
          From Muhamad Krisna Putra Pamungkas
        </h2>
        <h2 className="text-[10px] md:text-sm tracking-[0.4em] font-header text-white/60 uppercase">
          For Bilkhis Aisa Putri
        </h2>
      </div>

      {/* Main Visual Center */}
      <div className="relative flex flex-col items-center w-full max-w-5xl my-auto">
        {/* Massive Background Text */}
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[14rem] font-script text-white/10 whitespace-nowrap pointer-events-none select-none z-0">
          Valentine
        </h1>
        
        {/* The Polaroid - Elevated with Tape */}
        <div className="relative z-10 animate-float">
          {/* Tape elements */}
          <div className="tape tape-edge -top-4 -left-4 -rotate-12 opacity-80"></div>
          <div className="tape tape-edge -bottom-2 -right-6 rotate-[15deg] opacity-60"></div>
          
          <div className="polaroid rotate-[1deg] w-[280px] md:w-[450px]">
            <img 
              src="./p1.jpg" 
              alt="Main Memory"
              className="w-full aspect-[4/5] object-cover grayscale-[20%] sepia-[10%]"
            />
            {/* Handwriting Caption inside Polaroid */}
            <div className="mt-4 text-center">
              <span className="font-handwriting text-black/70 text-xl md:text-2xl">14 Feb 2025  </span>
            </div>
          </div>
        </div>

        {/* Floating Sidebar Links (Desktop only) */}
        <div className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-40 items-center">
          <div className="h-24 w-[1px] bg-white/20"></div>
          <button 
             className="vertical-text font-header tracking-[0.5em] text-xs hover:text-white/100 text-white/50 transition-all transform -rotate-90 origin-center"
             onClick={() => onNavigate(PageId.ONE)}
          >
            HOME
          </button>
        </div>
        
        <div className="hidden lg:flex fixed right-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-40 items-center">
          <button 
             className="vertical-text font-header tracking-[0.5em] text-xs hover:text-white/100 text-white/50 transition-all transform rotate-90 origin-center"
             onClick={() => onNavigate(PageId.TWO)}
          >
            DETAILS
          </button>
          <div className="h-24 w-[1px] bg-white/20"></div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center z-20 w-full">
        <div className="flex items-center justify-center gap-4 mb-4">
           <div className="h-[1px] w-8 md:w-24 bg-white/20"></div>
           <h3 className="text-lg md:text-3xl font-header tracking-[0.4em] uppercase font-light">
             HAPPY VALENTINE
           </h3>
           <div className="h-[1px] w-8 md:w-24 bg-white/20"></div>
        </div>
        
        <button 
          onClick={() => onNavigate(PageId.TWO)}
          className="mt-4 text-[10px] md:text-xs font-header tracking-[0.2em] border border-white/20 px-10 py-3 rounded-full hover:bg-white/10 transition-all uppercase"
        >
          Begin Story
        </button>
      </div>
    </div>
  );
};

export default PageOne;
