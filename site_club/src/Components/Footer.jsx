const Footer = () => {
  return (
    <>
    <div className='relative bg-linear-to-r from-cyan-950 to-cyan-950 h-30 shadow-md grid grid-row-[auto_0.4hv_auto] '>
      {/* <p className='text-cyan-200 row-start-2 text-center font-bold'></p> */}

    <div className='flex flex-col justify-end ml-30'>
      <div className='flex gap-2'>
           <a 
            href = "https://www.linkedin.com/company/ai-dev-community/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-200/80 hover:text-cyan-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
                <a 
            href = "https://www.instagram.com/aidev_communityfsbm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-200/80 hover:text-cyan-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
            </svg>
          </a>
           <a 
            href = "https://web.facebook.com/profile.php?id=61552792641869&mibextid=qi2Omg&rdid=CZ6GJkaY7mXHyGnP&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FG6KF7b56dSLF2SYh%2F%3Fmibextid%3Dqi2Omg%26_rdc%3D1%26_rdr#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-200/80 hover:text-cyan-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
      </div>
   
    </div>

      <div className='row-start-2 col-span-full flex items-center px-25'>
        <div className='w-full h-px bg-linear-to-r from-cyan-200 to-cyan-950 shadow-md'></div>
      </div>
      <div className='row-start-3 flex'>
        <p className='font-bold text-cyan-200/80 text-left ml-30 mr-auto text-xs  '>© 2026 AI Dev Community</p>
        <p className='font-bold text-cyan-200/80  ml-10 text-xs cursor-pointer hover:text-cyan-800 transition-colors'>Privacy Policy</p>
        <p className='font-bold text-cyan-200/80  ml-10 text-xs cursor-pointer mr-10 hover:text-cyan-800 transition-colors'>Terms of Service</p>
        <div className='flex gap-1  '>
          <svg className="w-5 h-5 text-cyan-200/80" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <p className='font-bold text-cyan-200/80   text-xs mr-50 cursor-pointer hover:text-cyan-800 transition-colors'>contactaidevcommunity@gmail.com</p>
        </div>
      </div>
      
      
    </div>
    </>
    
  )
}

export default Footer
