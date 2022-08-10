
import Metatags from '../components/Metatags';

export default function Home(props) {


    return (
        <>
          <Metatags title="About Me" description="Contact me for more information"/>

          <main className="card-container font-medium">
            <div className="card sm:w-4/12" > 
              <img className="rounded-full mx-auto" src="profile_pic.jpg" alt="my profile photo"/>
              <h2 className='font-extrabold mt-2 text-sky-500'>Kenrick Tam</h2>
                <h3>Web developer</h3>
                <div className='flex flex-col
item-center justify-center'>
                  <p>📍 Toronto, Canada</p>
                  <p>📧 kenricktam@gmail.com</p>
                  <p>📱 (437) 973 - 8229</p>
                </div>
                
                <div className='grid lg:grid-cols-2 ml:grid-cols-1 flex'>
                  <a><button className="btn-purple contact-btn" onClick={contactMe}>Contact me</button></a>
                  <a href="/resume.pdf" download><button className="contact-btn btn-purple">Download Resume</button></a>
                  <a href="https://www.linkedin.com/in/kenrick-tam-39625915b/"><button className="contact-btn btn-purple">Linkedin</button></a>
                </div>
            </div>
            <div className='card card-info'>
              <h1 className="text-3xl font-extrabold">About Me </h1>
              <p>I am a web developer specialised in JavaScript and ReactJS.</p>
            
            
            <div className='text-black mt-5 grid lg:grid-cols-2 ml:grid-cols-1 gap-4 lg:gap-8'>
              <div className='card-item'><h3 className='font-bold flex'>Frontend <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20">
  <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"/>
</svg></h3><p>I can build efficient and beautiful websites using React and Next.js. I am also a fast learner to new frameworks.</p></div>
              <div className='card-item'><h3 className='font-bold flex'>Backend <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20">
  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
  <path d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
</svg></h3><p>I have experience API building using express.js and MySQL while connecting to Firebase and MongoDB.</p></div>
              <div className='card-item'><h3 className='font-bold flex'>UX Design Workflow <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-green" viewBox="0 0 20 20">
  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
</svg></h3><p>I am able to deliver a well thought out and easy to understand UX workflow using draw.io</p></div>
              <div className='card-item'><h3 className='font-bold flex'>Deployment <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20">
  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"/>
</svg></h3><p>I have experience deploying personal projects on AWS server or Vercel</p></div>
              <div className='card-item'><h3 className='font-bold flex'>Cooking <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20">
  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
</svg></h3><p>I enjoy cooking a lot! I make Chinese and Western cuisines daily</p></div>
              <div className='card-item'><h3 className='font-bold flex'>Exercise<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></h3><p>I workout for fun and as a relief. I love soccer among all sports and my favourite team is Arsenal FC of London, UK</p></div>

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
  