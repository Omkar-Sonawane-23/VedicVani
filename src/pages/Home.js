import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logounder from "../components/LogoUnder.png";
import krishna from './krishnabg.png';

function Home() {
  const [selectedchap, setSelectedchap] = useState(1);
  const [selectedcvers, setSelectedcvers] = useState(1);
  const [verseOptions, setVerseOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(true); // State to control the visibility of the pop-up

  useEffect(() => {
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
  }, [selectedchap]);

  const handleChangechap = (event) => {
    setSelectedchap(event.target.value);
  };

  const handleChangevers = (event) => {
    setSelectedcvers(event.target.value);
  };

  // Function to hide the pop-up
  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <section>
      {showPopup && (
        <div className="popup">
          <h2>Ten Morale-Boosting Quotes About Krishna:</h2>
          <ol>
            <li>"Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma." - Bhagavad Gita 4.7-8</li>
            <li>"Do everything you have to do, but not with greed, not with ego, not with lust, not with envy but with love, compassion, humility, and devotion." - Lord Krishna</li>
            <li>"You have the right to perform your actions, but you are not entitled to the fruits of the actions. Do not let the fruit be the purpose of your actions, and therefore you won't be attached to not doing your duty." - Bhagavad Gita 2.47</li>
            <li>"The mind is restless and difficult to restrain, but it is subdued by practice." - Bhagavad Gita 6.35</li>
            <li>"One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities." - Bhagavad Gita 4.18</li>
            <li>"Surrender to Me completely. I will deliver you from all the sinful reactions. Do not fear." - Bhagavad Gita 18.66</li>
            <li>"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place." - Bhagavad Gita 6.19</li>
            <li>"A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship, and is devoid of false ego — he alone can attain real peace." - Bhagavad Gita 2.71</li>
            <li>"Perform your obligatory duty, because action is indeed better than inaction." - Bhagavad Gita 3.8</li>
            <li>"Those who worship Me with exclusive devotion, meditating on My transcendental form — to them I carry what they lack and preserve what they have." - Bhagavad Gita 9.22</li>
          </ol>
          <button onClick={hidePopup}>Close</button>
        </div>
      )}
      <div className='w-[100vw] h-[100vh] flex justify-center items-center absolute bottom-[13vh]'>
        <img className='opacity-[80%] absolute z-[0] m-auto' src={krishna} alt='krishna' />
      </div>
      <div className='absolute pl-[85vh] pt-[27rem]'>
        <img className='backdrop-opacity-1 absolute w-[25rem] z-[0] top-[30rem]' src={logounder} alt="logo"></img>
        <p className='text-[5rem] font-[Alegreya]'>VedicVani</p>
      </div>
      <div className='flex justify-center items-center w-[40%] m-auto pt-[37rem]'>
        <form className='w-[100%] flex justify-evenly items-evenly gap-10 pr-[3rem]'>
          <select
            className='w-[18rem] h-[3rem] z-[1] rounded-[10px] pl-[40px] text-[20px]'
            name="chap"
            id="chap"
            onChange={handleChangechap}
            value={selectedchap}
          >
          </select>
          <select
            className='w-[18rem] h-[3rem] z-[1] rounded-[10px] pl-[40px] text-[20px]'
            name="verse"
            id="lang"
            onChange={handleChangevers}
            value={selectedcvers}
          >
            {verseOptions}
          </select>
          <Link to={`/api/chapter/${selectedchap}/shlok/${selectedcvers}`}>
            <button className='bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] ml-[3rem] w-[100px] duration-[0.3s] left-[80rem] hover:bg-[#F2F3F4] hover-text-[#002147]'>Go</button>
          </Link>
        </form>
      </div>
      <div className='flex mx-[20vw] my-[5rem] gap-10 w-[100vw]'>
        <Link to={`/api/chapter/1/shlok/1`}>
          <button className='bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[400px] duration-[0.3s] left-[30rem] hover-bg-[#F2F3F4] hover-text-[#002147]'>Read Shlok's</button>
        </Link> 
        <Link to={`/api/chapter/1`}>
          <button className='bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-[2rem] rounded-[1rem] px-[2rem] py-[1rem] top-[50rem] w-[400px] duration-[0.3s] right-[30rem] hover-bg-[#F2F3F4] hover-text-[#002147]'>chapters's summary</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
