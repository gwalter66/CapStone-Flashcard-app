import React from "react";
import { useHistory  } from "react-router-dom/cjs/react-router-dom.min";

function StudyCardButtons({ front, setFront, setCount, totalCards, count }) {
    const history = useHistory()

    function handleFlip() {
        setFront(!front)
    }

    function handleNext() {
        if(count + 1 < totalCards) {
            setFront(!front)
            setCount(count +1)
        } else {
            const result = window.confirm("You have reached the end of the deck. Would you like to restart?"
            )
            if (result) {
                setFront(!front)
                setCount(0)
            } else {
                
                history.push('/')
            }
        }
    }

    if (front) {
        return (
            <>
                <button onClick={handleFlip}>Flip</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={handleFlip}>Flip</button>
                <button onClick={handleNext}>Next</button>
            </>
        )
    }
}

export default StudyCardButtons