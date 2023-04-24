import React, {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';

/**
 * 
 * Confetti component for showing confetti when won by Bingo winner 
 */
const Confetti = () => {
    const [windowDimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    /**
     * set the dimensions [width, height] according to size
     */
    const detectSize = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => window.removeEventListener('resize', detectSize);
    }, [windowDimension]);

    return (
        <>
            <ReactConfetti
                width={windowDimension.width}
                height={windowDimension.height}
            />
        </>
    );
};

export default Confetti