
import Link from 'next/link';
import ContactCard from '../components/ContactCard';
import Metatags from '../components/Metatags';
import SubheadingBar from '../components/SubheadingBar';

export default function Expereince() {


    return (
        <>
        <Metatags title="About Me" description="Contact me for more information"/>

        <main className="card-container lg:flex font-medium overflow:hidden">
            <ContactCard />

          {/* Board */}
          <div className='card shadow-xl lg:w-3/4'>
          <SubheadingBar title="Experience"/>            
            <div className='bg-gray-200 rounded p-5 mt-5 grid gap-2 lg:h-96 overflow-auto animate-in fade-in duration-1000' >
                <span>
                    <a href="https://onesolution.com.hk/en/"className='font-extrabold'>One Solution Limited · Full-time</a>
                    <br></br>
                    <span className='text-sm'>Jun 2021 - Jun 2022 · 1 yr</span>
                    <ul>
                        <li className='list-disc list-inside'> Web application development from scratch to production (CMS, ERP, E-shop)</li>
                        <li className='list-disc list-inside'> Maintenance, Troubleshoot and enhancement for existing projects</li>
                        <li className='list-disc list-inside'> Attend business meeting with clients for project updates and reviews</li>
                    </ul>
                    Skills: PHP · MySQL · CodeIgniter · Laravel
                </span>  
            </div>
            <div className='bg-gray-200 rounded p-5 mt-5 grid gap-2 lg:h-96 overflow-auto animate-in fade-in duration-1000' >
                <span>
                    <a href="https://onesolution.com.hk/en/"className='font-extrabold'>JDT Consulting Limited · Full-time</a>
                    <br></br>
                    <span className='text-sm'>Dec 2020 - Jun 2021 · 7 months</span>
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
  