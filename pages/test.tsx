

export default function test(props) {
    return (
        <>  
          <div className="flex justify-center">
            <h1 className="font-extrabold ">Test</h1>
          </div>
          <div className="w-screen h-1/2 overflow-hidden border-solid border-red-600 bg-yellow-300">
            <div className="hid-box">

            </div>

         </div>

         <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <div aria-details="card" className="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-96 overflow-hidden bg-white shadow-2xl">
            <div aria-details="image" className="relative min-w-xm w-[300px] scale-50 h-full bg-white flex justify-center items-center">
              <img className="h-96 max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5" src="https://img.icons8.com/emoji/344/running-shoe.png" />
            </div>
          <div aria-details="details" className="bg-yellow-200 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Nike Air Max</h1>
            <h4 className="text-sm font-medium mt-2">Product details</h4>
            <p className="text-md font-normal text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat qui aliquid error.</p>
            <ul className="flex justify-around my-4">
              <li className="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">36</li>
              <li className="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">38</li>
              <li className="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">40</li>
              <li className="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">42</li>
              <li className="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">44</li>
            </ul>
            <div className="flex justify-between items-center mt-4">
              <h2 className=""><sup className="text-2xl font-semibold">$</sup><span className="text-4xl font-extrabold">199</span><small className="font-semibold">.99</small></h2>
              <a href="#" className="px-4 py-2 bg-white rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
  }
  