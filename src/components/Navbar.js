// // Todo: From main Mentor
// import React, { useState } from 'react';
// import logounder from "./LogoUnder.png";
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

//     function handleRedirect() {
//         navigate("/");
//     }

//     return (
//         <section className='bg-orange-500 shadow-xl h-[4rem] top-0 w-full z-[2] fixed flex justify-center items-center'>
//             <div className='container mx-auto flex justify-between items-center h-full px-4 mt-4'>
//                 <a href="/">
//                     <div class=" logo relative">
//                         <img class="backdrop-opacity-1 absolute w-[28rem]  max-w-full top-6 left-1/2 transform -translate-x-1/2" src={logounder} alt="logo" />
//                         <p class="text-2xl font-[Alegreya] text-center">VedicVani</p>
//                     </div>
//                 </a>
//                 <ul className="hidden md:flex space-x-8">
//                     <li>
//                         <Link to="/" className="text-[1rem] text-gray-900 text-decoration-none hover:text-blue-400">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/api/resources" className="text-[1rem] text-gray-900 text-decoration-none hover:text-blue-400">Resources</Link>
//                     </li>
//                     <li>
//                         <Link to="/api/aboutus" className="text-[1rem] text-gray-900 text-decoration-none hover:text-blue-400">About Us</Link>
//                     </li>
//                     <li>
//                         <Link to="/" className=" bg-[#002147]  rounded-lg px-4 py-1  hover:bg-blue-900">
//                             <button className="text-[#F2F3F4] font-[Alegreya] text-[1rem] hover:text-gray-600 ">Contact Us</button>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Contact</Link>
//                     </li>
//                 </ul>
//                 <div className="md:hidden flex items-center">
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700" aria-label="Open Menu">
//                         {menuOpen ? (
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : (
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         )}
//                     </button>
//                 </div>
//             </div>
//             {menuOpen && (
//                 <div className="md:hidden bg-orange-500 w-full absolute top-[5rem] left-0 flex flex-col items-center space-y-4 py-4 shadow-lg z-20">
//                     <Link to="/" className="text-[1.5rem] text-blue-700 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Home</Link>
//                     <Link href="/" className="text-[1.5rem] 00 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Resources</Link>
//                     <Link to="/api/aboutus" className="text-[1.5rem] 00 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>About Us</Link>
//                 </div>
//             )}
//         </section>
//     )
// }

// export default Navbar;

// import React, { useState } from 'react';
// import logounder from "./LogoUnder.png";
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [menuOpen, setMenuOpen] = useState(false);

//     function handleRedirect() {
//         navigate("/");
//     }

//     return (
//         <section className='bg-orange-500 shadow-xl h-[4rem] top-0 w-full z-[2] fixed flex justify-center items-center'>
//             <div className='container mx-auto flex justify-between items-center h-full px-4 mt-4'>
//                 <a href="/">
//                     <div class=" logo relative">
//                         <img class="backdrop-opacity-1 absolute w-[28rem]  max-w-full top-6 left-1/2 transform -translate-x-1/2" src={logounder} alt="logo" />
//                         <p class="text-2xl font-[Alegreya] text-center">VedicVani</p>
//                     </div>
//                 </a>
//                 <ul className="hidden md:flex space-x-8">
//                     <li>
//                         <Link to="/" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">Home</Link>
//                     </li>

//                     <li>
//                         <Link to="/api/resources" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">Resources</Link>
//                     </li>
//                     <li>
//                         <Link to="/api/aboutus" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">About Us</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">Contact Us</Link>
//                     </li>
                    
//                 </ul>
//                 <div className="md:hidden flex items-center">
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700" aria-label="Open Menu">
//                         {menuOpen ? (
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : (
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         )}
//                     </button>
//                 </div>
//             </div>
//             {menuOpen && (
//                 <div className="md:hidden bg-orange-500 w-full absolute top-[5rem] left-0 flex flex-col items-center space-y-4 py-4 shadow-lg z-20">
//                     <Link to="/" className="text-[1.5rem] text-blue-700 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Home</Link>
//                     <Link href="/" className="text-[1.5rem] 00 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Resources</Link>
//                     <Link to="/api/aboutus" className="text-[1.5rem] 00 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>About Us</Link>
//                     <Link to="/contact" className="text-[1.5rem] 00 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Contact Us</Link>
//                 </div>
//             )}
//         </section>
//     )
// }

// export default Navbar;

// Todo: This is the best change occur and ready for push
import React, { useState } from 'react';
import logounder from "./LogoUnder.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    function handleRedirect() {
        navigate("/");
    }

    return (
        <section className='bg-orange-500 shadow-xl h-[4rem] top-0 w-full z-[2] fixed flex justify-center items-center'>
            <div className='container mx-auto flex justify-between items-center h-full px-4 mt-4'>
                <a href="/">
                    <div class=" logo relative">
                        <img class="backdrop-opacity-1 absolute w-[28rem]  max-w-full top-6 left-1/2 transform -translate-x-1/2" src={logounder} alt="logo" />
                        <p class="text-2xl font-[Alegreya] text-center">VedicVani</p>
                    </div>
                </a>
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link to="/" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">Home</Link>
                    </li>

                    <li>
                        <Link to="/api/resources" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">Resources</Link>
                    </li>
                    <li>
                        <Link to="/api/aboutus" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-[1rem] text-gray-900 font-bold text-decoration-none hover:text-blue-400">Contact Us</Link>
                    </li>
                    
                </ul>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white hover:text-yellow-300 transition duration-300" aria-label="Open Menu">
                        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
                            <span className="block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out"></span>
                            <span className="block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out mt-1.5"></span>
                            <span className="block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out mt-1.5"></span>
                        </div>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-orange-500 w-full absolute top-[4rem] left-0 flex flex-col items-center space-y-4 py-4 shadow-lg z-20 transition duration-300 ease-in-out">
                    <Link to="/" className="text-[1.5rem] text-white font-bold hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/api/resources" className="text-[1.5rem] text-white font-bold hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>Resources</Link>
                    <Link to="/api/aboutus" className="text-[1.5rem] text-white font-bold hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" className="text-[1.5rem] text-white font-bold hover:text-yellow-300 transition duration-300" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </div>
            )}
        </section>
    )
}

export default Navbar;