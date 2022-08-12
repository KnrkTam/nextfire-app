
export default function ContactCard({}) {

    return (
        <>
        <div className="card card-info lg:w-1/4 shadow-xl flex items-center flex-col lg:items-start" > 
            <img className="rounded-full mx-auto profile-img" src="profile_pic.jpg" alt="my profile photo"/>
            <h2 className='font-extrabold mt-2 text-white'>Kenrick Tam</h2>
            <h3>Web developer</h3>
            <div className='flex flex-col items-center justify-center lg:items-start sm:text-xs md:text-sm'>
                <p>📍 Toronto, Canada</p>
                <p>📧 kenricktam@gmail.com</p>
                <p>📱 (437) 973 - 8229</p>
            </div>
            
            <div className='flex flex-col items-center lg:items-start'>
                <a><button className="bg-white text-purple-700 contact-btn" onClick={contactMe}>Contact me</button></a>
                <a href="/resume.pdf" download><button className="contact-btn bg-white text-purple-700" >Download Resume</button></a>
                <a href="https://www.linkedin.com/in/kenrick-tam-39625915b/"><button className="contact-btn bg-white text-purple-700" >Linkedin</button></a>
            </div>
        </div>
        </>
    )
    
  }

  function contactMe()
  {
      window.location.href = "mailto:kenricktam@gmail.com";
  }