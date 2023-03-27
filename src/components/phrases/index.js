import React, { useState } from 'react';
import Phrase from "../phrase";
import './style.css';

const Phrases = props => {
    const { phrases } = props;

    const getPhrases = () => {
        const getValidIndexRandomly = () => parseInt(Math.random() * 25, 10);

        const randomPhrasesToSend = [];

        randomPhrasesToSend.push(phrases[getValidIndexRandomly()])

        while(randomPhrasesToSend.length !== 25) {
            let indexToAdd = getValidIndexRandomly();

            if(randomPhrasesToSend.findIndex(phrase => phrase === phrases[indexToAdd]) === -1) {
                randomPhrasesToSend.push(phrases[indexToAdd]);
            }
        }

        return randomPhrasesToSend;
    };

    const phrasesToSend = getPhrases();

    const [isWinner, setIsWinner] = useState(false);

    const winningPatterns = [
        [0, 1, 2, 3, 4], 
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],

        [0, 5, 10, 15, 20], 
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],

        [0, 6, 12, 18, 24], 
        [4, 8, 12, 16, 20]
    ];

    const selectedIndexes = [12];

    const checkForWinner = () => {

        winningPatterns.forEach(winningPattern => {
            let count = 0;
            winningPattern.forEach(idx => {
                const isFound = selectedIndexes.find(_selectedIndex => _selectedIndex === idx);
                if (isFound !== undefined) {
                    count = count + 1;
                }
                if (count > 4) {
                    setIsWinner(true);
                }
            });
        });
    };

    const checkForBingo = txt => {
        const idx = phrasesToSend.findIndex(phrase => phrase === txt);
        selectedIndexes.push(idx);
        if(selectedIndexes.length > 3) {
            checkForWinner();
        }
    };

    return (
        <div>
            {
                isWinner ?
                (
                    <div>Hurray, Announce that you are a winner</div>
                ) :
                (
                    <div className='grid-container'>
                        {
                            phrasesToSend &&
                            phrasesToSend.length > 0 &&
                            phrasesToSend.length < 26 &&
                            phrasesToSend.map((phrase, index) => {
                                const showPhrase = index !== 12 ? true : false;
                                return (
                                    <Phrase
                                        phraseText={phrase}
                                        key={index}
                                        showPhrase={showPhrase}
                                        checkForBingo={checkForBingo}
                                    />
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Phrases;