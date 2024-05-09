import React from 'react';
import { Link } from 'react-router-dom';
import logounder from "./LogoUnder.png";
import "../App.css";

const Navbar = () => {
    return (
        <section className='navbar shadow-xl h-[5rem] top-0 sticky z-[2] bg-orange'>
            <div className='container flex w-full justify-between items-center'>
                <div className='relative'>
                    <img className='absolute w-[20rem] top-10 ml-3 ' src={logounder} alt="Logo"></img>
                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147] relative z-[10] mt-3'>VedicVani</h1>
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
