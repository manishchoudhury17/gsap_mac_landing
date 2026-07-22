import React, {useEffect, useRef} from 'react'

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])


    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src = "/title.png" alt = "MacBook Title"/>
            </div>


            <video ref = {videoRef} src = "/videos/hero.mp4" autoPlay muted playsInline/>

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    )
}
export default Hero


{/*playsInline*/}

{/*This is mainly for mobile devices.*/}

{/*Without playsInline:*/}

{/*On many phones (especially older iPhones), tapping or autoplaying a video may cause it to open in full-screen mode.*/}

{/*With playsInline:*/}

{/*The video stays inside the webpage, exactly where you placed it.*/}