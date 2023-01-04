import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


/*components */
import axios from 'axios'
import chevron from '../assets/img/chevron_left.svg'
import { Player } from '@lottiefiles/react-lottie-player';
import bounceLoader from '../assets/json/bounceLoader.json'
const Footer = ({servicesVal,servicePage,hiddenServices,setMobileNumber, service, duration, numero, page, SetNumber}) =>{
  const navigate = useNavigate()
  const [disable, setDisable] = useState(false)
  const [disableBack, setDisableBack] = useState(false)
  const [btnNext, setBtnNext] = useState('Next')
  const [hidden, setHidden] = useState('')

  function unixTimestamp () {  
    return Math.floor(Date.now() / 1000)
  }

  function backToHome(e) {

        navigate(-1)
        localStorage.removeItem('number')
        localStorage.removeItem('serviceType')
 
  }
  function navTat(e) {
  
    if(servicePage == '1'){
      navigate('/services/wash/washandfold',{state:{page: 1}})   
      
    }
    else if(servicePage == '2'){
      localStorage.setItem('serviceType', 2)
      navigate('/inputnumber',{state:{page: 2}})
    }
    else if(servicePage == '3'){
      localStorage.setItem('serviceType', 3)
      navigate('/inputnumber',{state:{page: 3}})
    }
    else if(servicePage == '4'){
      localStorage.setItem('serviceType', 4)
      navigate('/inputnumber',{state:{page: 4}})
    }
    
    
    if(window.location.pathname=="/inputnumber"){
      
      /*wash module */
      if(page == 2 || page == 3 || page == 4) {
        setBtnNext( <Player 
          src={bounceLoader}
          loop
          autoplay/>)
        setHidden('hidden')
        setDisableBack(true)
        axios.get('https://pandorav2-0.onrender.com/api/get/'+ "0"+setMobileNumber).then((res) => {
         
            console.log(res)
            localStorage.setItem('number', setMobileNumber)
            navigate('/inputotp',{state : {service: service, mobilenumber: setMobileNumber, duration: duration, numero: setMobileNumber}})
          
          
        })
        .catch((err) => {
          console.log(err)
        })
        
      }
      if(service == 1){
        
        setBtnNext( <Player 
          src={bounceLoader}
          loop
          autoplay/>)
        setHidden('hidden')
        setDisableBack(true)
        axios.get('https://pandorav2-0.onrender.com/api/get/'+ "0"+setMobileNumber).then((res) => {
         
          
            console.log(res)
            localStorage.setItem('number', setMobileNumber)
            navigate('/inputotp',{state : {service: service, mobilenumber: setMobileNumber, duration: duration, numero: setMobileNumber}})
         
          
        })
        .catch((err) => {
          console.log(err)
        })
      }

      /*drop module*/
      else if(service == 2){
        navigate('/services/drop',{state: {mobileNumber: "0"+setMobileNumber }})
      }

      else if(service == 4) {
        axios.get('https://pandorav2-0.onrender.com/api/get/0'+setMobileNumber+'/?moduleData=000'+service).then((res)=> {
         
          if(res.data == null || res.data == ''){
            console.log('null')
          } 
          else{
            if(res.status == 201){
              
              navigate('/services/drop')
            }
            else {
              navigate('/inputotp')
            }
            
          }
        }) 

      }
    }
    else if(window.location.pathname=="/inputotp"){
      if(localStorage.getItem('serviceType') == 2 || localStorage.getItem('serviceType') == 3 || localStorage.getItem('serviceType') == 4){
        setBtnNext( <Player 
          src={bounceLoader}
          loop
          autoplay/>)
        setHidden('hidden')
        setDisableBack(true)
        axios.post('https://pandorav2-0.onrender.com/api/verify/otp/0'+numero,{
          "mobileNumber": "0"+numero,
          "otp": setMobileNumber
        }).then(() => {
          axios.post('https://pandorav2-0.onrender.com/api/trans/post',{
            'mobileNumber': "0"+numero,
            'refNumber': unixTimestamp(),
            'moduleData': "0001",
            'locData': process.env.REACT_APP_LOCATION,
            'serviceType': localStorage.getItem('serviceType'),
            'turnAroundTime' : 0,
            'milestone': [{
                'mlocData': process.env.REACT_APP_LOCATION
            }]
  
          })
          .then((res) => {
            navigate('/opendoor',{state: {doorNumber: res.data.doorNumber, qpin: setMobileNumber }})
           
          })
          .catch((err) => {
            setBtnNext('Next')
            setHidden('')
            console.log(err)
          })
        })
        .catch((err) => {
          setBtnNext('Next')
          setHidden('')
          console.log(err.response.data)
        })  
      }
      else{
        setBtnNext( <Player 
          src={bounceLoader}
          loop
          autoplay/>)
        setHidden('hidden')
        setDisableBack(true)
        axios.post('https://pandorav2-0.onrender.com/api/verify/otp/0'+numero,{
          "mobileNumber": "0"+numero,
          "otp": setMobileNumber
        }).then(() => {
          axios.post('https://pandorav2-0.onrender.com/api/trans/post',{
            'mobileNumber': "0"+numero,
            'refNumber': unixTimestamp(),
            'moduleData': "000"+service,
            'locData': process.env.REACT_APP_LOCATION,
            'serviceType': localStorage.getItem('serviceType'),
            'turnAroundTime' : duration,
            'milestone': [{
                'mlocData': process.env.REACT_APP_LOCATION
            }]
  
          })
          .then((res) => {
            navigate('/opendoor',{state: {doorNumber: res.data.doorNumber, qpin: setMobileNumber  }})
           
          })
          .catch((err) => {
            setBtnNext('Next')
            setHidden('')
            console.log(err)
          })
        })
        .catch((err) => {
          setBtnNext('Next')
          setHidden('')
          console.log(err.response.data)
        })  
      }
        
    }

    else if(window.location.pathname == '/services/drop'){
        axios.get('https://pandorav2-0.onrender.com/api/get/'+SetNumber).then((res) => {
         console.log(res.data)
        })
       
    }
   
    if(hiddenServices == 1){
      localStorage.setItem('serviceType', 1)
      navigate('/inputnumber',{state : {service: 1, duration: 1}})
    }
    else if(hiddenServices == 2){
      localStorage.setItem('serviceType', 1)
      navigate('/inputnumber',{state : {service: 1, duration: 2}})
    }
    else if(hiddenServices == 3){
      localStorage.setItem('serviceType', 1)
      navigate('/inputnumber',{state : {service: 1, duration: 3}})
    }

    
    
  }
  useEffect(() => {
    
    if(servicesVal == 0 || hiddenServices == 0){
      setDisable(true)
    }
    else if(servicesVal != 0 || hiddenServices != 0){
      setDisable(false)     
    }
    
    if(window.location.pathname == '/inputnumber'){
      if(setMobileNumber.length < 10){
        setDisable(true)
      }
      else if(setMobileNumber.length > 10){
        setDisable(false)
      }
    }
    else if(window.location.pathname == '/inputotp'){
      if(setMobileNumber.length < 6){
        setDisable(true)
      }
      else if(setMobileNumber.length > 9){
        setDisable(false)
      }
    }
   
  })
    return (
           <div className='d-flex justify-content-evenly position-absolute bottom-0 col-md-11 pb-7'>
              <div>
                {
                  (() => {
                      if(window.location.pathname == '/services/wash') {
                        const btn = <button className="border-big-radius border-0 btn-big bigger-text text-secondary" onClick={() => backToHome('wash')}>Cancel</button>
                        return btn
                      }
                      else if(window.location.pathname == '/services/drop') {
                        const btn = <button className="border-big-radius border-0 btn-big bigger-text text-secondary" onClick={() => backToHome('drop')}>Cancel</button>
                        return btn
                      }
                      else{
                        const btn = <button className="border-big-radius border-0 btn-big bigger-text text-secondary" onClick={() => backToHome()} disabled={disableBack}>Back</button>
                        return btn
                      }
                  })()  
                  } 
                
              </div>
              <div>

                <div> <button className="border-big-radius border-0 btn-big btn btn-default text-light bigger-text position-relative" disabled={disable} onClick={()=>navTat()}>{btnNext} <img src={chevron} className={hidden? "hidden btn-img position-absolute" : " btn-img position-absolute" }/></button></div>
         
              </div>
           </div>
    )
}

export default Footer