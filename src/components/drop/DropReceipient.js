import React, {useEffect, useState} from 'react'

/*imports*/
import {useLocation, useNavigate} from 'react-router-dom'
import chevron from '../../assets/img/chevron_left.svg'
import { Player } from '@lottiefiles/react-lottie-player';
import bounceLoader from '../../assets/json/bounceLoader.json'
/*components*/
import Header from '../Header'
import Footer from '../Footer'
import Keyboard from '../sub-component/Keyboard'
const DropReceipient = () =>{
    const [mobilenumber, setMobileNumber] = useState('')
    const [cart, setCart] = useState([])
    const [disable, setDisable] = useState(false)
    const [nextBtn, setNextBtn] = useState(false)
    const [disableBack, setDisableBack] = useState(false)
    const [btnNext, setBtnNext] = useState('Next')
    const [hidden, setHidden] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const number = location.state?.mobileNumber

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
        navigate('/services/drop/sizes',{state: {rider: number, receiver: cart }})
    }
      /*function navTat(){
        setBtnNext( <Player 
            src={bounceLoader}
            loop
            autoplay/>)
            setHidden('hidden')
      }*/
   
      useEffect(() => {
         if(cart.length > 9){
            setDisable(true)
            setNextBtn(false)
         }
         else {
            setDisable(false)
            setNextBtn(true)
         }
         setMobileNumber(cart)
      })
    return (
        <div className="container">
                <Header />
                <div className="col-md-10 mx-auto">
                    
                    <div className="pt-10 pb-5"><h3 className="text-default bigger-text">Please enter receipient number</h3></div>
               
                    <div className="d-flex align-items-center justify-content-center">
                        <div><span className="biggest-text px-3">+63</span></div>
                        <div className="biggest-text"> 
                        {
                        (() => {
                            
                           if(cart == ''){
                            const mobile = <span> _ _ _ _ _ _ _ _ _ _</span>
                            return mobile
                           }
                           else if(cart != ''){
                            const mobile = <span> {cart} </span>
                            return mobile
                           }
                        })()  
                        } 
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
                    
                    <div> <button className="border-big-radius border-0 btn-big btn btn-default text-light bigger-text position-relative" disabled={nextBtn} onClick={()=>gotoNext()}>{btnNext} <img src={chevron} className={hidden? "hidden btn-img position-absolute" : " btn-img position-absolute" }/></button></div>
            
                </div>
            </div>
               
           </div>     
    )
}

export default DropReceipient