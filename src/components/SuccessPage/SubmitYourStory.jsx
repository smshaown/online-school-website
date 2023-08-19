import React from 'react';

const SubmitYourStory = () => {
    return (
        <div className="myContainer  rounded-2xl shadow-lg px-2 mb-20" style={{boxShadow: "0px 3px 34px 0px rgba(0, 0, 0, 0.07)"}}>

        <h2 className='text-2xl md:text-4xl text-[#0E0E0E] font-semibold text-center py-10'>Submit your story</h2>

         <div>
            
            <form className="px:2 md:px-20">
             <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
             <div className="mb-4">
                
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>    
             </div>            
             
              <div className="mb-4 mt-5">               
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Story"
                  rows="4"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>


             <div className='flex justify-center items-center pb-8'>
             <button  className="px-14 py-3 bg-gray-800 text-white shadow-md hover:shadow-lg rounded-[30px]">
                 Submit
              </button>
             </div>
              
            </form>
          </div>
      </div>
    );
};

export default SubmitYourStory;