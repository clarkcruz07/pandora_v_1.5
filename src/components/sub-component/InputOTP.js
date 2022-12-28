import React, {useEffect, useState} from 'react'

/*imports*/
import {useLocation, useNavigate} from 'react-router-dom'
/*components*/
import Header from '../Header'
import Footer from '../Footer'
import Keyboard from './Keyboard'
const InputOTP = () =>{
const [mobilenumber, setMobileNumber] = useState('')
const location = useLocation()
const service = location.state?.service
const duration = location.state?.duration
const mobile = location.state?.mobilenumber
const numero = location.state?.numero
const navigate = useNavigate()
function changeNumber(e) {
localStorage.setItem('number', mobile)
navigate (-1)
}

useEffect(()=> {
},[])
    return (
           <div className="container">
                <Header />
                
                <div className="col-md-10 mx-auto position-relative">
                    <div className="pt-10 pb-5"><h3 className="text-default bigger-text">Please enter your mobile number</h3></div>
                    
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                        <div><span className="biggest-text px-3">+63</span></div>
                        <div className="biggest-text"> 
                        {mobile}
                        </div>
                        
                    </div>
                    <div className="mx-auto col-md-12" onClick={()=>changeNumber({mobile})}><h3 className="text-default bigger-text text-align pt-3">Change</h3></div>
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
                    <input type="text" value={mobilenumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                    <Keyboard setMobileNumber={setMobileNumber} />
               
                </div>
                
                <Footer setMobileNumber={mobilenumber} service={service} duration={duration} numero={numero}/>
               
           </div>
    )
}

export default InputOTP