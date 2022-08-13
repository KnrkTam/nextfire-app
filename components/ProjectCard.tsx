
export default function ProjectCard({name, content, img, link}) {

    return (
        <>
          {/* <div className=" flex flex-col grid grid-cols-3 gap-4 items-center p-2 bg-gray-200 rounded-lg sm:flex-row sm:w-full mt-1 mr-1"> */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-200 rounded-lg mt-1 mr-1">
            <div className="flex-initial w-1/3 p-2">
                <img className='m-2 project-img' src={img} alt="test"/>
            </div>
            <div className="md:w-3/5 p-2">
                <h2 className='font-extrabold'>{name}</h2>
                <span>{content}</span>
                <div className='font-bold grid grid-cols-3'>
                    <span className='text-center col-span-1 rounded-lg bg-gray-400 p-2 m-2'>Html</span>
                    <span className='text-center col-span-1 rounded-lg bg-gray-400 p-2 m-2'>CSS</span>
                    <span className='text-center col-span-1 rounded-lg bg-gray-400 p-2 m-2'>JavaScript</span>
                    <a className="text-center col-span-1 rounded-lg bg-green-500 p-2 m-2  text-white hover:bg-green-700 transition ease-in-out hover:-translate-y-1 duration-300 cursor-pointer" href={link} >Project</a>
                </div>
            </div>
          </div>
        </>
    )
    
  }

