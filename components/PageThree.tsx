
import React from 'react';
import { PageId, NavigationProps } from '../types';

const PageThree: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen textured-purple paper-grain flex flex-col lg:flex-row items-center justify-center p-8 md:p-24 gap-16 text-white overflow-hidden animate-page-entry">
      
      {/* Visual Section */}
      <div className="relative w-full lg:w-1/2 flex flex-col items-center gap-8">
        <h1 className="absolute -top-12 lg:-top-20 lg:-left-12 text-7xl md:text-[10rem] font-script text-white/5 pointer-events-none select-none z-0">Us.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl z-10">
           {/* Photo 1 */}
           <div className="polaroid -rotate-2 shadow-2xl relative transition-transform hover:rotate-0 hover:scale-105 duration-300">
             <div className="tape tape-edge -top-4 left-1/2 -translate-x-1/2 opacity-40"></div>
             <img src="./p3_1.jpg" className="w-full aspect-square object-cover" alt="Us 1" />
             <p className="font-handwriting text-black/60 text-lg mt-4 text-center">My world.</p>
           </div>
           
           {/* Photo 2 */}
           <div className="polaroid rotate-3 shadow-2xl relative transition-transform hover:rotate-0 hover:scale-105 duration-300">
             <div className="tape tape-edge -top-4 left-1/3 -rotate-12 opacity-30"></div>
             <img src="./p3_2.jpg" className="w-full aspect-square object-cover" alt="Us 2" />
             <p className="font-handwriting text-black/60 text-lg mt-4 text-center">My happiness.</p>
           </div>
        </div>

        <img 
          src="https://static.vecteezy.com/system/resources/previews/022/983/523/non_2x/hand-drawn-watercolor-violet-flower-free-png.png" 
          className="absolute -bottom-16 right-0 w-32 md:w-48 z-30 drop-shadow-xl opacity-80" 
          alt="Flora"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 md:space-y-12 z-20">
        <div className="space-y-3 group">
          <h2 className="text-xl md:text-2xl font-header tracking-[0.3em] font-bold text-white/90 uppercase border-b border-white/10 pb-2 inline-block group-hover:border-white/40 transition-colors">Still Choosing You</h2>
          <p className="text-base md:text-lg font-serif italic font-light leading-relaxed text-white/70">
            Love isn't always about big moments. It's about staying, trying, and choosing each other when things get real. And I'm still choosing you, every single day.
          </p>
        </div>

        <div className="space-y-3 group">
          <h2 className="text-xl md:text-2xl font-header tracking-[0.3em] font-bold text-white/90 uppercase border-b border-white/10 pb-2 inline-block group-hover:border-white/40 transition-colors">Proud to call you mine</h2>
          <p className="text-base md:text-lg font-serif italic font-light leading-relaxed text-white/70">
            I'm proud to call you mine. Not just because of how you look, but because of who you are—your strength, your heart, and the way you keep growing. I see the effort you put in, even when no one's watching.
          </p>
        </div>

        <div className="space-y-3 group">
          <h2 className="text-xl md:text-2xl font-header tracking-[0.3em] font-bold text-white/90 uppercase border-b border-white/10 pb-2 inline-block group-hover:border-white/40 transition-colors">My Backbone</h2>
          <p className="text-base md:text-lg font-serif italic font-light leading-relaxed text-white/70">
            Thank you for always having my back. For the support, the patience, and the quiet strength you give me. I'm really grateful to have you by my side sayanggg, love youu cill!
          </p>
        </div>

        <div className="pt-4">
          <button 
             onClick={() => onNavigate(PageId.FOUR)}
             className="group flex items-center gap-4 text-xs font-header tracking-[0.5em] text-white/40 hover:text-white transition-all uppercase"
          >
            <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-white transition-all"></div>
            Read Final Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
