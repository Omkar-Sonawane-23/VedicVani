import React, { useState, useEffect, useRef } from 'react';
import bgpic from "./Homebg.png";
import icon from "./Icon.svg";
import "../App.css";
import { Link, useLocation } from 'react-router-dom';
import AudioRead from './AudioRead';

const Homeque = () => {
  // setting speech
  const speech = useRef(new SpeechSynthesisUtterance()).current;
  const voices = window.speechSynthesis.getVoices()
  speech.voice = voices[10]//setting default voice

  const location = useLocation(); // Using useLocation to get the current URL

  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);
  const [loading, setLoading] = useState(true); // New state to track loading state

  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [slok, setSlok] = useState("");
  const [transliteration, setTransliteration] = useState("");
  const [slokHindi, setSlokHindi] = useState("");
  const [slokEnglish, setSlokEnglish] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const urlParts = location.pathname.split("/");
      const newChap = parseInt(urlParts[urlParts.indexOf("chapter") + 1]);
      const newVer = parseInt(urlParts[urlParts.indexOf("shlok") + 1]);

      if (!isNaN(newChap) && !isNaN(newVer)) {
        setChap(newChap);
        setVer(newVer);
        setLoading(true); // Set loading to true when fetching new data
        reqHandler(newChap, newVer);
      }
    };

    fetchData();
  }, [location]);

  const reqHandler = async (chap, ver) => {
    const currentURL =
      "https://vedicvani-backend.onrender.com" + window.location.pathname;
    LoadData(currentURL);
  };

  const LoadData = async (url) => {
    try {
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
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete
    }
  };

  const textFormatter = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  // Function to handle next verse or chapter
  const handleNext = () => {
    if (ver < 47) {
      setVer(ver + 1);
      setLoading(true); // Set loading to true when fetching new data
      reqHandler(chap, ver + 1);
    }else {
        // If all chapters are finished
        alert("All chapters are finished");
      }
  };

  // Function to handle previous verse or chapter
  const handlePrevious = () => {

        <Link to={`/api/chapter/${chap}/shlok/${ver - 1}`}>
          <img className='w-[10rem] h-[8rem] opacity-[20%] hover:opacity-[50%] duration-[0.3s] cursor-pointer rotate-180' onClick={() => {
            if (ver > 2) {
              setVer((ver - 1));
              reqHandler(chap, ver);
            }
          }} src={icon}></img>
        </Link>
        <Link to={`/api/chapter/${chap}/shlok/${ver + 1}`}>
          <img className='w-[10rem] h-[8rem] opacity-[20%] hover:opacity-[50%] duration-[0.3s] cursor-pointer' onClick={() => {
            if (ver < 47) {
              setVer((ver + 1));
              reqHandler(chap, ver);
            }
          }} src={icon}></img>
        </Link>
      </div>
      <div className='text-center'>
        <h1 className='text-[1.5rem] text-gray-900 bold font-Poppins'>
          <AudioRead slok={slok} speech={speech}/>
          {textFormatter(slok)}</h1>
        <p className='text-[1rem] text-gray-900'>
          <AudioRead slok={transliteration} speech={speech}/>
          {textFormatter(transliteration)}</p>
        <p className='text-[1.5rem] text-gray-900'>
          <AudioRead slok={slokHindi} speech={speech}/>
          {textFormatter(slokHindi)}</p>
        <p className='text-[1.3rem] text-gray-900'>
          <AudioRead slok={slokEnglish} speech={speech}/>
          {textFormatter(slokEnglish)}</p>
      </div>
    </div>
  );
};

export default Homeque;
