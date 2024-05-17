import React, { useState, useEffect } from 'react'; // Import useEffect
import krishna from './krishnabg.png';
import logounder from "../components/LogoUnder.png";
import { Link } from 'react-router-dom';

function Home() {
  const [selectedchap, setSelectedchap] = useState(1);
  const [selectedcvers, setSelectedcvers] = useState(1);
  const [verseOptions, setVerseOptions] = useState([]); // Initialize verseOptions as an empty array

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    async function fetchData() {
      try {
        const req = await fetch(`https://vedicvani-backend.onrender.com/api/chapter/${selectedchap}`);
        const data = await req.json();
        const i = data.verses_count;
        const verseOptions = Array.from({ length: i }, (_, index) => (
          <option key={index} value={index + 1}>Shlok {index + 1}</option>
        ));
        setVerseOptions(verseOptions);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [selectedchap]); // Fetch data when selectedchap changes

  const handleChangechap = (event) => {
    setSelectedchap(event.target.value);
  };

  const handleChangevers = (event) => {
    setSelectedcvers(event.target.value);
  };

  return (
    <section className=''>
      <div className='w-[100vw] overflow-x-hidden h-[100vh] flex justify-center items-center absolute bottom-[13vh]'>
       
        <img className='opacity-[80%] absolute z-[0] mx-auto mt-36' src={krishna} alt='krishna' />
       
      </div>
      <div className='absolute pl-[10vh] mx-auto pt-[28rem] md:pl-[29vh] lg:pl-[85vh] lg:pt-[28rem] justify-center items-center select-none'>
        <img className='backdrop-opacity-1 absolute w-[25rem] z-[0] top-[30rem] select-none' src={logounder} alt="logo"></img>
        <p className='text-[5rem] font-[Alegreya] select-none'>VedicVani</p>
      </div>
      <div className='flex flex-col flex-wrap lg:flex-row w-11/12 gap-y-8 gap-x-2 mx-auto justify-center items-center pt-[37rem]'>
        <form className='w-[100%] flex flex-col flex-wrap md:flex-row mx-auto justify-center items-center gap-10'>
        <div className='mx-auto flex flex-col md:flex-row gap-8 '>
        <select
            className='w-[20rem] bg-gradient-to-t from-[#FF9900] to-[#FF6600] bg-[#FF9900] h-[4rem] z-[1] rounded-[10px] font-semibold pl-[40px] text-[20px]'
            name="chap"
            id="chap"
            onChange={handleChangechap}
            value={selectedchap}
          >
            <option value="1">Chapter 1</option>
            <option value="2">Chapter 2</option>
            <option value="3">Chapter 3</option>
            <option value="4">Chapter 4</option>
            <option value="5">Chapter 5</option>
            <option value="6">Chapter 6</option>
            <option value="7">Chapter 7</option>
            <option value="8">Chapter 8</option>
            <option value="9">Chapter 9</option>
            <option value="10">Chapter 10</option>
            <option value="11">Chapter 11</option>
            <option value="12">Chapter 12</option>
            <option value="13">Chapter 13</option>
            <option value="14">Chapter 14</option>
            <option value="15">Chapter 15</option>
            <option value="16">Chapter 16</option>
            <option value="17">Chapter 17</option>
            <option value="17">Chapter 18</option>

          </select>
          <select
            className='w-[20rem] h-[4rem] font-semibold z-[1] rounded-[10px] pl-[40px] bg-[#FF9900] bg-gradient-to-t from-[#FF9900] to-[#FF6600] text-[20px]'
            name="verse"
            id="lang"
            onChange={handleChangevers}
            value={selectedcvers}
          >
            {verseOptions}
          </select>
          <Link to={`/api/chapter/${selectedchap}/shlok/${selectedcvers}`}>
            <button className='bg-[#002147] text-[#F2F3F4] py-[0.5rem] font-[Alegreya] text-[2rem] rounded-[1rem] w-[20rem] md:w-[250px] duration-[0.3s] left-[80rem] hover:bg-[#F2F3F4] hover:text-[#002147]'>Go</button>
          </Link>
        </div>
       
        
        </form>
      
      </div>
      <div className='flex flex-col flex-wrap md:flex-row my-[5rem] mx-auto gap-10 w-[100vw] items-center justify-center '>
        <Link to={`/api/chapter/${selectedchap}/shlok/${selectedcvers}`}>
          <button className='bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[400px] duration-[0.3s] left-[30rem]  hover:bg-[#F2F3F4] hover:text-[#002147]'>Read Shlok's</button>
        </Link> 
        <Link to={`/api/chapter/${selectedchap}`}>
          <button className='bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[400px] duration-[0.3s] right-[30rem]  hover:bg-[#F2F3F4] hover:text-[#002147]'>chapters's summary</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
