import React from 'react'
import logounder from "./LogoUnder.png"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
    function handleRedirect(){
        navigate("/");
    }
    return (
        <section className='bg-white shadow-xl h-[5rem] top-0 w-full z-[2] fixed flex justify-center items-center'>
            <div className='container flex justify-between items-center h-full top-0'>
                <div className='logo '>
                    <a href='/' >
                    <img className='backdrop-opacity-5 absolute  w-[15rem] z-10 top-5' alt="logo" src={logounder}></img></a>

                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147]'>VedicVani</h1>
                </div>
                <ul className="flex space-x-8">
    <li>
        <Link to="/" className="text-[1.5rem] text-black py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-[#002147] hover:text-white hover:scale-105">Home</Link>
    </li>
    <li>
        <a href="/" className="text-[1.5rem] text-black py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-[#002147] hover:text-white hover:scale-105">Resources</a>
    </li>
    <li>
        <Link to="/api/aboutus" className="text-[1.5rem] text-black py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-[#002147] hover:text-white hover:scale-105">About Us</Link>
    </li>
</ul>

            </div>
        </section> 
    )
}

export default Navbar;
