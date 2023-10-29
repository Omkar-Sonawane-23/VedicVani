import React from 'react'
import logounder from "./LogoUnder.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='shadow-xl h-[5rem] top-0 sticky z-[2]'>
            <div className='container flex w-[100vw] flex justify-between items-center'>
                <div className='logo m-auto'>
                    <img className='backdrop-opacity-5 absolute w-[15rem] z-[0] top-5' src={logounder}></img>
                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147]'>VedicVani</h1>
                </div>
                <ul class="flex space-x-8">
                    <Link to={"/"}><li><a  className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Home</a></li></Link>
                    <li><a href="#" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Resources</a></li>
                    <li><a href="#" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">About Us</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar