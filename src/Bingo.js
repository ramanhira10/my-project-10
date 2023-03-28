
import React, {useState} from 'react';
import data from './data/phrases.json';
import Phrases from './components/phrases';
import Confetti from './components/confetti';
import './style.css';

const App = () => {
  
  const phrases = data.phrases;
  const [isWinner, setIsWinner] = useState(false);

  return (
    <div className="container">
      {
        isWinner &&
        <Confetti />
      }
      <h1>Bingo</h1>
      
      <Phrases
        phrases={phrases}
        setIsWinner={setIsWinner}
      />
    </div>
  );
}

export default App;
