import React, {useEffect, useState} from 'react'

/*imports*/
import {useLocation, useNavigate} from 'react-router-dom'
import chevron from '../../assets/img/chevron_left.svg'
import { Player } from '@lottiefiles/react-lottie-player';
import bounceLoader from '../../assets/json/bounceLoader.json'
import axios from 'axios'
/*components*/
import Header from '../Header'
const DropOTP = () =>{
    const [mobilenumber, setMobileNumber] = useState('')
    const [cart, setCart] = useState([])
    const [disable, setDisable] = useState(false)
    const [nextBtn, setNext] = useState(false)
    const [disableBack, setDisableBack] = useState(false)
    const [btnNext, setBtnNext] = useState('Next')
    const [hidden, setHidden] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [hiddenerr, setHiddenerr] = useState('hidden')
    const droppernumber = location.state?.droppernumber
    const receipientnumber = location.state?.receipientnumber
    const doorsize = location.state?.doorsize

    function handleClick(e) {
        setCart(prevState => [...prevState, e].join(''));
       
    }
    function clearNumber (e) {
        setCart('')
              
    }

    function unixTimestamp () {  
        return Math.floor(Date.now() / 1000)
      }
    
    function backToHome(e) {
    
      navigate(-1)
     
    }
    function gotoNext() {
        //alert('hahaha')
    }
      /*function navTat(){
        setBtnNext( <Player 
            src={bounceLoader}
            loop
            autoplay/>)
            setHidden('hidden')
      }*/
    function getOTP() {
        axios.get('https://pandorav2-0-vlak.onrender.com/api/get/'+ "0"+droppernumber).then((res) => {
            console.log(res)
            
        })
      }
      function sendOTP() {
        let errorMessage  = ''
        setDisableBack(true)
        setNext(true)
        setBtnNext( <Player 
          src={bounceLoader}
          loop
          autoplay/>)
        setHidden('hidden')
        axios.post('https://pandorav2-0-vlak.onrender.com/api/verify/otp/0'+droppernumber,{
          "mobileNumber": "0"+droppernumber,
          "otp": cart 
        }).then(()=>{
            axios.post('https://pandorav2-0-vlak.onrender.com/api/trans/post',{
              'mobileNumber': "0"+droppernumber,
              "doorSize": doorsize,
              "receiverNumber": "0"+receipientnumber,
              "merchantType": "undefine",
              'refNumber': unixTimestamp(),
              'moduleData': "0002",
              'locData': process.env.REACT_APP_LOCATION,
              'serviceType': "0",
              'turnAroundTime' : "0",
              'milestone': [{
                  'mlocData': process.env.REACT_APP_LOCATION
              }]
    
            })
            .then((res) => {
              console.log(res.data)
              navigate('/opendoor',{state: {doorNumber: res.data.doorNumber, qpin: res.data.qpin, currentPage: 'drop' }})
            
            })
            .catch((err) => {
              setBtnNext('Next')
              setHidden('')
            })
        }).catch((err) => {
          setBtnNext('Next')
          setHidden('')
          setHiddenerr('')
          if(err.response.data == 'NOT VERIFIED'){
            errorMessage = 'Invalid Pin'
          }
          setError(errorMessage)
          setDisableBack(false)
        })
        
      }
      useEffect(() => {
         if(cart.length > 5 && !document.getElementById('btn-img').classList.contains('hidden')){
            setDisable(true)
            setNext(false)
         }
         else {
            setDisable(false)
            setNext(true)
         }
         setMobileNumber(cart)
      })

      useEffect(() => {
        getOTP()
      },[])
    return (
           <div className="container">
                <Header />
                <div className="col-md-10 mx-auto position-relative">
                    <div className="pt-10 pb-5"><h3 className="text-default bigger-text">Your mobile number</h3></div>
                    
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                        <div><span className="biggest-text px-3">+63</span></div>
                        <div className="biggest-text"> 
                        {droppernumber}
                        </div>
                        
                    </div>
                    
                   <div className="big-text col-md-12 text-align"><div className="col-md-9 mx-auto pt-3">Please check the OTP that was sent to your mobile number</div></div>
                   <div className="col-md-12 text-align biggest-text pt-5 otp">
                        {
                        (() => {
                       
                           if(mobilenumber == ''){
                            const mobile = <span> _ _ _ _ _ _</span>
                            return mobile
                           }
                           else if(mobilenumber != ''){
                            const mobile = <span> {mobilenumber} </span>
                            return mobile
                           }
                        })()  
                        } 
                    </div>
                    <input type="hidden" value={mobilenumber} onChange={(e)=>setMobileNumber(e.target.value)}/>

                    <div className={hiddenerr? "hidden pb-1 pt-2 col-md-12 position-absolute" : "pt-2 pb-1 col-md-12 position-absolute"}>
                    <div className="bg-danger py-3 col-md-10 mx-auto rounded text-light disabled error">
                        <span className="big-text mx-auto">{error}</span>
                    </div>
                    
                </div>
                    <div className="d-flex align-items-center flex-wrap justify-content-between pt-6 col-md-8 mx-auto">
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(1)} disabled={disable}>1</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(2)} disabled={disable}>2</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(3)} disabled={disable}>3</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(4)} disabled={disable}>4</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(5)} disabled={disable}>5</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(6)} disabled={disable}>6</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(7)} disabled={disable}>7</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(8)} disabled={disable}>8</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(9)} disabled={disable}>9</button></div>
                        <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(0)} disabled={disable}>0</button></div>
                        <div className="keyboard-clear-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" id="delete" onClick={()=> clearNumber()}>Clear</button></div>
                
                    </div>
               
                </div>
                
                <div className='d-flex justify-content-evenly position-absolute bottom-0 col-md-11 pb-7'>
                    <div>
                      <button className="border-big-radius border-0 btn-big bigger-text text-secondary" onClick={() => backToHome()} disabled={disableBack}>Back</button>
                            
                    </div>
                    <div>
                        
                        <div> <button className="border-big-radius border-0 btn-big btn btn-default text-light bigger-text position-relative" disabled={nextBtn} onClick={()=>sendOTP()}>{btnNext} <img src={chevron} className={hidden? "hidden btn-img position-absolute" : " btn-img position-absolute" } id="btn-img"/></button></div>
                
                    </div>
                </div>
               
           </div>
    )
}

export default DropOTP