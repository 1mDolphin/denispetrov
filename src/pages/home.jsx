import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'

function HomePage() {


    const handlePageTransition = () => {
        window.startPageTransition('/about');
    };


    return (
        <>
            <div className='pagewrap'>
                <div className='header_div'>
                    <div className='contact_div'>
                        <button className='animation'><h3>HIRE ME</h3></button>
                    </div>
                </div>

                <div className='page-content'>
                    <div className='greetings_div'>
                        <div className='name'>
                            <h1>Hi, my</h1>
                            <h1>name is <b>Denis.</b></h1>
                        </div>
                        <p>I'm a <b>frontend creative developer</b> from</p>
                        <p>Pärnu, Estonia</p>
                    </div>
                    <div className='scroll'>
                        <div className='scroll-text'><span>S</span><span>R</span><span>O</span><span>L</span><span>L</span></div>
                        <div className='scroll-line'></div>
                    </div>
                    <div className='about-me'>
                        <h1>Let's work together.</h1>
                        <div className='cross-line'></div>
                        <p>From responsive and user-friendly design systems, single-page apps, even mobile apps.
                            I can help to build ambitious yet accessible projects - <b>the bigger, the better</b></p>
                        <a
                            className='button'
                            onClick={handlePageTransition}
                        >
                            About me
                        </a>
                    </div>

                    <div className='about-me'>
                        <h1>My Projects</h1>
                        <div className='cross-line'></div>
                        <p>During my educational life, I have done some projects to deeply understand how this or that technology works. Here are few projects</p>
                    </div>
                    <div className='projects'>
                        <div className='project-info'>
                            <a className='project-name' href='https://github.com/Zewasik/Gachi.js'>Gachi.js</a>
                            <div className='project-descr'>Gachi.js is a lightweight and simple JSX-based framework that allows you to create and manipulate DOM elements. In this documentation, we will explore the features of Gachi.js and provide code examples with explanations to demonstrate how to perform various tasks, such as creating elements, handling events, nesting elements, and adding attributes.</div>
                        </div>
                        <div className='project-info'>
                            <a className='project-name' href='https://github.com/1mDolphin/Bomberman'>Bomberman-dom</a>
                            <div className='project-descr'>Bomberman DOM is an electrifying multiplayer party game crafted entirely on a custom-built web framework, bringing the classic explosive action to a new level of accessibility and excitement. Designed to support up to 4 players simultaneously, this game transforms the traditional Bomberman experience into a seamless, browser-based multiplayer showdown.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage