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
                <button 
                    onClick={handleFlip}
                    className="btn btn-secondary"
                >
                    Flip
                </button>
            </>
        )
    } else {
        return (
            <>
                <button 
                    onClick={handleFlip}
                    className="btn btn-secondary mx-1"
                >
                    Flip
                </button>

                <button 
                    onClick={handleNext}
                    className="btn btn-primary"
                >
                    Next
                </button>
            </>
        )
    }
}

export default StudyCardButtons