import React from 'react';
import { Link } from 'react-router-dom';
import logounder from "./LogoUnder.png";

const Navbar = () => {
    return (
        <section className='shadow-xl h-[5rem] top-0 sticky z-[2] bg-gray-100'>
            <div className='container flex w-full justify-between items-center'>
                <div className='logo'>
                    <img className='backdrop-opacity-5 absolute w-[15rem] z-[0] top-5' src={logounder} alt="Logo"></img>
                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147]'>VedicVani</h1>
                </div>
                <ul className="flex space-x-8">
                    <li><Link to={"/"} className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Home</Link></li>
                    <li><a href="#" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Resources</a></li>
                    <li><Link to={"/api/aboutus"} className="text-[1.5rem] text-blue-700 hover:text-yellow-500">About Us</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;
