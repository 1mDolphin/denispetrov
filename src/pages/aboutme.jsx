import './aboutme.css'


function AboutMePage() {

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
                        <button className='animation'><h3>HIRE ME</h3></button>
                    </div>
                </div>
                <div className='about-page-page_content'>
                    <div className='about-me'> About me and how I work.</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )

}

export default AboutMePage

