import React,  { useContext, useState } from 'react';
import { WinnerContext } from '../../Bingo';
import './style.css';

/**
 * Phrase Component for showing the phrase with the text inside it.
 * "Free" block is added and set as active initially
 * Winner Context is used to watch if the game is won.
 */

const Phrase = props => {
    const {
        phraseText,
        showPhrase,
        checkForBingo
    } = props;

    const FREE_BLOCK_TEXT = 'Free';
    
    const phraseTextToShow = showPhrase ? phraseText : FREE_BLOCK_TEXT;
    
    const [isActive, setIsActive] = useState(phraseTextToShow === FREE_BLOCK_TEXT ? true : false);

    const isWinner = useContext(WinnerContext);

    /**
     * Click handler for phrase with the text
     * @param {Object} evt is used for capturing the active phrase and check for bingo 
     */
    const onPhraseClick = evt => {
        if (!isWinner) {
            setIsActive(true);
            checkForBingo(evt.currentTarget.textContent);
        }    
    };

    return (
        <div
            className={`grid-item ${isActive ? 'active' : ''}`}
            onClick={onPhraseClick}
        >{phraseTextToShow}</div>
    );
};

export default Phrase;