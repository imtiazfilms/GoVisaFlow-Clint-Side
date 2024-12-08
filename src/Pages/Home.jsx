import { useState, useEffect } from 'react';
import LatestVisas from '../Components/LatestVisas';
import ExtraSection1 from '../Components/ExtraSection1';
import ExtraSection2 from '../Components/ExtraSection2';
import Banner from '../Components/Banner';
import { MdOutlineWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 bg-white/80 text-black/80 rounded-full shadow-md focus:outline-none"
      >
        {isDarkMode ? <MdOutlineWbSunny /> : <FaMoon />}
      </button>

      <Banner />
      <LatestVisas />
      <ExtraSection1 />
      <ExtraSection2 />
    </div>
  );
};

export default Home;
