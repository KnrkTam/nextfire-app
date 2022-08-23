
import Link from "next/link";

export default function SubheadingBar({title}) {
    let main;
    let other = [];
    let subheadings = [
        {
            name:'About Me',
            href:'/aboutme',
            description:"Hello! I am Kenrick, a web developer specialised in JavaScript and ReactJS based in Toronto."
        },
        {
            name:'Projects',
            href:'/projects',
            description:"Here are some demo projects I've been working on"
        },
        {
            name:'Experience',
            href:'/experience',
            description:"Here listed my previous working experiences"
        },
    ];
    subheadings.map((element) => {
        if (element.name === title) {
           main = element;
        } else {
            other.push(element)
        }
    })
 
    return (
        <>
          <div className="flex flex-col mb-2 justify-between lg:flex-row">
            <span className="text-3xl font-extrabold border-b-4 border-black animate-in fade-in duration-1000">{title}</span>
            <div className='flex space-x-5 text-lg'>
                {other.map((object, key) => <Link scroll={false}  href={object.href} key={key}>
                <span  className='cursor-pointer pr-1 transform transition font-bold hover:translate-x-1  hover:text-orange-400 sm:text-sm md:text-lg' >
                    {object.name}
                </span>
                </Link>)}
            </div>
          </div>
          <p className="animate-in slide-in-from-right-4 duration-1000">{main.description}</p>
        </> 
    )    
  }
