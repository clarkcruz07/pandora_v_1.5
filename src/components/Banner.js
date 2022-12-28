import React from 'react'

/*components*/
import { Player } from '@lottiefiles/react-lottie-player';
import qubee from '../assets/img/qubee.png'
import bannerAnimation from '../assets/json/textBannerAnimation.json'
const Banner = () =>{

    return (
           <div className="col-md-12">
                <div className="position-absolute">
                    <img src={qubee} />
                </div>
                <div className="pt-6 position-relative">
                    <Player 
                    src={bannerAnimation}
                    loop
                    autoplay />
                    <div className="position-absolute banner-text big-text text-light">Hassle-free! Scan and book via the QUBE app now!</div>
                </div>
           </div>
    )
}

export default Banner