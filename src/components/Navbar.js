import React from 'react'
import logounder from "./LogoUnder.png"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  

    const navigate=useNavigate();
    function handleRedirect(){
        navigate("/");
    }
    return (
        <section className='bg-gradient-to-r from-orange-200 to-yellow-200 shadow-xl shadow-yellow-200 h-[5rem]
         top-0 w-full z-[2] fixed flex justify-center items-center'>
            <div className='flex  flex-col sm:flex-row container sticky top-0 flex justify-between items-center h-full top-0'>
                <div className='logo '>
                    <a href='/' >
                    <img className='backdrop-opacity-5 absolute  w-[15rem] z-10 top-5'
                     alt="logo" src={logounder}></img></a>

                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147] z-3'>VedicVani</h1>
                </div>
                <div></div>
                <div className="w-1/3">
             <div className="flex justify-center space-x-2  mr-2 font-[Alegreya]
             items-center flex-col sm:flex-row  text-#56688A-600">
                
                <Link to={"/"} className="text-[1.5rem] relative 
                     hover:text-yellow-500 overflow-hidden
                    border border-solid border-yellow-200  border-2 rounded-[50px] px-2 py-2
                    after:content-['']  after:absolute after:h-[100%]
                    after:w-[100%] after:bg-black  after:left-0 after:bottom-[-100%]  
                    hover:after:bottom-0 hover:after:transition-all  duration-800 ease
                     shadow-lg shadow-green-200 hover:shadow-green-400
                    after:z-[-2]
                     ">
                        Home</Link>
                   <a href="/" className="text-[1.5rem] relative  shadow-lg shadow-green-200
                     hover:text-yellow-500 overflow-hidden hover:shadow-green-400
                    border border-solid  hover:bg-black border-yellow-200 border-2  border-1 rounded-[50px] px-2 py-2
                    after:content-['']  after:absolute after:h-[100%]
                    after:w-[100%] after:bg-black after:left-0 after:bottom-[-100%]
                    hover:after:bottom-0 hover:after:transition-all duration-500 ease after:z-[-2]
                     ">Resources</a>
                <Link to={"/api/aboutus"} className="text-[1.5rem] relative  shadow-lg shadow-green-200 
                     hover:text-yellow-500 hover:bg-black overflow-hidden hover:shadow-green-400
                    border border-solid  border-yellow-200   border-2  rounded-[50px] px-2 py-2
                    after:content-['']  after:absolute after:h-[100%]
                    after:w-[100%] after:bg-black after:left-0 after:bottom-[-100%]
                    hover:after:bottom-0 hover:after:transition-all duration-500 ease after:z-[-2]
                     ">About Us</Link>
                </div>
                </div>
                
            </div>
        </section> 
    )
}

export default Navbar;
