import { Tooltip, Button } from "@nextui-org/react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export default function ContactCard({}) {

    return (
        <>
        <div className="card card-info lg:w-1/4 shadow-xl flex items-center flex-col lg:p-5 lg:pt-10" > 
            <img className="rounded-full mx-auto profile-img" src="profile_pic.jpg" alt="my profile photo"/>
            <h2 className='font-extrabold mt-2 text-white'>Kenrick Tam</h2>
            <h3 className="">Web developer</h3>
            
            <div className='m-2 flex flex-col items-center justify-center lg:items-start sm:text-xs md:text-sm'>
                <p>📍 Toronto, Canada</p>
                <p>📧 kenricktam@gmail.com</p>
                <p>📱 (437) 973 - 8229</p>
            </div>
            <span className="flex gap-2 mb-2 rounded-3xl bg-blue-800 p-3 w-2/5 place-content-around lg:w-full xs: w-full">
                <Link href="https://github.com/knrktam">
                    <a target="_blank">
                        <GitHubIcon className="w-8 h-8 transition-all transform cursor-pointer text-blueGray-400 hover:text-gray-900 hover:bg-white-600 hover:scale-125 duration-600" />
                    </a>
                </Link>  
                <Link href="https://www.linkedin.com/in/kenrick-tam-39625915b/">
                    <a target="_blank">
                        <LinkedInIcon className="w-8 h-8 transition transform cursor-pointer text-blueGray-400 hover:text-blue-600 hover:scale-125 duration-600" />
                    </a>
                </Link>
            
                <a href="" onClick={contactMe}>
                    <EmailIcon className="w-8 h-8 transition transform cursor-pointer text-blueGray-400 hover:text-orange-600 hover:scale-125 duration-600" />

                </a>
                <Link href="https://wa.me/14379738229?text=Hello there!">
                  <a target="_blank">
                    <WhatsAppIcon className="w-8 h-8 transition-all transform cursor-pointer text-blueGray-400 hover:text-green-600 hover:scale-125 duration-600" />
                  </a>
                </Link>
            </span>
            <div className='flex flex-col items-center lg:items-start'>
                <a href="/resume.pdf" download><button className="contact-btn bg-white text-purple-700 transition ease-in-out hover:scale-125" >Download Resume</button></a>
            </div>
        </div>
        </>
    )
    
  }

  function contactMe()
  {
      window.location.href = "mailto:kenricktam@gmail.com";
  }