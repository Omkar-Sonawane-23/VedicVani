import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Krihnabg from '../pages/krishnabg.png';
import icon from './Icon.svg';

const Chapters = () => {
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);
  const [Data, setData] = useState({
    Title: '',
    translation: '',
    meaning: { en: '', hi: '' },
    summary: { en: '', hi: '' },
  });

  useEffect(() => {
    const rquestHandler = async (chap, verse) => {
      const currentURL = "http://localhost:3001" + window.location.pathname;
      await LoadData(currentURL);
    }

    const LoadData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred while fetching data", error);
      }
    }

    // Load data initially when the component mounts
    rquestHandler(chap, ver);
  }, [chap, ver]);

  const textFormatter = (text) => {
    return { __html: text.replace(/(\r\n|\n|\r)/g, '<br />') };
  }

  return (
    <section>
      <h1 className='text-[2rem]'>|| {Data.name} ||</h1>
      <img className='m-auto pt-10 w-[30rem]' src={Krihnabg} alt="Background" />
      <div className='flex gap-[85rem] absolute'>
        <Link to={`/api/chapter/${chap - 1}`}>
          <img className='w-[10rem] h-[8rem] opacity-[20%] hover:opacity-[50%] duration-[0.3s] cursor-pointer rotate-180' onClick={() => {
            if (chap > 1) {
              setChap(chap - 1);
              setVer(1); // Reset the verse to 1 when changing chapters
            }
          }} src={icon} alt="icon" />
        </Link>
        <Link to={`/api/chapter/${chap + 1}`}>
          <img className='w-[10rem] h-[8rem] opacity-[20%] hover:opacity-[50%] duration-[0.3s] cursor-pointer' onClick={() => {
            if (chap < 18) {
              setChap(chap + 1);
              setVer(1); // Reset the verse to 1 when changing chapters
            }
          }} src={icon} alt="icon" />
        </Link>
      </div>
      {Data && (
        <div className='text-center flex flex-col justify-center items-center'>
          <p className='text-[2rem] text-gray-900 font-bold' dangerouslySetInnerHTML={textFormatter(Data.meaning.hi)}></p>
          <p className='text-[1.25rem] text-gray-900' dangerouslySetInnerHTML={textFormatter(Data.meaning.en)}></p>
          <p className='text-[1.5rem] text-gray-900 w-[70vw]' dangerouslySetInnerHTML={textFormatter(Data.summary.hi)}></p>
          <p className='text-[1.5rem] text-gray-900 w-[70vw]' dangerouslySetInnerHTML={textFormatter(Data.summary.en)}></p>
        </div>
      )}
    </section>
  );
}

export default Chapters;
