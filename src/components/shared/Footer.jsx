import React from 'react';
// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="w-full">
            <div
                className="w-full bg-white flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-5">
                <a href="#" className='text-3xl text-blue-400'>Next <span className='px-3 py-1 bg-blue-400 text-white'>Blog</span></a>

                <p className="text-[0.9rem] text-center sm:text-start text-gray-600">Join the trending topic and latest news with nextBlog.
                </p>

                <div className="flex gap-[15px] text-black">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <CgFacebook />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsTwitter />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsInstagram />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsLinkedin />
                    </a>
                </div>
            </div>

            <div
                className="text-center bg-blue-400 py-2">
                <p className="text-sm text-white">© 2025 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;