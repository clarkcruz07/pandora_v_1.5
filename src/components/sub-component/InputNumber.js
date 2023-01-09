import React, {useEffect, useState} from 'react'

/*imports*/
import {useLocation} from 'react-router-dom'
import adsQube from '../../assets/img/FoodPanda_Qube.png'
/*components*/
import Header from '../Header'
import Footer from '../Footer'
import Keyboard from './Keyboard'
const InputNumber = () =>{
const [mobilenumber, setMobileNumber] = useState('')
const location = useLocation()
const service = location.state?.service
const duration = location.state?.duration
const page = location.state?.page
const number =  localStorage.getItem('number')

    return (
           <div className="container">
                <Header />
                <div className="col-md-10 mx-auto">
                
                    <div className="pt-10 pb-5"><h3 className="text-default bigger-text">Please enter your mobile number</h3></div>
                  
                    <div className="d-flex align-items-center justify-content-center">
                        <div><span className="biggest-text px-3">+63</span></div>
                        <div className="biggest-text"> 
                        {
                        (() => {
                            if(number != null){
                                const mobile = <span>{number}</span>
                                return mobile
                            }
                           else if(mobilenumber == '' && number == null){
                            const mobile = <span> _ _ _ _ _ _ _ _ _ _</span>
                            return mobile
                           }
                           else if(mobilenumber != '' && number == null){
                            const mobile = <span> {mobilenumber} </span>
                            return mobile
                           }
                        })()  
                        } 
                        </div>
                    </div>
                    <Keyboard setMobileNumber={setMobileNumber} />
                    {
                        (() => {
                            if(service == 4){
                                const ads = <div className="col-md-10 qube-img mx-auto py-5"><img src={adsQube} /></div>
                                return ads
                            }
                        })()  
                        } 
                </div>
                
                <Footer setMobileNumber={mobilenumber} service={service} duration={duration} page={page}/>
               
           </div>
    )
}

export default InputNumber