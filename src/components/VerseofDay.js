import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    const fetchShlok = async () => {
      try {
        const chapter = Math.floor(Math.random() * 18) + 1; // Assuming 18 chapters
        const shlok = Math.floor(Math.random() * 40) + 1; // Generating a random shlok number
        const response = await axios.get(`https://vedicvani-backend.onrender.com/api/chapter/${chapter}/shlok/${shlok}`);
        return response.data.purohit;
      } catch (error) {
        console.error('Error fetching shlok:', error);
        return null;
      }
    };

    const saveShlok = (shlok) => {
      localStorage.setItem('verseOfTheDay', JSON.stringify({
        shlok,
        timestamp: new Date().getTime()
      }));
    };

    const getStoredShlok = () => {
      const stored = localStorage.getItem('verseOfTheDay');
      if (stored) {
        return JSON.parse(stored);
      }
      return null;
    };

    const updateVerseOfTheDay = async () => {
      const shlok = await fetchShlok();
      if (shlok) {
        saveShlok(shlok);
        setVerse(shlok);
      }
    };

    const checkAndUpdateVerse = async () => {
        const storedShlok = getStoredShlok();
        const now = new Date();
        const nextUpdate = new Date(now);
        nextUpdate.setHours(0, 0, 0, 0); // Set to 12:00 AM today
        if (now > nextUpdate) {
          nextUpdate.setDate(nextUpdate.getDate() + 1) // Move to 12:00 AM next day if past 12:00 AM today
        }
  
        if (storedShlok) {
          const storedTimestamp = new Date(storedShlok.timestamp);
          if (now < nextUpdate && now - storedTimestamp < 24 * 60 * 60 * 1000) {
            // If current time is before the next update and less than 24 hours have passed
            setVerse(storedShlok.shlok)
            return;
          }
        }
        await updateVerseOfTheDay()
      };
  
      //Calculating Time Until Next Update
      const now = new Date();
      const nextUpdate = new Date(now);
      nextUpdate.setHours(0, 0, 0, 0); 
      if (now > nextUpdate) {
        nextUpdate.setDate(nextUpdate.getDate() + 1)
      }
      const timeUntilNextUpdate = nextUpdate - now;
  
      // Set a timeout to update the verse at 12:00 AM
      const updateTimeout = setTimeout(() => {
        updateVerseOfTheDay();
        // Set an interval to update the verse every 24 hours after the first update at 12:00 AM
        setInterval(updateVerseOfTheDay, 24 * 60 * 60 * 1000);
      }, timeUntilNextUpdate);
  
      // Initial check and update
      checkAndUpdateVerse();
  
      // Cleanup the timeout on component unmount
      return () => clearTimeout(updateTimeout);
    }, [])

  if (!verse) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 shadow border-3 p-4 my-4">
      <h2>Verse of the Day</h2>
      <p>{verse.et}</p>
    </div>
  );
};

export default VerseOfTheDay
