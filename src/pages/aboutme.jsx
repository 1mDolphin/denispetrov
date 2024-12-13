import './aboutme.css'


function AboutMePage() {

    const handleContactClick = () => {
        const email = 'denispetrov@gmail.com';
        const subject = 'Contact Request from Portfolio Website';
        const body = 'Hello Denis,\n\nI would like to get in touch with you regarding...';

        // Create mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open default email client
        window.location.href = mailtoLink;
    };



    const handlePageTransition = () => {
        window.startPageTransition('/');
    };



    return (
        <>

            <div className="about-page_pagewrap">
                <div className='about-page-header_div'>
                    <div className='about-page-menu_div'>
                        <button className='animation'><a onClick={handlePageTransition}>Main Menu</a></button>
                    </div>
                    <div className='about-page-contact_div'>
                        <button
                            className='animation'
                            onClick={handleContactClick}
                        >
                            <h3>CONTACT ME</h3>
                        </button>
                    </div>
                </div>
                <div className='about-me-content'>
                    <div className='experience' >
                        <h1> About me and how I work.</h1>
                        <div className='cross-line'></div>
                        <div> My journey into the tech world began with <b>my studies at Kood/Jõhvi</b>, where I honed my skills in <b>software and application development.</b> Through hands-on experience, I've developed expertise in programming languages like <b>JavaScript, Golang, Dart, frameworks such as Flutter, Next.js, React etc.</b></div>
                    </div>
                    <div className='scroll'>
                        <div className='scroll-text'><span>S</span><span>R</span><span>O</span><span>L</span><span>L</span></div>
                        <div className='scroll-line'></div>
                    </div>
                    <div className='experience' >
                        <h1> About development.</h1>
                        <div className='cross-line'></div>
                        <div>I believe that each project is <b>special.</b> I have a strong focus on building <b>intuitive, engaging,</b> and <b>secure user interfaces.</b> From crafting a secure mobile messaging app with biometric authentication to designing a strategic game experience, my projects reflect a commitment to blending <b>creativity</b> with robust <b>technical solutions.</b></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutMePage

