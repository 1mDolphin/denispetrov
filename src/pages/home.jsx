import { useEffect, useState } from 'react'
import './home.css'
import { watchViewport, unwatchViewport, getViewportState } from 'tornis'

function HomePage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateValues = ({ mouse }) => {
            if (mouse.changed) {
                setMousePosition({
                    x: Math.round(mouse.x),
                    y: Math.round(mouse.y)
                });
            }
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const scrollLineHeight = Math.min(scrollPercent * 300, 300);

            setScrollProgress(scrollLineHeight);
        }

        watchViewport(updateValues);
        window.addEventListener('scroll', handleScroll);

        return () => {
            unwatchViewport(updateValues);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className='pagewrap'>
                <div className='header_div'>
                    <div className='menu_div'>
                        <button className='animation'><h3>MENU</h3></button>
                    </div>
                    <div className='contact_div'>
                        <button className='animation'><h3>HIRE ME</h3></button>
                    </div>
                </div>

                <div className='page-content'>
                    <div className='greetings_div'>
                        <div className='name'>
                            <h1>Hi, my</h1>
                            <h1>name is <b>Denis</b></h1>
                        </div>
                        <p>I'm a <b>frontend creative developer</b> from</p>
                        <p>Pärnu, Estonia</p>
                    </div>
                    <div className='scroll'>
                        <div className='scroll-text'><span>S</span><span>R</span><span>O</span><span>L</span><span>L</span></div>
                        <div
                            className='scroll-line'
                            style={{ height: `${scrollProgress}px` }}
                        ></div>
                    </div>
                    <div className='about-me'>
                        <h1>Let's work together.</h1>
                        <div className='cross-line'></div>
                        <p>From responsive and user-friendly design systems, single-page apps, even mobile apps.
                            I can help to build ambitious yet accessible projects - <b>the bigger, the better</b></p>
                        <button className='button'>About me</button>
                    </div>
                    <div className='gap'></div>
                    <div className='about-me'>
                        <h1>My Projects</h1>
                        <div className='cross-line'></div>
                        <p>During my educational life, I have done some projects to deeply understand how this or thattechnology works. Here are few projects</p>
                    </div>
                    <div className='projects'>
                        <div className='project-image'></div>
                        <div className='project-info'>
                            <a className='project-name' href='https://github.com/Zewasik/Gachi.js'>Gachi.js</a>
                            <div className='project-descr'>Gachi.js is a lightweight and simple JSX-based framework that allows you to create and manipulate DOM elements. In this documentation, we will explore the features of Gachi.js and provide code examples with explanations to demonstrate how to perform various tasks, such as creating elements, handling events, nesting elements, and adding attributes.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage