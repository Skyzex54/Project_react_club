import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "../Components/MemberCard";
import fati from "../assets/tsawer_members/pr-aidev.jpg";
import younes from "../assets/tsawer_members/vicepresident.jpg";
import med from "../assets/tsawer_members/headofdesign.jpg";
import taoufik from "../assets/tsawer_members/speaker.jpg";
import wiam from "../assets/tsawer_members/secretaire.jpg";
import majda from "../assets/tsawer_members/headofmediaunit.jpg";
import hiba from "../assets/tsawer_members/headofmediaunit2.png";
import sara from "../assets/tsawer_members/eventmanager.jpg";
import fati2 from "../assets/tsawer_members/RH.jpg";
import meryem from "../assets/tsawer_members/treasurer.jpg";


function Members() {
  const teamMembers = [
    {name: "FATIMA ZAHRAE ER-RAQI",role:"President",description:"Computer Science Student",image: fati, linkedin: "https://www.linkedin.com/in/fatima-zahrae-er-raqi-383a6a312/fr/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFOPNlawkSsibtvFrT1OQFg%3D%3D",email : "mailto:erraquifatimazahra631@gmail.com",},
    {name: "YOUNES EL KADMIRI",role:"Vice President",description:"Software Development Student",image:younes, linkedin: "",email : "mailto :elkadmiri.younes1@gmail.com",},
    {name: "MOHAMED BEN DIFI",role:"Designer/Video Editor",description:"AI student",image: med,linkedin: "https://www.linkedin.com/in/mohamed-bendifi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgbjlK2wgTSa82%2FqOAv%2B11A%3D%3D",email : "mailto:mohamed.bendifi2004@gmail.com",},
    {name: "TAOUFIK AMZIL",role:"Speaker",description:"Dr. Computer Science",image: taoufik,linkedin: "https://www.linkedin.com/in/d-taoufik-amzil/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEhRzMLLTS42zZoLTAuWDWg%3D%3D",email : "mailto:betaoufik25@gmail.com",},
    {name: "WIAM BOULIF",role:"General Secretary",description:"MI Student",image:wiam,linkedin: "https://www.linkedin.com/in/wiam-boulif-7%C3%A87/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnAbKQGRbQA2Xpd01ARiStQ%3D%3D",email : "mailto:wiboulif77@gmail.com",},
    {name: "MAJDA ACHABBI",role:"Head Of Media Unit",description:"Computer Science Student",image:majda,linkedin: "https://www.linkedin.com/in/echabbi-majda/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9hr7R0n0QpSZgX7SLyaJtg%3D%3D",email : "mailto:echabbimajda2001@gmail.com",},
    {name: "HIBA BENHAMMOU",role:"Head Of Media Unit",description:"Computer Science Student",image:hiba,linkedin: "https://www.linkedin.com/in/hiba-benhammou-a5387932b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bvejsgi0iS%2Bij4hmEXDbujA%3D%3D",email : "mailto:hibabenhammou94@gmail.com",},
    {name: "SARA RIZK",role:"Events Manager",description:"Computer Science Student",image:sara,linkedin: "https://www.linkedin.com/in/sara-rizk-410740357/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrbLTfBlYT4eOCREm9f1Qog%3D%3D",email : "mailto:rizksara.sp@gmail.com",},
    {name: "FATIME EZ-ZAHRAA HAJARI",role:"Human Resources",description:"Software Engineer Student",image:fati2,linkedin: "https://www.linkedin.com/in/fatima-ez-zahraa-hajari-ab56b52a9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiN5wcbgTRaywM34UViu3ow%3D%3D",email : "mailto:fatimaezzahraahajari1@gmail.com",},
    {name: "MERYEM MOUKTADER",role:"Treasurer",description:"Computer Science/Full-Stack Student",image:meryem,linkedin: "https://www.linkedin.com/in/meryem-mouktader-b80376312/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0eyHdjrLQDCCa7MFxF5%2B%2BQ%3D%3D",email : "mailto:mouktadermeryem@gmail.com",},
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4"> {/*div dyal page kamla*/}
 
 {/* Titre o description*/}
 <div className="text-center mb-12">
   <h1 className="text-5xl font-bold txt-slate-800 mb-3">Our Members</h1>
   <p className="text-slate-500 text-md max-w-lg mx-auto leading-relaxed">
   We are not just a group of developers. We are the architects of the next digital era. Meet the minds behind AI Dev Community.
   </p>
 </div>

 <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">  {/* had div dyal les cards derna liha flex bach ytallignaw f ligne whda b flex o flex-wrap katgol la 3mrat chi ligne doz ster li wrah justify-center at3awen la kano des carte chaytin ybano m centrin */}


   {/*hna affichage b map atakhd kola wahed mn tableau li fih members lfog o atsawb lih card b component memberCard */}
   {teamMembers.map((member) => (
     <MemberCard
       name={member.name}
       role={member.role}
       description={member.description}
       image={member.image}
       linkedin={member.linkedin}
       email={member.email}
     />
   ))}

   {/* card lkhra*/}
   <div className="w-65 bg-cyan-50 border border-slate-200 rounded-2xl px-6 pt-8 pb-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-300 hover:shadow-cyan-200">

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
