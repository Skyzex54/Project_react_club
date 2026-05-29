import React from "react";

function Formulaire() {
  return (
    // moreba3 lkbiiirr li haz kolchi 
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-10 py-8 w-full max-w-2xl mx-auto">

      {/*div dyal smya o morba3 dyalha*/}
      <div className="mb-6">

        {/*morba3*/}
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Full Name
        </label>

        {/* div dyal icone */}
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">

          {/* Icône dyal fullname */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          {/* Input texte */}
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* div dyal email smya o icone */}
      <div className="mb-6">

        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Email
        </label>
        {/*div dyal icone*/}
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">

          {/* Icone dyal mail */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
        </div>
      </div>

      {/*div dyal message smya o icone*/}
      <div className="mb-8">

        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Message
        </label>

        {/*div dyal icone */}
        <div className="flex items-start border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">

          {/* Icone dyal message */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>

          {/* morba3 dyal message atkon kbr */}
          <textarea
            placeholder="Write your message here..."
            rows={5}
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent resize-none"
          />
        </div>
      </div>

      {/*div dyal bouton Send Message*/}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-8 py-3 rounded-xl transition-colors">

          {/* Icone sarokh dyal botona*/}
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>

          Send Message
        </button>
      </div>

    </div>
  );
}

export default Formulaire;