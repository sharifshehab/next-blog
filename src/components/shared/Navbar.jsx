"use client";
import React from 'react';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

const Navbar = () => {

    const { isAuthenticated, isLoading } = useKindeBrowserClient();
    const { user, getUser } = useKindeBrowserClient();
    const alsoUser = getUser();

    return (
        <nav
            className="bg-white boxShadow">
            <div className='container mx-auto flex items-center justify-between w-full relative py-2 px-5'>
                <a href="#" className='text-blue-400 text-2xl'>Next <span className='bg-blue-400 px-3 py-1 text-white'>Blog</span></a>
                <ul className="items-center gap-[20px] text-[1rem] text-[#424242] flex">
                    <Link href={'/'} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">Home</Link>

                    {isAuthenticated ? (
                        <Link href={'/profile'}>Profile</Link>
                    ): (
                            <LoginLink className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">Profile</LoginLink>
                    )}
                    
                </ul>

                <div className="items-center gap-2 flex">

                    {
                        !user?.email ? <LoginLink className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">Login</LoginLink> : <LogoutLink className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300">Log out</LogoutLink>
                    }
                </div>
            </div>{/* container */}
        </nav>
    );
};

export default Navbar;