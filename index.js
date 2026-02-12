
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(React.createElement);

const PageOne = ({ onNavigate }) => {
  return html`
    <div className="min-h-screen textured-purple paper-grain flex flex-col items-center justify-between p-6 py-12 md:p-16 text-white overflow-hidden relative animate-page-entry">
      <div className="text-center z-20 space-y-1">
        <h2 className="text-[10px] md:text-sm tracking-[0.4em] font-header text-white/60 uppercase">
          From Muhamad Krisna Putra Pamungkas
        </h2>
        <h2 className="text-[10px] md:text-sm tracking-[0.4em] font-header text-white/60 uppercase">
          For Bilkhis Aisa Putri
        </h2>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-5xl my-auto">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[14rem] font-script text-white/10 whitespace-nowrap pointer-events-none select-none z-0">
          Valentine
        </h1>
        
        <div className="relative z-10 animate-float">
          <div className="tape tape-edge -top-4 -left-4 -rotate-12 opacity-80"></div>
          <div className="tape tape-edge -bottom-2 -right-6 rotate-[15deg] opacity-60"></div>
          
          <div className="polaroid rotate-[1deg] w-[280px] md:w-[450px]">
            <img 
              src="./p1.jpg" 
              className="w-full aspect-[4/5] object-cover grayscale-[20%] sepia-[10%]"
            />
            <div className="mt-4 text-center">
              <span className="font-handwriting text-black/70 text-xl md:text-2xl">14 Feb 2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center z-20 w-full">
        <div className="flex items-center justify-center gap-4 mb-4">
           <div className="h-[1px] w-8 md:w-24 bg-white/20"></div>
           <h3 className="text-lg md:text-3xl font-header tracking-[0.4em] uppercase font-light">
             HAPPY VALENTINE
           </h3>
           <div className="h-[1px] w-8 md:w-24 bg-white/20"></div>
        </div>
        
        <button 
          onClick=${() => onNavigate('two')}
          className="mt-4 text-[10px] md:text-xs font-header tracking-[0.2em] border border-white/20 px-10 py-3 rounded-full hover:bg-white/10 transition-all uppercase"
        >
          Begin Story
        </button>
      </div>
    </div>
  `;
};

const PageTwo = ({ onNavigate }) => {
  return html`
    <div className="min-h-screen textured-beige paper-grain flex items-center justify-center p-6 md:p-20 overflow-hidden animate-page-entry">
      <div className="relative w-full max-w-7xl h-[800px] md:h-[650px]">
        <div className="absolute top-0 left-0 md:left-[5%] polaroid -rotate-6 z-10 w-[240px] md:w-[320px]">
          <img src="./p2.jpg" className="w-full aspect-[3/4] object-cover grayscale-[30%]" />
          <p className="font-handwriting text-black/40 text-sm mt-2 text-center">the sea, and you.</p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] md:max-w-[400px] z-20">
          <div className="bg-white p-8 md:p-12 shadow-xl border-t-[6px] border-[#8e44ad] relative text-center space-y-4">
            <span className="block text-xs font-header tracking-widest text-gray-400">FEBRUARY 14, 2025</span>
            <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-tight">
              Happy Valentine's day My girlfriend
            </h2>
            <p className="font-handwriting text-2xl text-purple-600 pt-4">-Krisna</p>
          </div>
        </div>

        <div className="absolute bottom-4 right-0 md:right-[5%] bg-white p-3 shadow-lg -rotate-2 z-30 w-56 md:w-64">
           <div className="grid grid-cols-2 gap-2">
              <img src="./c1.jpg" className="w-full aspect-square object-cover" />
              <img src="./c2.jpg" className="w-full aspect-square object-cover" />
              <img src="./c3.jpg" className="w-full aspect-square object-cover" />
              <img src="./c4.jpg" className="w-full aspect-square object-cover" />
           </div>
        </div>

        <button 
           onClick=${() => onNavigate('three')}
           className="absolute -bottom-12 md:bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group z-50"
        >
          <span className="font-header text-[10px] tracking-[0.4em] text-gray-400 group-hover:text-purple-600 transition-colors uppercase">Next Chapter</span>
          <div className="w-[1px] h-12 bg-gray-200"></div>
        </button>
      </div>
    </div>
  `;
};

