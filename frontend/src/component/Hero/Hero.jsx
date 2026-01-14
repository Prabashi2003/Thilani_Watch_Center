import React from "react";
import BgImage from "../../assets/bg-image.jpg";
import main from "../../assets/main.png";
import Navbar from "../Navbar/Navbar";
import {motion, scale} from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false); 
  return (
    <main style={bgImage}>
        <section className="min-h-[500px] w-full">
            <div className="container">
                {/*Navbar section*/}
                <Navbar sidebar = {sidebar} setSidebar = {setSidebar}/>
                {/*Hero section*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[699px]">
                  {/* text content section */}
                  <div className="text-lightOrange mt-[100px] md:mt-30 p-4 space-y-28">
                    <motion.h2 
                      initial={{opacity:0, y: -100}}
                      animate={{opacity:1, y: 0}}
                      transition={{
                        type: 'spring', 
                        stiffness: 100,
                        damping: 10,
                        delay: 1,
                      }}
                      className="text-5xl font-bold leading-tight ml-10">
                      Thilani Watch Center
                    </motion.h2>
                    <motion.div 
                      initial={{opacity:0, y: 100}}
                      animate={{opacity:1, y: 0}}
                      transition={{
                        type: 'spring', 
                        stiffness: 100,
                        damping: 10,
                        delay: 1.2,
                      }}
                      className="relative">
                      <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl">
                          Black livestyle lovers
                        </h3>
                        <p className="text-sm opacity-55 leading-loose">
                          Designed for those who live with purpose and style.
                          Our curated collection of watches combines bold design, reliability, 
                          and elegance. Time isn't just measured, it's defined. 
                        </p>
                      </div>
                      <div className="absolute -top-6 -left-8 w-[400px] h-[190px] bg-gray-700/25"></div>
                    </motion.div>
                  </div>
                  {/* hero image section */}
                  <div className="relative">
                    <motion.img
                      initial={{opacity:0, scale: 0}}
                      animate={{opacity:1, scale: 1}}
                      transition={{
                        type: 'spring', 
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                      }}
                    src={main} alt="" className="relative z-40 img-shadow"/>
                    {/* orange circle ring */}
                    {/* <div 
                      initial={{opacity:0, y: 100}}
                      animate={{opacity:1, y: 0}}
                      transition={{
                        type: 'spring', 
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8,
                      }}
                    className="h-[180px] w-[180px] absolute top-20 -right-16 border-primary border-[10px] rounded-full z-10"></div> */}
                    
                    {/* big text section */}
                    <motion.div
                      initial={{opacity:0, y: -100}}
                      animate={{opacity:1, x: 0}}
                      transition={{
                        type: 'spring', 
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8,
                      }}
                      className="absolute -top-0 left-[200px] z-[1]">
                      <p className="text-[120px] scale-150 font-bold text-darkGray/40 leading-none">
                        Classic Lifestyle
                      </p>
                    </motion.div>

                  </div>
                  {/* third div section */}
                  <div className="hidden lg:block">
                    <motion.div
                      initial={{opacity:0, y: 100}}
                        animate={{opacity:1, y: 0}}
                        transition={{
                          type: 'spring', 
                          stiffness: 100,
                          damping: 10,
                          delay: 1.2,
                        }}
                      className="text-lightOrange mt-[100px] md:mt-30 p-4 space-y-28">
                      <h2 className="opacity-0 text-5xl font-bold leading-tight ml-10">
                        Thilani Watch Center
                      </h2>
                      <div className="relative">
                        <div className="relative z-10 space-y-4">
                          <h3 className="text-2xl">
                            Elegance in Every Second
                          </h3>
                          <p className="text-sm opacity-55 leading-loose">
                            Designed with precision and elegance, our watches bring together style, 
                            comfort, and reliability. Perfect for those who value time as much as design
                          </p>
                        </div>
                        <div className="absolute -top-6 -left-8 w-[400px] h-[190px] bg-gray-700/25"></div>
                      </div>
                  </motion.div>
                  </div>
                  
                </div>
            </div>

            {/* sidebar menu section */}
            {
              sidebar && (
                <motion.div
                  initial={{x: "100%"}}
                  whileInView={{ x:0}}
                  className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50">
                  <div className="w-full h-[650px] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-6 text-white">
                      {/* line */}
                      <div className="w-[1px] h-[70px] bg-white"></div>
                      {/* social Icons */}
                      <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                        <FaFacebookF className="text-2xl"/>
                      </div>
                      <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                        <FaTwitter className="text-2xl"/>
                      </div>
                      <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                        <FaInstagram className="text-2xl"/>
                      </div>
                      {/* line */}
                      <div className="w-[1px] h-[70px] bg-white"></div>
                    </div>
                  </div>
                </motion.div>
              )
            }
            
        </section>
    </main>
  );
};

export default Hero;