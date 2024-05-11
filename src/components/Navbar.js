import React from 'react'
import logounder from "./LogoUnder.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='shadow-xl h-[5rem] top-0 w-full z-[2] flex justify-center items-center'>
            <div className='container flex justify-between items-center h-full sticky top-0'>
                <div className='logo '>
                    <a href='/' >
                    <img className='backdrop-opacity-5 absolute  w-[15rem] z-10 top-5' alt="logo" src={logounder}></img></a>
                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147]'>VedicVani</h1>
                </div>
                <ul className="flex space-x-8">
                    <li><Link to={"/"} className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Home</Link></li>
                    <li><a href="/" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Resources</a></li>
                    <li><Link to={"/api/aboutus"} className="text-[1.5rem] text-blue-700 hover:text-yellow-500">About Us</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar