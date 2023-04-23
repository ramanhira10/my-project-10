import React,  { useContext, useState } from 'react';
import { WinnerContext } from '../../Bingo';
import './style.css';

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