
import Link from 'next/link';
import ContactCard from '../components/ContactCard';
import Metatags from '../components/Metatags';

export default function Home() {


    return (
        <>
        <Metatags title="About Me" description="Contact me for more information"/>

        <main className="card-container lg:flex font-medium">
            <ContactCard />

          {/* Board */}
          <div className='card shadow-xl lg:w-3/4'>
          <div className="flex flex-col mb-2 justify-between lg:flex-row">
              <span className="text-3xl font-extrabold border-b-4 border-black">Experience </span>
              <div className='flex sm:space-x-1 md:space-x-5 sm:text-sm md:text-lg'>
                <Link href={`/aboutme`}>
                  <span className='cursor-pointer pr-1 font-bold hover:text-orange-400' >
                      About Me
                  </span>
                </Link>
                <Link href={`/projects`}>
                  <span className='cursor-pointer font-bold hover:text-orange-400' >
                      Projects
                  </span>
                </Link>
              </div>
            </div>
           
            <p>Here's are my previous work experiences</p>
            <div className='bg-gray-200 rounded p-5 mt-5 grid gap-2 lg:h-96 overflow-auto' >
                <span>
                    <a href="https://onesolution.com.hk/en/"className='font-extrabold'>One Solution Limited · Full-time</a>
                    <br></br>
                    <span className='text-sm'>Dec 2020 - Jun 2022 · 1 yr 7 mos</span>
                    <ul>
                        <li className='list-disc list-inside'> Web application development from scratch to production (CMS, ERP, E-shop)</li>
                        <li className='list-disc list-inside'> Maintenance, Troubleshoot and enhancement for existing projects</li>
                        <li className='list-disc list-inside'> Attend business meeting with clients for project updates and reviews</li>
                    </ul>
                    Skills: PHP · MySQL · CodeIgniter · Laravel
                </span>  
            </div>
     
          </div>
        </main>
      </>
    );
  
  }


  function contactMe()
  {
      window.location.href = "mailto:kenricktam@gmail.com";
  }
  