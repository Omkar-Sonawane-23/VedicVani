import React, { useState, useEffect } from 'react';
import bgpic from "./Homebg.png";
import icon from "./Icon.svg";
import "../App.css";
import { Link, useLocation } from 'react-router-dom';

const Homeque = () => {
  const location = useLocation();
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);

  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [slok, setSlok] = useState("");
  const [transliteration, setTransliteration] = useState("");
  const [slokHindi, setSlokHindi] = useState("");
  const [slokEnglish, setSlokEnglish] = useState("");

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newChap = parseInt(urlParts[urlParts.indexOf('chapter') + 1]);
    const newVer = parseInt(urlParts[urlParts.indexOf('shlok') + 1]);

    if (!isNaN(newChap) && !isNaN(newVer)) {
      setChap(newChap);
      setVer(newVer);
      reqHandler(newChap, newVer);
    }
  }, [location]);

  const reqHandler = async (chap, ver) => {
    const currentURL = "https://vedicvani-backend.onrender.com/" + window.location.pathname;
    LoadData(currentURL);
  }

  const LoadData = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setChapter(data.chapter);
      setVerse(data.verse);
      setSlok(data.slok);
      setTransliteration(data.transliteration);
      setSlokHindi(data.tej.ht);
      setSlokEnglish(data.siva.et);
    } else {
      console.error("Failed to fetch data");
    }
  };

  const textFormatter = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  }

  return (
    <div className='flex flex-col justify-center items-center pt-8 z-1 p-4'>
      <h1 className='text-2xl font-bold text-center mb-8'>|| श्रीमद्भगवद्गीता {chapter + "." + verse} ||</h1>
      <img className='w-full max-w-xl mx-auto mb-8' src={bgpic} alt="Background" />
      <div className='flex justify-between items-center w-full max-w-xl mb-8 px-4'>
        <Link to={`/api/chapter/${chap}/shlok/${ver - 1}`} className='transform rotate-180'>
          <img className='w-10 h-8 opacity-20 hover:opacity-50 duration-300 cursor-pointer' onClick={() => {
            if (ver > 1) {
              setVer(ver - 1);
              reqHandler(chap, ver - 1);
            }
          }} src={icon} alt="Previous" />
        </Link>
        <Link to={`/api/chapter/${chap}/shlok/${ver + 1}`}>
          <img className='w-10 h-8 opacity-20 hover:opacity-50 duration-300 cursor-pointer' onClick={() => {
            if (ver < 47) {
              setVer(ver + 1);
              reqHandler(chap, ver + 1);
            }
          }} src={icon} alt="Next" />
        </Link>
      </div>
      <div className='text-center w-full max-w-xl mx-auto'>
        <h1 className='text-xl text-gray-900 font-semibold mb-4'>{textFormatter(slok)}</h1>
        <p className='text-lg text-gray-900 mb-4'>{textFormatter(transliteration)}</p>
        <p className='text-xl text-gray-900 mb-4'>{textFormatter(slokHindi)}</p>
        <p className='text-lg text-gray-900'>{textFormatter(slokEnglish)}</p>
      </div>
    </div>
  )
}

export default Homeque;
