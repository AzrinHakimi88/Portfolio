import React, {useState} from 'react'



const Contact = () => {

  
  return (
    <div className='h-[90vh] w-[100vw]  bg-slate-950 flex items-center justify-center p-5'>
        
        <div className='w-full md:w-[80%] flex flex-col md:flex-row justify-center gap-20 items-center'>
            <div>
              <h1 className='text-white resposive-text-md'>Contact Me</h1>
              <p className='text-white text-xl'>for internship</p>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex gap-4 items-center'>
                 <img src="./gmail (2).png" alt="" />
                 <a className='text-white' href="">azrinhakimi08@gmail.com</a>
              </div>
              <div className='flex gap-4  items-center'>
                 <img src="./phone.png" alt="" />
                 <a className='text-white' href="">013-610-7459</a>
              </div>
              <div className='flex gap-4 items-center max-w-[350px]'>
                 <img src="./location.png" width={48} alt="" />
                 <a className='text-white' href="">No.6 Jalan Mawar 5/2 Persiaran Amanjaya 4, Ambangan Heights, 08000 Sungai Petani, Kedah</a>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contact