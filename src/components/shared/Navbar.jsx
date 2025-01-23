"use client";
import React, { useState } from 'react';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';

const Navbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const { isAuthenticated, isLoading } = useKindeBrowserClient();

    const { user, getUser } = useKindeBrowserClient();
    const alsoUser = getUser();

    return (
        <nav
            className="bg-white boxShadow">
            <div className='container mx-auto flex items-center justify-between w-full relative py-2'>
                <a href="#" className='text-blue-400 text-2xl'>Next Blog</a>
                <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                    <Link href={'/'} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">Home</Link>

                    {isAuthenticated ? (
                        <Link href={'/profile'}>Profile</Link>
                    ): (
                            <LoginLink className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">Profile</LoginLink>
                    )}
                    
                </ul>

                <div className="items-center gap-2 flex">

                    {
                    !user?.email ? <LoginLink className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Sign in</LoginLink> : <LogoutLink className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Log out</LogoutLink>
                    }

                    <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
                </div>

                <aside
                    className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                    <div className="relative mb-5">
                        <input
                            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                            placeholder="Search..." />
                        <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
                    </div>
                    <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">

                        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>

                        <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">Features
                        </li>

                    </ul>{/* mobile menu */}
                </aside>
            </div>{/* container */}

        </nav>
    );
};

export default Navbar;