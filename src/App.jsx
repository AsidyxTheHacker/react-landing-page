import { useState } from 'react';
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';

function App() {

  let heroData = [
    {
      text1: "Dive into",
      text2: "your skills"
    },
    {
      text1: "Indulge",
      text2: "your passions"
    },
    {
      text1: "Give in to",
      text2: "your creativity"
    }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  );
};

export default App;