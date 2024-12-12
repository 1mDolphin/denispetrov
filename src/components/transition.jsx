import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './transition.css'

function PageTransition({ children }) {
    const [transitionState, setTransitionState] = useState('idle');
    const navigate = useNavigate();

    const startPageTransition = (destination) => {
        setTransitionState('sliding-in');


        setTimeout(() => {
            navigate(destination, {
                state: {
                    transitionActive: true
                }
            });
            setTransitionState('sliding-out');
        }, 500);
    };

    const completeTransition = () => {
        if (transitionState === 'sliding-out') {
            setTransitionState('idle');
        }
    };

    window.startPageTransition = startPageTransition;

    return (
        <>
            {transitionState !== 'idle' && (
                <div
                    className={`transition-overlay ${transitionState}`}
                    onAnimationEnd={completeTransition}
                ></div>
            )}
            {children}
        </>
    )
}

export default PageTransition