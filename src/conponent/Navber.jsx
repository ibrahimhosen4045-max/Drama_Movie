import React from 'react'

export default function Navber() {
    const link = (
        <>
        <li>HOME</li>
        <li>TV SHOW</li>
        <li>MOVIE</li>
        <li>NEW</li>
        </>
    )
  return (
    <>
    <div className="navbar  shadow-sm bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-1000">
        <div className=' w-full sm:w-11/12 lg:w-11/12 mx-auto flex items-center justify-between'>
            <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content  bg-black/40 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow">
                {link}
            </ul>
            </div>
            <div className='flex items-center gap-10'>
                <a className=" text-xl">DRAMATIC</a>
                <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6 ">
            {link}
            </ul>
        </div>
            </div>
        </div>
        
        <div className="navbar-end flex gap-3 md:gap-5 lg:gap-6">
            <label className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within:border-yellow-400 transition duration-300">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
        <input type="search" required placeholder="Search" className=' bg-transparent outline-none text-sm text-white placeholder-white/60 w-24 md:w-40'/>
        </label>
        <div className="avatar">
        <div className="ring-[#facc15] ring-offset-black/40  rounded-full ring-2 ring-offset-2 w-7 md:w-8 lg:w-9">
            <img className='' src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
