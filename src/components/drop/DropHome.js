import React, {useEffect, useState} from 'react'

/*imports*/
import {useLocation} from 'react-router-dom'
/*components*/
import Header from '../Header'
import Footer from '../Footer'
import Keyboard from '../sub-component/Keyboard'
const DropHome = () =>{
    const [numbers, SetNumber] = useState('')
    const [mobilenumber, setMobileNumber] = useState('')
    const location = useLocation()
    const number = location.state?.mobileNumber
    const riderNumber = location.state?.riderNumber
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
                     
                            if(mobilenumber == '' ){
                                const mobile = <span> _ _ _ _ _ _ _ _ _ _</span>
                                return mobile
                            }
                            else if(mobilenumber != ''){
                                const mobile = <span> {mobilenumber} </span>
                                return mobile
                            }
                            })()  
                        } 
                        </div>
                    </div>
                    <Keyboard setMobileNumber={setMobileNumber} />
               
                </div>
                
                <Footer SetNumber={number} recepientNumber = {mobilenumber} ridernumber={"0"+riderNumber}/>
               
           </div>     
    )
}

export default DropHome