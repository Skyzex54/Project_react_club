import React from 'react';

function MemberCard({name,role,description,image,linkedin,email}){
    function getInitials(fullName) {
        if (!fullName) return "?"; //ila makanch  fullname dir ?
        const words = fullName.trim().split(" "); //ay7eyd espace b split o trima hh ghadi ysab tableau fih full name hayda ["nihale", "mansouf"] lkola smiya
        const first = words[0][0].toUpperCase(); //ayakhd lharf lewl mn klma lwla o ayredo majiscule
        const second = words[1][0].toUpperCase(); //nfs lhaja mea lknia
        return first + second; 
      }
     
      return (
        // chkel dyal card
        <div className="w-[260px] bg-white border border-slate-200 rounded-2xl px-6 pt-8 pb-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-300 hover:shadow-cyan-100">
     
          {/* chkel dyal tswira */}
          <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-slate-100 overflow-hidden border-4 border-white shadow">
            {image ? (
              // la kant tswira ay7etha 3adi
              <img src={image} alt={name} className="h-full w-full object-cover" />
            ) : (
              // la makantch ayakhd 2 horof lwlin function li lfo9
              <div className="h-full w-full flex items-center justify-center bg-cyan-100">
                <span className="text-xl font-bold text-slate-500">{getInitials(name)}</span>
              </div>
            )}
          </div>
     
          {/* design dyal smya */}
          <h3 className="text-lg font-bold text-slate-800 mb-1">{name}</h3>
     
          {/* role */}
          <p className="text-sm font-bold bg-linear-to-r from-gray-400 to-cyan-300 bg-clip-text text-transparent mb-3">{role}</p>
     
          {/* Description */}
          <p className="bg-gradient-to-br from-gray-400 to-black bg-clip-text text-transparent text-xs mb-6 leading-relaxed font-medium">{description}</p>
     
          {/* Icone dyal GitHub o LinkedIn */}
          <div className="flex gap-3 justify-center text-gray-400">
            {/* Bouton LinkedIn - S'affiche uniquement si le lien existe */}
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-cyan-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        )}

        {/* Bouton email - S'affiche uniquement si le lien existe */}
        {email && (
          <a href={email} className="text-slate-400 hover:text-cyan-600 transition-colors">
         <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          </a>
        )}
 
      </div>
    </div>
  );
}
export default MemberCard;