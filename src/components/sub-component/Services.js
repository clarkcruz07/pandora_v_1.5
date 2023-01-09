import React, {useEffect, useState} from 'react'

/*imports*/
import { useNavigate } from 'react-router-dom'
import chevron from '../../assets/img/chevron_left.svg'
import axios from 'axios'
/*components*/
import washIcon from '../../assets/img/washIcon.svg'
import dropIcon from '../../assets/img/dropIcon.svg'
import keepIcon from '../../assets/img/keepIcon.svg'
import foodIcon from '../../assets/img/foodIcon.svg'

import { Player } from '@lottiefiles/react-lottie-player';
import bounceLoader from '../../assets/json/bounceLoader.json'
const Services = () =>{
    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    const [disable, setDisable] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)
    const [btnNext, setBtnNext] = useState(chevron)
    const [error, setError] = useState('')
    const [hidden, setHidden] = useState('hidden')
    function gotoWash(){
        navigate('/services/wash',{state : {service: 1}})
    }
    
    function gotoDrop() {
        navigate('/inputnumber',{state : {service: 2}})
    }

    function gotoFood() {
        navigate('/inputnumber',{state : {service: 4}})
    }

    function handleClick(e) {
        setCart(prevState => [...prevState, e].join(''));
    }
    function clearNumber (e) {
        setCart('')
              
    }

    function setPin(){
        setDisableBtn(true)
        
        axios.get('https://pandorav2-0-vlak.onrender.com/api/get/trans/'+cart).then((res) => {
            navigate('/opendoor',{state : {doorNumber: res.data[0].doorNumber, qpin: cart, currentPage: 'drop'}})
        }).catch((err)=> {
            setHidden('')
            setDisableBtn(false)
            setError(err.response.data)
        })
    }
    useEffect(() => {
        if(cart.length > 5) {
            setDisable(true)
        }
        else if(cart.length == 0){
            setDisableBtn(true)
            setDisable(false)
        }
        else {
            setDisable(false)
            setDisableBtn(false)
        }
     })
    return (
        <div>
           <div className="col-md-12 services border-thin rounded mt-6">
               <h5 className="text-center pt-5 font-weight-bold bigger-text">FOR DROPPING</h5>
               <div className="d-flex justify-content-evenly align-items-center pt-4 flex-wrap">
                    <div className='font-weight-bold col-md-2 text-center' onClick={()=>gotoWash()}>
                        <img src={washIcon} />
                        WASH
                    </div>
                    <div className='font-weight-bold col-md-2 text-center' onClick={()=>gotoDrop()}>
                        <img src={dropIcon} />
                        DROP
                    </div>
                    <div className='font-weight-bold col-md-2 text-center' onClick={()=>gotoFood()}>
                        <img src={foodIcon} />
                        FOOD
                    </div>
                   {/*<div className='font-weight-bold col-md-2 text-center' onClick={()=>gotoFood()}>
                        <img src={keepIcon} />
                        KEEP
                    </div>*/}
               </div>
           </div>

           <div className="col-md-12 claiming h-100 border-thin rounded mt-4">
               <h5 className="text-center pt-5 font-weight-bold bigger-text">FOR CLAIMING</h5>
               <input type="hidden" value={cart} onChange={(e) => setCart(e.target.value)}/>
                <div className="mt-4 mx-auto position-relative">
                {
                    (() => {
                
                    if(cart == '' ){
                        const mobile = <div className="big-text h-100  d-flex justify-content-center align-items-center"> - - - - - -  </div>
                        return mobile
                    }
                    else if(cart != ''){
                        const mobile = <div className="big-text h-100 d-flex justify-content-center align-items-center"> {cart} </div>
                        return mobile
                    }
                    })()  
                }
                </div>
               <div className="d-flex align-items-start col-md-5 container-fluid mx-auto py-3 pb-5">
                <div className="col-md-4">
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(1)} disabled={disable}>1</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(4)} disabled={disable}>4</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(7)} disabled={disable}>7</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 big-text rounded" id="delete" onClick={()=> clearNumber()}>Clear</button></div>
                </div> 
                <div className="col-md-4">
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(2)} disabled={disable}>2</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(5)} disabled={disable}>5</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(8)} disabled={disable}>8</button></div>
                    
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(0)} disabled={disable}>0</button></div>
                </div>
                <div className="col-md-4">
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(3)} disabled={disable}>3</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(6)} disabled={disable}>6</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 bigger-text rounded" onClick={()=> handleClick(9)} disabled={disable}>9</button></div>
                    <div className="keyboard-btn mx-1 my-2"><button className="keyboard-layout border-0 w-100 h-100 big-text rounded" disabled={disableBtn} onClick={() => setPin()}><img src={btnNext} className="small-svg" /></button></div>
                    
                </div>
                
                
                </div>
               
                <div className={hidden? "hidden pb-5 col-md-12" : " pb-5 col-md-12"}>
                    <div className="bg-danger py-3 col-md-10 mx-auto rounded text-light disabled">
                        <span className="big-text">{error}</span>
                    </div>
                    
                </div>
                
           </div>
        </div>
    )
}

export default Services