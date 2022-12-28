import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


/*components */
import axios from 'axios'
import chevron from '../assets/img/chevron_left.svg'
const Footer = ({servicesVal,servicePage,hiddenServices,setMobileNumber, service, duration, numero}) =>{
  const navigate = useNavigate()
  const [disable, setDisable] = useState(false)
  const [btnNext, setBtnNext] = useState('Next')
  const [hidden, setHidden] = useState('')
  let page = ""
  function unixTimestamp () {  
    return Math.floor(Date.now() / 1000)
  }

  function backToHome(e) {

    
        navigate(-1)
        localStorage.removeItem('number')
      
  
    
  }
  function navTat(e) {
    if(servicePage == '1'){
      localStorage.setItem('serviceType', 1)
      navigate('/services/wash/washandfold')   
      
    }
    else if(servicePage == '2'){
      localStorage.setItem('serviceType', 2)
      navigate('/services/wash/shoecare')
    }
    else if(servicePage == '3'){
      localStorage.setItem('serviceType', 3)
      navigate('/services/wash/bagcare')
    }
    else if(servicePage == '4'){
      localStorage.setItem('serviceType', 4)
      navigate('/services/wash/linencare')
    }
    
    
    if(window.location.pathname=="/inputnumber"){
      /*wash module */
      if(service == 1){
        setBtnNext('Checking Number')
        setHidden('hidden')
        setDisable(true)
        axios.get('https://pandorav2-0.onrender.com/api/get/'+ "0"+setMobileNumber).then((res) => {
         
          if(res.status == '201'){
            console.log(res)
            localStorage.setItem('number', setMobileNumber)
            navigate('/inputotp',{state : {service: service, mobilenumber: setMobileNumber, duration: duration, numero: setMobileNumber}})
          }
          else{
            setBtnNext('Next')
           
            axios.post('https://pandorav2-0.onrender.com/api/trans/post',{
              'mobileNumber': "0"+localStorage.getItem('number'),
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
              navigate('/opendoor',{state: {doorNumber: res.data.doorNumber }})
            })
            .catch((err) => {
              console.log(err)
            })
          
          }
          
        })
        .catch((err) => {
          console.log(err)
        })
      }

      /*drop module*/
      else if(service == 2){
        alert('drop')
      }
    }
    else if(window.location.pathname=="/inputotp"){
      
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
          navigate('/opendoor',{state: {doorNumber: res.data.doorNumber }})
         
        })
        .catch((err) => {
          alert('wrongsssss')
        })
      })
      .catch((err) => {
          alert('wrong')
      })  
        
    }
   
    if(hiddenServices == 1){
      navigate('/inputnumber',{state : {service: 1, duration: 1}})
    }
    else if(hiddenServices == 2){
      navigate('/inputnumber',{state : {service: 1, duration: 2}})
    }
    else if(hiddenServices == 3){
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
                        const btn = <button className="border-big-radius border-0 btn-big bigger-text text-secondary" onClick={() => backToHome()}>Back</button>
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