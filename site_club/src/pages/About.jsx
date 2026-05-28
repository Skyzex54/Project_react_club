import Story from '../assets/Story.jpg'
function About() {
  return (<div>
    {/**/}
    <div className="flex flex-row border rounded border-gray-400 m bg border-collapse">
    <div className="  border border-gray-400 basis-sm">
      <p  className="text-2xl font-sans  ">500+</p><div className="font-light m font-sans ">
        <br/>active members</div>
      </div>
    <div className="  border  border-gray-400 basis-sm"><p  className="text-2xl font-sans ">100+</p>
    <div className="font-light m font-sans "><br/>Events Hosted</div>
    </div>
    <div className="  border  border-gray-400 basis-sm"><p   className="text-2xl font-sans ">200+</p>
    <div className="font-light m font-sans  "><br/>Projects Built</div>
    </div>
    <div className="  border border-gray-400 basis-sm"><p   className="text-2xl font-sans ">15+</p>
    <div className="font-light m font-sans "><br/>Countries
    </div>
    </div>
    </div>
    <div className="bg-[#f4fbfc] m flex">
    <div className="text-left text-emerald-700 text-3xl font-sans font-bold flex-co">
      <div>What Drives Us</div>
      <div className="font-light text-gray-800 text-sm font-sans"
      ><br/>The principles that guide everything we do in our community<div>
        <br/>Our mission is to empower developers with AI knowledge and foster innovation in technology</div>
        </div>
        </div>
    <div className="text-gray-700 font-sans"><div className='font-bold text-emerald-700 text-3xl'>Innovation</div><
      div className="font-light text-gray-800 text-sm font-sans">
      <br/>Encouraging creative thinking and cutting-edge solutions to real-world problems</div>
      </div>
    <div><div className='font-bold text-emerald-700 text-3xl font-sans'>Community</div>
    <div className="font-light text-gray-800 text-sm font-sans">
      <br/>Encouraging creative thinking and cutting-edge solutions to real-world problems</div>
      </div>
    <div><div className='font-bold text-emerald-700 text-3xl font-sans'>Excellence</div>
    <div className="font-light text-gray-800 text-sm font-sans">
      <br/>Striving for quality in everything we do, from events to education</div>
      </div>
    </div>
    <section>
      <div>
        <p className="text-emerald-700 text-center font-bold text-2xl font-sans" >why joining our club</p>
      </div>
      </section>
      <section>
      <div className=" flex flex-row rounded-xs border-gray-400 m bg border-collapse">
        <div className="  border border-gray-400 basis-sm">
        <p className="font-sans">Hands-on Workshops</p>
        <div><br/>Practical coding sessions with real-world projects and expert guidance</div>
        </div>
        <div className="  border border-gray-400 basis-sm">
          <p className="font-sans">AI Learning Path</p>
          <div>
            <br/>Structured curriculum from basics to advanced machine learning concepts
            </div>
        </div>
        <div className="  border border-gray-400 basis-sm">
          <p className="font-sans">Hackathons</p><div> 
            <br/>Competitive coding events to build innovative solutions</div>
            </div>
        <div className="  border border-gray-400 basis-sm">
          <p className="font-sans"></p>Global Network<div>
            <br/>Connect with developers and companies worldwide</div>
            </div>
        <div className="  border border-gray-400 basis-sm">
          <p className="font-sans"></p>Mentorship Program<div>
          <br/>Learn from experienced professionals in the industry</div>
        </div>
        <div className="  border border-gray-400 basis-sm">
          <p className="font-sans"></p>Cutting-edge Tech<div>
            <br/>Stay updated with the latest in AI and technology</div>
          </div>
      </div>
      </section>
      <div className='bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
      <div className='block'>
        <h3 className='text-green-500 font-bold font-sans text-3xl'>Our Story</h3>
      <p className='text-left block m-5'>Founded in 2020, AI Dev Community began as a small group of ambitious students gathering for weekly study sessions.
      <br/> Driven by a shared passion for artificial intelligence and machine learning, those early meetings quickly evolved. 
      <br/>Today, we are a thriving community of hundreds of members, proudly standing as one of the leading tech hubs in the region.</p>
      <button className='text-green-500 translate-1 hover:text-green-700'>Learn more about us</button>
      </div>
      <div><img src={Story} alt="story" className='translate-x-1/2 w-105 h-90 rounded-xl'/></div>
      </div>
      </div>
)
}

export default About
