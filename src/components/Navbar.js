

import React, { useState } from 'react'

import logounder from "./LogoUnder.png"
import { Link } from 'react-router-dom'

import {motion, stagger} from "framer-motion"
const links=[
    {url:"/",title:"Home"},    
    {url:"#",title:"Resources"},// -->   /api/resources
    {url:"/api/aboutus",title:"About"},

];
const Navbar = () => {
    const [open,setOpen] = useState(false);
    // ye humburger menu ko X ka css h[[using framer-motion]]
    const topVariants={
        closed:{
            rotate:0,
            backgroundColor:"rgb(0,153,8)"
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(0,153,8)"
    
        },
    
    }
    
    const centerVariants={
        closed:{
            rotate:0,
            opacity:1,
            backgroundColor:"rgb(227,229,2)"
        },
        opened:{
            opacity:0,
    
        },
    
    }
    const bottomVariants={
        closed:{
            rotate:0,
            backgroundColor:"rgb(25,25,71)"
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(25,25,71)"
    
        },
    
    }
    const listVariants={
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.15,//this is for each item delay acc. to parent delay
            },
        }
    }
    const listItemVariants={
    closed:{
        x:-10,
        opacity:0,
    },
    opened:{
        x:0,
       opacity:1,
    },
    
    
    }
    

    return (
        <section className='shadow-xl bg-gradient-to-t from-[#FF9900] to-[#FF6600] w-full h-[5rem] p-6 gap-6 top-0 fixed z-[2] flex justify-around items-center'>
            <div className='container flex w-[100vw] flex justify-evenly md:justify-center items-center'>
                <div className='logo m-auto '>
                <Link to='/'>
                <img className='backdrop-opacity-5 absolute w-[15rem] z-[0] top-5 select-none' alt='' src={logounder}></img>
                </Link>
                  
                    <h1 className='font-[Alegreya] text-[2.5rem] text-[#002147]'>VedicVani</h1>
                </div>

                {/* <ul class="flex space-x-8 m-auto">
                    <Link to={"/"}><li><a className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Home</a></li></Link>
                    <li><a href="/api/resources" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">Resources</a></li>
                    <Link to={"/api/aboutus"}><li><a href="#" className="text-[1.5rem] text-blue-700 hover:text-yellow-500">About Us</a></li></Link>
                </ul> */}

                <div className='hidden md:flex space-x-8 m-auto gap-4 w-1/3 '>
    {
        links.map((link)=>(
            <Link 
          
            
            to={link.url}>
            <p
            className='hover:bg-[#ffad31] hover:rounded-md w-fit p-2
            font-semibold text-lg text-[#142952]

            '
            >{link.title}</p></Link>
    ))
    }
    </div>

{/* <a className="text-[1.5rem] text-blue-700 hover:text-yellow-500">  </a> */}


    {/* RESPONSIVE MENU */}
    <div className='md:hidden'>

    
    {/* MENU BUTTON */}
    <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
    onClick={(()=>setOpen(prev=>!prev))}
    >
<motion.div variants={topVariants}
animate={open?"opened" : "closed"}
 className='w-10 h-1 bg-black rounded origin-left' ></motion.div>
<motion.div variants={centerVariants}
animate={open?"opened" : "closed"}
 className='w-10 h-1 bg-black rounded' ></motion.div>
<motion.div variants={bottomVariants}
animate={open?"opened" : "closed"}
 className='w-10 h-1 bg-black rounded origin-left' ></motion.div>
    </button>
{/* MENU LIST */}

{
   open && (<motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 z-40 w-screen h-screen bg-gradient-to-t from-[#FF9900] to-[#FF6600]  text-yellow-50 flex flex-col items-center justify-center gap-8 text-4xl '>
{
    links.map((link)=>(
        <motion.div variants={listItemVariants} key={link.title} className=''>
        <Link to={link.url} key={link.title}>{link.title}</Link>
        </motion.div>
    ))
}

</motion.div>)}

    </div>


                
            </div>
        </section>
    )
}

export default Navbar