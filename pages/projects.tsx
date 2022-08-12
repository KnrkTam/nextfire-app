
import Metatags from '../components/Metatags';
import Link from 'next/link';
import ContactCard from '../components/ContactCard';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
    const projects = [
        {
            name: "Project A",
            content: "Content A",
            image: "test-image.jpeg",
        }, 
        {
            name: "2048",
            content: "A classic game game written by Italian web developer Gabriele Cirulli and published. By slideing and merging tiles with identical numbers to achieve 2048 tile as soon as possible. Players can slides the tile with arrow keys on keyboard.",
            image: "2048.png",
        }, 
        {
            name: "Project C",
            content: "Content C",
            image: "test-image.jpeg",
        }, 
];


    return (
        <>
          <Metatags title="About Me" description="Contact me for more information"/>

          <main className="card-container lg:flex font-medium">
            <ContactCard />

            {/* Board */}
            <div className='card shadow-xl lg:w-3/4'>
            <div className="flex flex-col mb-2 justify-between lg:flex-row">
                <span className="text-3xl font-extrabold border-b-4 border-black">Projects </span>
                <div className='flex space-x-5 text-lg'>
                    <Link href={`/experience`}>
                    <span className='cursor-pointer font-bold hover:text-orange-400' >
                        Experience
                    </span>
                  </Link>
                  <Link href={`/aboutme`}>
                    <span className='cursor-pointer pr-1 font-bold hover:text-orange-400' >
                        About me
                    </span>
                  </Link>
                
                </div>
              </div>
             
              <p>Here are some of the projects I have touched on.</p>
              <div className='flex text-black mt-5 grid gap-2 lg:gap-4 lg:h-96 overflow-auto' >
                {/* Card */}
                { projects.map((object) => <ProjectCard name={object.name} content={object.content} img={object.image} />) }
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
  