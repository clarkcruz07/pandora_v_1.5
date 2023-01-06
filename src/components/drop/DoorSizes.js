import React, {useEffect, useState} from 'react'

/*imports*/
import {useLocation} from 'react-router-dom'
import XS from '../../assets/img/xSmall.svg'
import S from '../../assets/img/small.svg'
import M from '../../assets/img/medium.svg'
import L from '../../assets/img/large.svg'
/*components*/
import Header from '../Header'
import Footer from '../Footer'
const DoorSizes = () =>{
    const [doorSize, setDoorSize] = useState('')
    const [toggleXS, settoggleXS] = useState(false)
    const [toggleSM, settoggleSM] = useState(false)
    const [toggleMed, settoggleMed] = useState(false)
    const [toggleLarge, settoggleLarge] = useState(false)
    const location = useLocation()

    const number = location.state?.rider
    const cart = location.state?.receiver
    function toggleServiceType(serviceType) { 
       if(serviceType == 'XS'){
        settoggleXS(true)
        settoggleSM(false)
        settoggleMed(false)
        settoggleLarge(false)
       }
       else if(serviceType == 'S'){
        settoggleXS(false)
        settoggleSM(true)
        settoggleMed(false)
        settoggleLarge(false)
       }
       else if(serviceType == 'M'){
        settoggleXS(false)
        settoggleSM(false)
        settoggleMed(true)
        settoggleLarge(false)
        
       }
       else if(serviceType == 'L'){
        settoggleXS(false)
        settoggleSM(false)
        settoggleMed(false)
        settoggleLarge(true)
        
       }
       setDoorSize(serviceType)
    }
    return (
        <div className="container">
                <Header />
                <div className="col-md-10 mx-auto">
                        <div className="pt-10 pb-5"><h3 className="text-default bigger-text">Choose door size</h3></div>
                            
                            <div className={toggleXS ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType('XS')}}>
                         
                                    <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                        <div><img src={XS} /></div>
                                        <div className="px-5">
                                            <div className="big-text text-secondary">Extra Small</div>
                                            <div className="text-secondary"><small>Remaining boxes of this size: </small></div>
                                        </div>
                                        
                                    </div>
                            </div>
                             <div className={toggleSM ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType('S')}}>
                         
                                    <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                        <div><img src={S} /></div>
                                        <div className="px-5">
                                            <div className="big-text text-secondary">Small</div>
                                            <div className="text-secondary"><small>Remaining boxes of this size: </small></div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className={toggleMed ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType('M')}}>
                            
                                    <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                        <div><img src={M} /></div>
                                        <div className="px-5">
                                            <div className="big-text text-secondary">Medium</div>
                                            <div className="text-secondary"><small>Remaining boxes of this size: </small></div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className={toggleLarge ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center my-3"} onClick={() => {toggleServiceType("L")}}>
                            
                            <div className="d-flex flex-wrap align-items-center px-6 col-md-12">
                                <div><img src={L} /></div>
                                <div className="px-5">
                                    <div className="big-text text-secondary">Large</div>
                                    <div className="text-secondary"><small>Remaining boxes of this size: </small></div>
                                </div>
                                
                            </div>
                    </div>
                            <input type="text" onChange={(e) => setDoorSize(e.target.value)} value={doorSize}/>
                    </div>
                <Footer doorSize={doorSize} ridernumber = {number} receiverNumber = {cart}/>
               
        </div>     
    )
}

export default DoorSizes