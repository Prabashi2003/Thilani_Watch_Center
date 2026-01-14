import React from 'react'
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTwitter
} from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import CreditCards from '../../assets/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* company details */}
                    <motion.div 
                        initial={{opacity: 0, y:100}}
                        whileInView={{ y:0, opacity:1}}
                        viewport={{once:true, amount:0.5}}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }}

                        className='space-y-6'>
                        <h1 className='text-3xl font-bold uppercase'>
                            Thilani Watch Center
                        </h1>
                        <p className='text-sm max-w-[300px]'>
                            Your trusted destination for premium watches that blend timeless elegance with modern design. Discover our curated collection and find the perfect timepiece to elevate your style.
                        </p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone />
                                +94 78 890 7569 / +94 78 939 6600
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                {" "}
                                <FaMapLocation />
                                New Gall Road, Moratuwa, Sri Lanka
                            </p>
                        </div>
                    </motion.div>

                    {/* footer links */}
                    <motion.div 
                        initial={{opacity: 0, y:100}}
                        whileInView={{ y:0, opacity:1}}
                        viewport={{once:true, amount:0.5}}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }}>
                        <div className='space-y-6'>
                            <h1 className='text-3xl font-bold'>Quick access</h1>
                            <div className='grid grid-cols-2 gap-3'>
                                {/* first column section */}
                                <div>
                                    <ul className='space-y-2'>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Products</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                {/* second column section */}
                                <div>
                                    <ul className='space-y-2'>
                                        <li>Blog</li>
                                        <li>FAQs</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* social links */}
                    <motion.div 
                        initial={{opacity: 0, y:100}}
                        whileInView={{ y:0, opacity:1}}
                        viewport={{once:true, amount:0.5}}
                        transition={{
                            delay: 0.6,
                            duration: 0.6,
                        }}
                        className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                            <FaInstagram className='ml-4 text-3xl hover:scale-105 duration-300' />
                            <FaGoogle className='ml-4 text-3xl hover:scale-105 duration-300' />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
                            <img src={CreditCards} alt="credit-cards" className='w-[80%]' />
                        </div>
                    </motion.div>
                </div>

                {/* copyright section */}
                <p className='text-white text-center mt-8 pt-8 border-t-2'>
                    Copyright and copy; 2024 Thilani Watch Center. All rights reserved.
                </p>

            </div>
        </div>
    )
}

export default Footer