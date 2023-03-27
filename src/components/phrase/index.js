import React,  { useState } from 'react';
import './style.css';

const Phrase = props => {
    const {phraseText, showPhrase, checkForBingo} = props;
    const phraseTextToShow = showPhrase ? phraseText : 'Free';
    const [isActive, setIsActive] = useState(phraseTextToShow === 'Free' ? true : false);

    const onPhraseClick = evt => {
        setIsActive(true);
        checkForBingo(evt.currentTarget.textContent);
    };

    return (
        <div
            className={`grid-item ${isActive ? 'active' : ''}`}
            onClick={onPhraseClick}
        >{phraseTextToShow}</div>
    );
};

export default Phrase;