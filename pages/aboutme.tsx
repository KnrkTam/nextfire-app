
import Link from 'next/link';
import ContactCard from '../components/ContactCard';
import Metatags from '../components/Metatags';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StorageIcon from '@mui/icons-material/Storage';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LoopIcon from '@mui/icons-material/Loop';
import SubheadingBar from '../components/SubheadingBar';

export default function AboutMe(props) {
    return (
        <>
          <Metatags title="About Me" description="Contact me for more information"/>
          <main className="card-container lg:flex font-medium">
            <ContactCard />
            {/* Board */}
            <div className='card shadow-xl lg:w-3/4  '>
              <SubheadingBar title="About Me"/>            
              <div className='text-black mt-5 grid lg:grid-cols-2 ml:grid-cols-1 gap-2 lg:gap-4 lg:h-96 overflow-auto' >
                <div className='card-item cursor-default hover:scale-110 hover:bg-purple-500 hover:text-white'>
                  <h3 className='font-bold flex'>
                    Frontend <AutoAwesomeIcon className='h-5 w-5 ml-1'/>
                  </h3><p>I can build efficient and beautiful websites using React and Next.js. I am also a fast learner to new frameworks.</p></div>
                <div className='card-item cursor-default hover:scale-110 hover:bg-purple-500 hover:text-white duration-300'>
                  <h3 className='font-bold flex'>
                    Backend <StorageIcon className='h-5 w-5 ml-1'/>
                    </h3><p>I have experience API building using express.js and MySQL while connecting to Firebase and MongoDB.</p></div>
                <div className='card-item cursor-default hover:scale-110 hover:bg-purple-500 hover:text-white duration-300'>
                  <h3 className='font-bold flex'>
                    UX Design Workflow <AccountTreeIcon className='h-5 w-5 ml-1'/>
                  </h3><p>I am able to deliver a well thought out and easy to understand UX workflow using draw.io</p></div>
                <div className='card-item cursor-default hover:scale-110 hover:bg-purple-500 hover:text-white duration-300'>
                  <h3 className='font-bold flex'>
                    Deployment<LoopIcon className='h-5 w-5 ml-1'/>
                  </h3><p>I have experience deploying personal projects on AWS server or Vercel</p></div>
                <div className='card-item cursor-default hover:scale-110 hover:bg-purple-500 hover:text-white duration-300'>
                  <h3 className='font-bold flex'>
                    Cooking <LocalDiningIcon className='h-5 w-5 ml-1'/>
                  </h3><p>I enjoy cooking a lot! I make Asian and Western cuisines daily</p></div>
                <div className='card-item cursor-default hover:scale-110 hover:bg-purple-500 hover:text-white duration-300'>
                  <h3 className='font-bold flex'>
                    Exercise <SportsSoccerIcon className='h-5 w-5 ml-1'/>
                  </h3><p>I workout a lot for fun and stress relief. I love soccer among all sports and my favourite team is Arsenal FC of London, UK</p></div>
              </div>
       
            </div>
          </main>
        </>
    )
  }
  