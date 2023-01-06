import React, {useState} from 'react'

/*components*/
import Header from '../../Header'
import Footer from '../../Footer'

/*custom imports*/
import NextDayDelivery from '../../../assets/img/NDD.svg'
import SameDayDelivery from '../../../assets/img/SDD.svg'
import DeluxeExpress from '../../../assets/img/DE.svg'
import {useLocation} from 'react-router-dom'
const Services = () =>{
    const [hiddenServices, sethiddenServices] = useState('')
    const [toggleNextDay, setToggleNextDay] = useState(false)
    const [toggleSameDay, setToggleSameDay] = useState(false)
    const [toggleDeluxeExpress, setToggleDeluxeExpress] = useState(false)
    const location = useLocation()
    const page = location.state?.page
    function toggleServiceType(serviceType) { 
       if(serviceType == 1){
        setToggleNextDay(true)
        setToggleSameDay(false)
        setToggleDeluxeExpress(false)
       }
       else if(serviceType == 2){
        setToggleNextDay(false)
        setToggleSameDay(true)
        setToggleDeluxeExpress(false)
       }
       else if(serviceType == 3){
        setToggleNextDay(false)
        setToggleSameDay(false)
        setToggleDeluxeExpress(true)
        
       }
       sethiddenServices(serviceType)
    }
    return (
        <>
            
            <div className="container">
                <Header />
                    <div className="col-md-10 mx-auto">
                        <div className="pt-10 pb-5"><h3 className="text-default bigger-text">When do you want it to be done?</h3></div>
                            
                            <div className={toggleNextDay ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType(1)}}>
                         
                                    <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                        <div><img src={NextDayDelivery} /></div>
                                        <div className="px-5">
                                            <div className="big-text text-secondary">Next Day Delivery</div>
                                            <div className="text-secondary"><small>Deliver after 24 hours</small></div>
                                        </div>
                                        
                                    </div>
                            </div>
                             <div className={toggleSameDay ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType(2)}}>
                         
                                    <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                        <div><img src={SameDayDelivery} /></div>
                                        <div className="px-5">
                                            <div className="big-text text-secondary">Same Day Delivery</div>
                                            <div className="text-secondary"><small>Deliver within 24 hours</small></div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className={toggleDeluxeExpress ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType(3)}}>
                            
                                    <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                        <div><img src={DeluxeExpress} /></div>
                                        <div className="px-5">
                                            <div className="big-text text-secondary">Deluxe Express</div>
                                            <div className="text-secondary"><small>Deliver in less than 5 hours</small></div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <input type="hidden" onChange={(e) => sethiddenServices(e.target.value)} value={hiddenServices}/>
                    </div>
                <Footer hiddenServices={hiddenServices} page={page}/>
            </div>
           
        </>
    )
}

export default Services