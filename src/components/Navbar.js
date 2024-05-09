import React from 'react';
import { Link } from 'react-router-dom';
import logounder from "./LogoUnder.png";
import "../App.css"; // Import the CSS file where the styles are defined

const Navbar = () => {
    return (
        <section className='shadow-xl h-[5rem] top-0 sticky z-[2] bg-orange fixed top-0 left-0 w-full z-50 bg-orange-500 text-white'>
            <div className='container flex w-full justify-between items-center'>
                <div className='relative ml-5 w-[150px]'>
                    <img className='absolute w-[15rem] h-[2.4rem] top-8 ml-10 ' src={logounder} alt="Logo"></img>
                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147] relative z-[10]  mt-2'>VedicVani</h1>
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
