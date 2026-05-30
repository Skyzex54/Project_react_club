import React from 'react';

function MemberCard({name,role,description,image}){
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
     
          {/* role vert/teal */}
          <p className="text-sm font-bold bg-linear-to-r from-gray-400 to-cyan-300 bg-clip-text text-transparent mb-3">{role}</p>
     
          {/* Description */}
          <p className="bg-gradient-to-br from-gray-400 to-black bg-clip-text text-transparent text-xs mb-6 leading-relaxed font-medium">{description}</p>
     
          {/* Icone dyal GitHub o LinkedIn */}
          <div className="flex gap-3 justify-center text-gray-400">
            {/* Bouton GitHub */}
        <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 hover:text-teal-500 hover:border-teal-200 transition-colors"> {/*link dyal cmpt*/}
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"> {/*icone*/}
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.01A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.28 2.74-1.01 2.74-1.01.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.34 4.65-4.57 4.9.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
          </svg>
        </a>
 
        {/* Bouton LinkedIn */}
        <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 hover:text-teal-500 hover:border-teal-200 transition-colors">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.7H5.67v7.7h2.67zM7 9.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 8.84v-4.2c0-2.25-1.2-3.3-2.8-3.3-1.28 0-1.85.7-2.17 1.2v-1.03h-2.67c.03.68 0 7.33 0 7.33h2.67v-4.1c0-.22.02-.44.08-.6.18-.44.6-.9 1.3-.9.92 0 1.29.7 1.29 1.73v3.87h2.3z" />
          </svg>
        </a>
 
      </div>
    </div>
  );
}
export default MemberCard;