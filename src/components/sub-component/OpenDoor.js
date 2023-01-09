import React,{useEffect, useState} from 'react'

/*imports*/
import axios from 'axios'
import openDoor from '../../assets/json/openDoorAnimation.json'
import closeDoor from '../../assets/img/doorClose.svg'
import chevron from '../../assets/img/chevron_left.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';
/*components*/
import Header from '../Header'

const OpenDoor = () =>{
    const location = useLocation()
    const doorNumber = location.state?.doorNumber
    const qpin = location.state?.qpin
    const curr = location.state?.currentPage
    const [doorIMG, setDoorIMG] = useState('')
    const navigate = useNavigate()
    function reopenDoor() {
        axios.get('http://localhost:9090/api/lockercontroller/door/'+doorNumber+'/open').then(() => {
            
        })
    }
    function fetchDoorStatus () {
        axios.get('http://localhost:9090/api/lockercontroller/door/'+doorNumber+'/status').then((res) => {
            console.log(res.data.data.doorStatus)
            if(res.data.data.doorStatus == 'open'){
                setDoorIMG('open')
            }
            else if(res.data.data.doorStatus == 'close'){
                setDoorIMG('close')
            }
            
        })
    }

    function goHome () {
        localStorage.removeItem('number')
        localStorage.removeItem('serviceType')
        navigate('/')
        axios.get('https://pandorav2-0-vlak.onrender.com/api/get/trans/'+ qpin).then((res)=> {
           if(curr == 'drop'){
            axios.patch('https://pandorav2-0-vlak.onrender.com/api/update/'+res.data[0].qpin, {
                "moduleData": res.data[0].moduleData,
                "transStatus": Number(res.data[0].transStatus) +1
            }).then((res) => {
                console.log('updated')
            })
            .catch((err) => {
                
            })
           }

        })
        
    }
    useEffect(() => {
        axios.get('http://localhost:9090/api/lockercontroller/door/'+doorNumber+'/open').then(() => {
            
        })
     
            const dataInterval = setInterval(() => {
                fetchDoorStatus() 
            }, 1000);
            return() => clearInterval(dataInterval)
    },[])

    return (
        <div className="container">
            <Header />
            {curr} ++ {qpin} ++ {doorNumber}
            <div className="col-md-10 mx-auto pt-20">
            {
                  (() => {
                      if(doorIMG == 'open'){
                        const img =  <Player src={openDoor} loop autoplay/>
                        return img
                      }
                      else if(doorIMG == 'close'){
                        const img = <img src={closeDoor} className="doorstatus-img" />
                        return img
                      }
                  })()  
                  } 
                   
        
            </div>
            <div className="d-flex pt-10 justify-content-around">
            <div><button className="border-big-radius border-0 btn-big bigger-text text-secondary" onClick={() => reopenDoor()}>Reopen Door</button></div>
            <div> <button className="border-big-radius border-0 btn-big btn btn-default text-light bigger-text position-relative" onClick={() => goHome()}>Next <img src={chevron} className="btn-img position-absolute" /></button></div>
            </div>
            
        </div>
    )
}

export default OpenDoor