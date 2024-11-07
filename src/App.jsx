import { useState } from 'react';
import './App.css'
import Background from './Components/Background/Background';

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

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App;