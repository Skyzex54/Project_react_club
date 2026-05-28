import Story from '../assets/Story.jpg'
function About() {
  return (<div>
    {/**/}
    <div className="flex flex-row border rounded border-gray-400 m bg border-collapse">
    <div className="  border border-gray-400 basis-sm"><p  className="text-2xl font-sans  ">500+</p><div className="font-light m font-sans "><br/>active members</div></div>
    <div className="  border  border-gray-400 basis-sm"><p  className="text-2xl font-sans ">100+</p><div className="font-light m font-sans "><br/>Events Hosted</div></div>
    <div className="  border  border-gray-400 basis-sm"><p   className="text-2xl font-sans ">200+</p><div className="font-light m font-sans  "><br/>Projects Built</div></div>
    <div className="  border border-gray-400 basis-sm"><p   className="text-2xl font-sans ">15+</p><div className="font-light m font-sans "><br/>Countries</div></div>
    </div>
    <div className="bg-gray-300 m flex">
    <div className="text-left text-green-500 text-3xl font-arial flex-co">What Drives Us<div className="font-light text-gray-800 text-sm font-sans"><br/>The principles that guide everything we do in our community<div><br/>Our mission is to empower developers with AI knowledge and foster innovation in technology</div></div></div>
    <div className="text-gray-700 font-sans">Innovation<div><br/>Encouraging creative thinking and cutting-edge solutions to real-world problems</div></div>
    <div>Community<div><br/>Encouraging creative thinking and cutting-edge solutions to real-world problems</div></div>
    <div>Excellence<div><br/>Striving for quality in everything we do, from events to education</div></div>
    </div>
    <div>
      <div>
        <p className="text-emerald-700 text-center font-bold text-2xl font-sans" >why joining our club</p>
      </div>
      <div className=" flex flex-row rounded-xs border-gray-400 m bg border-collapse">
        <div className="  border border-gray-400 basis-sm"><p className="font-sans">Hands-on Workshops</p><div><br/>Practical coding sessions with real-world projects and expert guidance</div></div>
        <div className="  border border-gray-400 basis-sm"><p className="font-sans">AI Learning Path</p><div><br/>Structured curriculum from basics to advanced machine learning concepts</div></div>
        <div className="  border border-gray-400 basis-sm"><p className="font-sans">Hackathons</p><div> <br/>Competitive coding events to build innovative solutions</div></div>
        <div className="  border border-gray-400 basis-sm"><p className="font-sans"></p>Global Network<div><br/>Connect with developers and companies worldwide</div></div>
        <div className="  border border-gray-400 basis-sm"><p className="font-sans"></p>Mentorship Program<div><br/>Learn from experienced professionals in the industry</div></div>
        <div className="  border border-gray-400 basis-sm"><p className="font-sans"></p>Cutting-edge Tech<div><br/>Stay updated with the latest in AI and technology</div></div>
      </div>
      <div className="text-emerald-700 inline-0 ">Our Story</div>
      <div className='justify-items-end inline'>
      <div className='text-left justify-start grid'><p>w db rj3at l2amyah ila jawariha<br/>w lila liya ya layla w kachani ya wissal w ya kachani ya wissal</p></div>
      <div className=""><img src={Story} alt="story" className='w-140 h-100 justify-items-end rounded-2xl'/></div>
      </div>
      </div>
      </div>
)
}

export default About
