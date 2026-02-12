
import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>(PageId.ONE);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {currentPage === PageId.ONE && <PageOne onNavigate={handleNavigate} currentPage={currentPage} />}
      {currentPage === PageId.TWO && <PageTwo onNavigate={handleNavigate} currentPage={currentPage} />}
      {currentPage === PageId.THREE && <PageThree onNavigate={handleNavigate} currentPage={currentPage} />}
      {currentPage === PageId.FOUR && <PageFour onNavigate={handleNavigate} currentPage={currentPage} />}
      
      {/* Persistent Navigation Hint for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
         {Object.values(PageId).map((id, index) => (
           <button
             key={id}
             onClick={() => handleNavigate(id)}
             className={`w-3 h-3 rounded-full border border-white shadow-md transition-all ${
               currentPage === id ? 'bg-white scale-125' : 'bg-white/40'
             }`}
             title={`Go to page ${index + 1}`}
           />
         ))}
      </div>
    </div>
  );
};

export default App;
