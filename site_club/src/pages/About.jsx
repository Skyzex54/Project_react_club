import Story from '../assets/Halland.png'
function About() {
  return (<div>
    {/*les nombres du club*/}
    <div className="grid grid-cols-4">
    <div className="  border border-gray-400 basis-sm">
      <div>
      <svg className="w-8 h-8 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
      </svg>
      </div>
      <p  className="text-2xl font-sans  ">500+</p><div className="font-light m font-sans ">
        <br/>active members</div>
      </div>
      
    <div className="  border  border-gray-400 basis-sm">
      <svg className="w-8 h-8 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"/>
</svg>
      <p  className="text-2xl font-sans ">100+</p>
    <div className="font-light m font-sans "><br/>Events Hosted</div>
    </div>
    <div className="  border  border-gray-400 basis-sm">
 <svg className="w-8 h-8 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
</svg>

      <p   className="text-2xl font-sans ">200+</p>
    <div className="font-light m font-sans  "><br/>Projects Built</div>
    </div>
    <div className="  border border-gray-400 basis-sm">
    <svg className='text-cyan-600' width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/><path d='M13 3.048a5 5 0 0 0 .982 8.3c2.018 1.013 2.789-.352 3.881.384.71.478.897 1.44.42 2.149-.501.742-1.283 1.119-1.148 2.336.077.687.499 1.278 1.045 1.783M4 9.28a4.98 4.98 0 0 1 2.806 1.846 4.98 4.98 0 0 1 .992 3.424c-.052.626.356 1.258.881 1.603A2.71 2.71 0 0 1 9 20.44'/>
</svg>
    <p   className="text-2xl font-sans ">15+</p>
    <div className="font-light m font-sans "><br/>Countries
    </div>
    </div>
    </div>
    {/*les objectifs du club*/}
    <section>
    <div className="bg-gray-200 grid grid-cols-2 justify-between">
    <div className="text-left text-cyan-700 text-3xl font-sans font-bold flex-co">
      <div>What Drives Us</div>
      <div className="font-light text-gray-800 text-xl font-sans">
        <br/>The principles that guide everything we do in our community
        <div block><br/>Our mission is to empower developers with AI knowledge and <br/>foster innovation in technology</div>
        </div>
        </div>
    <div className='block translate-x-2'>
    <div className="text-gray-700 font-sans">
      <div className=''>
<svg className="w-8 h-8 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z" clip-rule="evenodd"/>
</svg>

     <div className='font-bold text-cyan-700 text-3xl flex'>Innovation</div>
      <div className="font-light text-gray-800 text-sm font-sans">
      <br/>Encouraging creative thinking and cutting-edge solutions to real-world problems</div>
      </div>
      </div>
    <div><div className='font-bold text-cyan-700 text-3xl font-sans'>
      <svg className="w-8 h-8 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
      </svg>
      Community</div>
    <div className="font-light text-gray-800 text-sm font-sans">
      <br/>Encouraging creative thinking and cutting-edge solutions to real-world problems</div>
      </div>
    <div>
    <svg className="w-8 h-8 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z"/>
  <path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z"/>
</svg>
    <div className='font-bold text-cyan-700 text-3xl font-sans'>Excellence</div>
    <div className="font-light text-gray-800 text-sm font-sans">
      <br/>Striving for quality in everything we do, from events to education</div>
      </div>
      </div>
    </div>
    </section>
    {/*motivations pour joindre le club*/}
    <section>
      <div>
        <p className="text-cyan-700 text-center font-bold text-2xl font-sans" >why joining our club</p>
      </div>
      </section>
      <section>
      <div className=" grid grid-rows-2 grid-cols-3 rounded-xs border-gray-400 border-collapse">
        <div className="  border border-gray-400 basis-sm">
  <svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
</svg>
        <p className="font-sans font-bold">Hands-on Workshops</p>
        <div><br className='-m-1'/>Practical coding sessions with real-world projects and expert guidance</div>
        </div>
        <div className="  border border-gray-400 basis-sm">
          <svg className="w-12 h-12 text-cyan-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
</svg>
          <p className="font-sans font-bold">AI Learning Path</p>
          <div>
            <br className='-m-1'/>Structured curriculum from basics to advanced machine learning concepts
            </div>
        </div>
        <div className="  border border-gray-400 basis-sm">
          <svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.2857 7V5.78571c0-.43393-.3482-.78571-.7778-.78571H6.06345c-.42955 0-.77777.35178-.77777.78571V16m0 0h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1h5m-4-3h4m7.00002-6v3c0 .5523-.4477 1-1 1h-3m8-3v8c0 .5523-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1v-5.397c0-.2536.0963-.4977.2696-.683l2.434-2.603c.189-.2022.4535-.317.7304-.317h3.566c.5523 0 1 .4477 1 1Z"/>
</svg>
          <p className='font-sans font-bold'>Hackathons</p><div> 
            <br/>Competitive coding events to build innovative solutions</div>
            </div>
        <div className="  border border-gray-400 basis-sm">
<svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z"/>
</svg>
          <p className="font-sans font-bold">Global Network</p><div>
            <br/>Connect with developers and companies worldwide</div>
            </div>
        <div className="  border border-gray-400 basis-sm">
  <svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M16 10c0-.55228-.4477-1-1-1h-3v2h3c.5523 0 1-.4477 1-1Z"/>
  <path d="M13 15v-2h2c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3h-2.256c.1658-.46917.256-.97405.256-1.5 0-.51464-.0864-1.0091-.2454-1.46967C12.8331 4.01052 12.9153 4 13 4h7c.5523 0 1 .44772 1 1v9c0 .5523-.4477 1-1 1h-2.5l1.9231 4.6154c.2124.5098-.0287 1.0953-.5385 1.3077-.5098.2124-1.0953-.0287-1.3077-.5385L15.75 16l-1.827 4.3846c-.1825.438-.6403.6776-1.0889.6018.1075-.3089.1659-.6408.1659-.9864v-2.6002L14 15h-1ZM6 5.5C6 4.11929 7.11929 3 8.5 3S11 4.11929 11 5.5 9.88071 8 8.5 8 6 6.88071 6 5.5Z"/>
  <path d="M15 11h-4v9c0 .5523-.4477 1-1 1-.55228 0-1-.4477-1-1v-4H8v4c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6973l-1.16797 1.752c-.30635.4595-.92722.5837-1.38675.2773-.45952-.3063-.5837-.9272-.27735-1.3867l2.99228-4.48843c.09402-.14507.2246-.26423.37869-.34445.11427-.05949.24148-.09755.3763-.10887.03364-.00289.06747-.00408.10134-.00355H15c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1Z"/>
</svg>
          <p className="font-sans font-bold">Mentorship Program</p><div>
          <br/>Learn from experienced professionals in the industry</div>
        </div>
        <div className="  border border-gray-400 basis-sm">
          <svg class="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Zm4.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L9.586 12 7.293 9.707ZM13 14a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" clip-rule="evenodd"/>
</svg>
          <p className="font-sans font-bold">Cutting-edge Tech</p><div>
            <br/>Stay updated with the latest in AI and technology</div>
          </div>
      </div>
      </section>
      
      {/*petit resume de les origines du club*/}
      <div className='bg-gray-100 grid-cols-2 items-center'>
      <div className='block'>
        <h3 className='text-cyan-800 font-bold font-sans text-3xl'>Our Story</h3>
      <p className='text-left block m-5'>Founded in 2020, AI Dev Community began as a small group of ambitious students gathering for weekly study sessions.
      <br/> Driven by a shared passion for artificial intelligence and machine learning, those early meetings quickly evolved. 
      <br/>Today, we are a thriving community of hundreds of members, proudly standing as one of the leading tech hubs in the region.</p>
      <button className='text-cyan-500 translate-1 hover:text-cyan-700'>Learn more about us</button>
      </div>
      <div><img src={Story} alt="story" className='w-105 h-90 rounded-xl'/></div>
      </div>
      </div>
)
}

export default About
