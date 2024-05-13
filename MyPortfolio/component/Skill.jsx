import React from 'react'
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax';


const skillImg = [
    {img: './css.png'},
    {img: './html.png'},
    {img: './javascript.png'},
    {img: './reactjs.png'},
    {img: './mongodb.png'},
    {img: './nextjs.png'},
    {img: './java.webp'},
    {img: './php.png'},
]

const certificateImg = [
    {img: './webCertificate.png'},
    {img: './jsCertificate.png'},
    {img: './backendCertificate.png'},

]

const Skill = () => {
  return (
    <div className='w-screen'>
        <ParallaxBanner
        layers={[
            { image: "./skillbg.jpg", speed: -50 },
            {
            speed: 100,
            children: (                
                <div className='absolute  w-full h-full inset-0'>
                    <div className='flex w-full h-full justify-center items-center transparent-bg'>
                        <div className='w-1/2 h-min flex items-center  justify-center flex-wrap gap-12 '>
                        
                        {skillImg.map((skill) =>(
                            <div className="responsive-img flex justify-center items-center relative bg-white border border-white rounded-md p-2">
                            <img src={skill.img}alt="" />
                            </div>
                        ))}
                        
                        
                        

                        
                    </div>
                    <div className='w-1/2 h-full flex flex-col gap-4 justify-center items-center transparent-bg top'>

                        {certificateImg.map((certificate) =>(
                            <Parallax y={[-20, 20]}>
                            <div className='w-full flex items-center justify-center flex-wrap gap-12 p-4'>
                            <img src={certificate.img} width={500} height={100} alt="" />
                            </div>
                            </Parallax>
                        ))}
                        

                        
                        </div>
                    </div>
                    

                    
                
                </div>
            ),
            },
        ]}
        className="bg-container h-[90vh] w-screen" >
        
        </ParallaxBanner>
    </div>
        
   
  )
}

export default Skill