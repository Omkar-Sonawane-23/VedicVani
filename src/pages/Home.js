import React, { useState, useEffect } from "react"; // Import useEffect
import krishna from "./krishnabg.png";
import logounder from "../components/LogoUnder.png";
import { Link } from "react-router-dom";

function Home() {
  const [selectedchap, setSelectedchap] = useState(1);
  const [selectedcvers, setSelectedcvers] = useState(1);
  const [verseOptions, setVerseOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(
          `https://vedicvani-backend.onrender.com/api/chapter/${selectedchap}`
        );
        const data = await req.json();

        const i = data.verses_count;
        const verseOptions = Array.from({ length: i }, (_, index) => (
          <option key={index} value={index + 1}>
            Shlok {index + 1}
          </option>
        ));
        setVerseOptions(verseOptions);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [selectedchap]);

  const handleChangechap = (event) => {
    setSelectedchap(event.target.value);
  };

  const handleChangevers = (event) => {
    setSelectedcvers(event.target.value);
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen overflow-y-auto ">
      <div className="w-[100vw] h-[100vh] flex justify-center items-center absolute bottom-[13vh]">
        <img
          className="opacity-[80%] absolute z-[0] m-auto"
          src={krishna}
          alt="krishna"
        />
      </div>
      <div className=" top-0 left-0 right-0 text-center z-10 flex flex-col items-center ">
        <img
          className="backdrop-opacity-1 absolute w-[25rem] z-[0] top-[20rem]"
          src={logounder}
          alt="logo"
        ></img>
        <p className="text-[5rem] font-[Alegreya] absolute z-0 ">VedicVani</p>
      </div>
      <div className="flex flex-col items-center justify-center z-10 pt-[15rem]">
        <div className="flex justify-center items-center gap-4">

          <select
            className="w-[18rem] h-[3rem] z-[1] rounded-[10px] pl-[40px] text-[20px]"
            name="chap"
            id="chap"
            onChange={handleChangechap}
            value={selectedchap}
          >
            {Array.from({ length: 18 }, (_, index) => (
              <option key={index} value={index + 1}>
                Chapter {index + 1}
              </option>
            ))}
          </select>
          <select
            className=" w-[18rem] h-[3rem] z-[1] rounded-[10px] pl-[40px] text-[20px]"
            name="verse"
            id="lang"
            onChange={handleChangevers}
            value={selectedcvers}
          >
            {verseOptions}
          </select>
          <Link
            to={`/api/chapter/${selectedchap}/shlok/${selectedcvers}`}
            className="bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] text-center rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[100px] h-[70px] duration-[0.3s] left-[30rem] hover-bg-[#F2F3F4] hover-text-[#002147]"
          >
            Go
          </Link>
        </div>
        <div className="flex gap-10 pt-10">
          <Link
            to={`/api/chapter/${selectedchap}/shlok/${selectedcvers}`}
            className="bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[400px] duration-[0.3s] left-[30rem] hover-bg-[#F2F3F4] hover-text-[#002147]"
          >
            Read Shlok's
          </Link>
          <Link
            to={`/api/chapter/${selectedchap}`}
            className="bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[400px] duration-[0.3s] left-[30rem] hover-bg-[#F2F3F4] hover-text-[#002147]"
          >
            Chapter's Summary
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
