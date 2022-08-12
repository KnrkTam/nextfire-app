
export default function ProjectCard({name, content, img, link}) {

    return (
        <>
          <div className="col-span-12 flex flex-col items-center p-2 bg-gray-200 rounded-lg sm:flex-row sm:w-full lg:col-span-4 mt-1 mr-1">
                    <img className='mr-2 project-img' src={img} alt="test"/>
                    <div className="p-2">
                        <h2 className='font-extrabold'>{name}</h2>
                        <span>{content}</span>
                        <div className='flex font-bold sm:flex-row'>
                            <span className='rounded-lg bg-gray-400 p-2 m-2'>Html</span>
                            <span className='rounded-lg bg-gray-400 p-2 m-2'>CSS</span>
                            <span className='rounded-lg bg-gray-400 p-2 m-2'>JavaScript</span>
                            <a className="rounded-lg bg-green-500 p-2 m-2  text-white hover:bg-green-700 transition ease-in-out hover:-translate-y-1 duration-300 cursor-pointer" href={link} >Project</a>

                        </div>
                    </div>
                </div>
        </>
    )
    
  }

