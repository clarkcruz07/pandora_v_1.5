import React, {useEffect, useState} from 'react'

/*imports*/
/*components*/
const Keyboard = ({setMobileNumber}) =>{
    const [cart, setCart] = useState([])
    const [disable, setDisable] = useState(false)
    function handleClick(e) {
        setCart(prevState => [...prevState, e].join(''));
    }
    function clearNumber (e) {
        setCart('')
        localStorage.removeItem('number')       
    }
    useEffect(() => {
       if(cart.length > 9 && window.location.pathname=='/inputnumber'){
        setDisable(true)
        
       }
       else if(cart.length > 5 && window.location.pathname=='/inputotp'){
        setDisable(true)
        
       }
       else if(cart.length > 9 && window.location.pathname=='/services/drop'){
        setDisable(true)
       }
       else{
        setDisable(false)
       }
       setMobileNumber(cart)
    })
    return (
        <div>
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
    )
}

export default Keyboard