const PageThree = ({ onNavigate }) => {
  return html`
    <div className="min-h-screen textured-purple paper-grain flex flex-col lg:flex-row items-center justify-center p-8 md:p-24 gap-16 text-white overflow-hidden animate-page-entry">
      <div className="relative w-full lg:w-1/2 flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl z-10">
           <div className="polaroid -rotate-2"><img src="./p3_1.jpg" className="w-full aspect-square object-cover" /><p className="font-handwriting text-black/60 text-lg mt-4 text-center">My world.</p></div>
           <div className="polaroid rotate-3"><img src="./p3_2.jpg" className="w-full aspect-square object-cover" /><p className="font-handwriting text-black/60 text-lg mt-4 text-center">My happiness.</p></div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 z-20">
        <div className="space-y-3">
          <h2 className="text-xl font-header tracking-[0.3em] font-bold text-white/90 uppercase border-b border-white/10 pb-2 inline-block">Still Choosing You</h2>
          <p className="text-base font-serif italic text-white/70">Love isn't always about big moments. It's about staying, trying, and choosing each other when things get real.</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-header tracking-[0.3em] font-bold text-white/90 uppercase border-b border-white/10 pb-2 inline-block">My Backbone</h2>
          <p className="text-base font-serif italic text-white/70">Thank you for always having my back. I'm really grateful to have you by my side sayanggg, love youu cill!</p>
        </div>
        <button onClick=${() => onNavigate('four')} className="text-xs font-header tracking-[0.5em] text-white/40 hover:text-white transition-all uppercase">Read Final Note →</button>
      </div>
    </div>
  `;
};

const PageFour = ({ onNavigate }) => {
  return html`
    <div className="min-h-screen textured-beige paper-grain flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden animate-page-entry">
      <div className="w-full max-w-3xl bg-white p-8 md:p-16 shadow-2xl relative border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-48 md:w-56 shrink-0 polaroid rotate-2 hidden md:block">
           <img src="./p4.jpg" className="w-full aspect-square object-cover" />
           <p className="font-handwriting text-black/40 text-xs mt-2 text-center italic">with love.</p>
        </div>
        <div className="flex-1 space-y-6 font-serif text-gray-700 leading-loose text-base md:text-lg italic text-center md:text-left">
            <h1 className="text-3xl font-script text-purple-900/80 mb-2">Happy valentine's dayy sayang</h1>
            <p>Haloo sayaangg Happy valentine's day sayaaanggg, kamuu berhakk dapettinn dann ngerayainn harii valentine sayanggg, dann aku berkewajiban ngerayainn untukk kamuuuu, krisnaa banggaa punyaa kamuu sayaangg, krisnaa selaluuu happyyy klo sma kmuu, krisnaa selaluu dukungg, support kmuu selamaa kmu seneng dann yang pastinyaa positiff, terimaakasii yaaaa sayaangg udahh hadirr, udahh singgahh dihidupkuuu, no matter how many choices I have, I’ll always choose you sayaaaangg. i lovee youuuu bocilllkuuu cantikuuu</p>
            <div className="pt-6 text-right">
              <p className="font-handwriting text-3xl text-purple-700">Krisna Putra</p>
            </div>
        </div>
      </div>
      <button onClick=${() => onNavigate('one')} className="mt-12 font-header text-[10px] tracking-[0.5em] text-gray-400 hover:text-purple-600 uppercase">Return to Start</button>
    </div>
  `;
};

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('one');
  
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return html`
    <div className="min-h-screen bg-slate-50">
      ${currentPage === 'one' && html`<${PageOne} onNavigate=${handleNavigate} />`}
      ${currentPage === 'two' && html`<${PageTwo} onNavigate=${handleNavigate} />`}
      ${currentPage === 'three' && html`<${PageThree} onNavigate=${handleNavigate} />`}
      ${currentPage === 'four' && html`<${PageFour} onNavigate=${handleNavigate} />`}
      
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
         ${['one', 'two', 'three', 'four'].map(id => html`
           <button
             key=${id}
             onClick=${() => handleNavigate(id)}
             className=${`w-3 h-3 rounded-full border border-white shadow-md transition-all ${
               currentPage === id ? 'bg-purple-600 scale-125' : 'bg-white/60'
             }`}
           />
         `)}
      </div>
    </div>
  `;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
