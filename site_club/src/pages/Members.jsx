import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "../Components/MemberCard";

function Members() {
  const teamMembers = [
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
    {name: "nihale mansouf",role:"hamda",description:"hamda tani",image:"",},
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4"> {/*div dyal page kamla*/}
 
 {/* Titre o description*/}
 <div className="text-center mb-12">
   <h1 className="text-4xl font-bold text-slate-800 mb-3">Our Members</h1>
   <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
     Club lay3mrha dar blabla
   </p>
 </div>

 <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">  {/* had div dyal les cards derna liha flex bach ytallignaw f ligne whda b flex o flex-wrap katgol la 3mrat chi ligne doz ster li wrah justify-center at3awen la kano des carte chaytin ybano m centrin */}


   {/*hna affichage b map atakhd kola wahed mn tableau li fih memebers lfog o atsawb lih card b component memberCard */}
   {teamMembers.map((member) => (
     <MemberCard
       name={member.name}
       role={member.role}
       description={member.description}
       image={member.image}
     />
   ))}

   {/* card lkhra*/}
   <div className="w-65 bg-cyan-590 border border-slate-200 rounded-2xl px-6 pt-8 pb-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-300 hover:shadow-cyan-100">

     {/* Icône dyal profil*/}
     <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-cyan-100 flex items-center justify-center ">
       <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5">
         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
         <circle cx="12" cy="7" r="4" />
       </svg>
     </div>

     {/*titre*/}
     <h3 className="text-lg font-bold text-slate-800 mb-3">Join Our Community</h3>

     {/*description*/}
     <p className="bg-linear-to-br from-gray-400 to-black bg-clip-text text-transparent text-xs mb-6 leading-relaxed font-medium">
       Be part of something bigger. Create, learn, and grow with us.
     </p>

     {/* Bouton dyal register f chkel lien */}
     <Link
       to="/Register"
       className="inline-block bg-cyan-500 text-white text-sm font-semibold px-6 py-2 rounded-xl hover:bg-teal-600 transition-colors w-full"
     >
       Register Now
     </Link>

   </div>
 </div>
</div>
    </>
  );
}

export default Members;
