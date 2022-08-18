
import Metatags from '../components/Metatags';
import Link from 'next/link';
import ContactCard from '../components/ContactCard';
import ProjectCard from '../components/ProjectCard';
import SubheadingBar from '../components/SubheadingBar';

export default function Projects() {
    const projects = [
        {
            name: "This project",
            content: "A demo blog project developed with Next.js framework and Google Firebase database",
            image: "next-fire.png",
            link: 'https://kenricktam.vercel.app',
            tech: ['ReactJS', 'Next.js', 'Google Firestore', 'Vercel', 'Tailwind CSS'],

        }, 
        {
            name: "Game of Life",
            content: "A classic game built with basic html, Javascript and css",
            image: "gameoflife.png",
            link: "https://knrktam.github.io/gameoflife/",
            tech: ['html', 'JS', 'CSS'],
        }, 
        {
            name: "2048",
            content: "A classic game game written by Italian web developer Gabriele Cirulli and published. By slideing and merging tiles with identical numbers to achieve 2048 tile as soon as possible. Players can slides the tile with arrow keys on keyboard.",
            image: "2048.png",
            link: 'https://knrktam.github.io/2048/',
            tech: ['Html','PWA','JS', 'CSS'],

        }, 
        {
          name: "Calculator",
          content: "A calculator app that is mobile responsive.",
          image: "calculator.png",
          link: 'https://knrktam.github.io/calculator/',
          tech: ['React', 'CSS'],

      }, 
        

];


    return (
        <>
          <Metatags title="About Me" description="Contact me for more information"/>
          <main className="card-container lg:flex font-medium">
            <ContactCard />
            {/* Board */}
            <div className='card shadow-xl lg:w-3/4'>
              <SubheadingBar title="Projects"/>            
              <div className='flex text-black mt-5 grid gap-2 lg:gap-4 lg:h-96 overflow-auto' >
                {/* Card */}
                { projects.map((object, key) => <ProjectCard key={key} name={object.name} content={object.content} img={object.image} link={object.link} tech={object.tech} />) }
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
  