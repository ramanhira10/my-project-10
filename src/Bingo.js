
import React, {createContext, useEffect, useState} from 'react';
import data from './data/phrases.json';
import Phrases from './components/phrases';
import Confetti from './components/confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

/** Winner context is created which has the data as a phrases */
export let WinnerContext = createContext();

/**
 * Bingo Component is used to create the board and interaction for Bingo game
 * phrases can be injected as a data
 * Confetti will be shown once the winner is found
 * Winner context is created to provide the winner related features
 */
const Bingo = () => {
  
  const phrases = data.phrases;
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (isWinner) {
      
      toast.success('Congratulations!! New game gonna start', {
        position: toast.POSITION.TOP_CENTER
      });

      setTimeout(() => {
        setIsWinner(false);
        WinnerContext = createContext();
      }, 5000);
    }
  }, [isWinner]);

  return (
    <WinnerContext.Provider value={isWinner}>
      <div className="container">
        {
          isWinner &&
          <Confetti />
        }
        <h1>Bingo</h1>

        <ToastContainer />
        
        <Phrases
          phrases={phrases}
          setIsWinner={setIsWinner}
        />
      </div>
    </WinnerContext.Provider>
  );
}

export default Bingo;
