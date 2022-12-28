import React,{useEffect} from 'react'

/*imports*/
import axios from 'axios'
import openDoor from '../../assets/json/openDoorAnimation.json'
import closeDoor from '../../assets/img/doorClose.svg'
import { useLocation } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';
/*components*/
import Header from '../Header'
import Footer from '../Footer'

const OpenDoor = () =>{
    const location = useLocation()
    const doorNumber = location.state?.doorNumber
    
    useEffect(() => {
        axios.get('http://localhost:9090/api/lockercontroller/door/'+doorNumber+'/open').then(() => {
            
        })
    },[])
    return (
        <div className="container">
            <Header />
            <div className="col-md-10 mx-auto">
            
                    <Player 
                        src={openDoor}
                        loop
                        autoplay/>
        
            </div>
            
            <Footer/>
        
    </div>
    )
}

export default OpenDoor