import React, {useState,useEffect} from 'react'

/*imports*/
import washeandfold from '../../assets/json/washed.json'
import shoecare from '../../assets/json/ShoeCare.json'
import bagcare from '../../assets/json/BagCare.json'
import linensandcomforters from '../../assets/json/Comforter.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { useLocation } from 'react-router-dom'
/*components*/
import Header from '../Header'
import Footer from '../Footer'
const Services = () =>{
 const [toggleWash, setToggleWash] = useState(false)
 const [toggleShoeCare, setToggleShoeCare] = useState(false)
 const [toggleBagCare, settoggleBagCare] = useState(false)
 const [toggleLinens, settoggleLinens] = useState(false)
 const [hiddenVal, setHiddenVal] = useState(0)
 const [servicesVal, setServicesVal] = useState(0)
 const [servicePage, setServicePage] = useState('')
 const location = useLocation()

 function toggleServiceType(serviceType) {
    setHiddenVal(serviceType)
    setServicesVal(serviceType)
    
    if(serviceType == 1){
        
        setToggleWash(true);
        setToggleShoeCare(false);
        settoggleBagCare(false);
        settoggleLinens(false);
        setServicePage('1')
    }
    else if(serviceType == 2){
       
        setToggleWash(false);
        setToggleShoeCare(true);
        settoggleBagCare(false);
        settoggleLinens(false);
        setServicePage('2')
    }
    else if(serviceType == 3){
       
        setToggleWash(false);
        setToggleShoeCare(false);
        settoggleBagCare(true);
        settoggleLinens(false);
        setServicePage('3')
    }
    else if(serviceType == 4){
       
        setToggleWash(false);
        setToggleShoeCare(false);
        settoggleBagCare(false);
        settoggleLinens(true);
        setServicePage('4')
    }
}


    return (
       
           <div className="container">
             <Header />
             <div className="col-md-10 mx-auto">
                <div className="pt-10 pb-5"><h3 className="text-default bigger-text">What needs washing?</h3></div>
                <div className={toggleWash ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center"} onClick={() => {toggleServiceType(1)}}>
                <Player 
                        src={washeandfold}
                        loop
                        autoplay/>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="font-weight-bold big-text text-secondary col-md-12">Wash & Fold</div>
                            <div className="small-text">Laundry services for your daily clothes</div>
                        </div>
                    
                    <input type="radio" name='services-offered' id="services-offered" />
                </div>
                <div className={toggleShoeCare ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center mt-4" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center mt-4" } onClick={() => {toggleServiceType(2)}}>
                <Player 
                        src={shoecare}
                        loop
                        autoplay/>
                         <div className="d-flex flex-wrap align-items-center">
                            <div className="font-weight-bold big-text text-secondary col-md-12">Shoe Care</div>
                            <div className="small-text">Professional care for footwears</div>
                        </div>
                    <input type="radio" name='services-offered' id="services-offered" />
                </div>
                <div className={toggleBagCare ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center mt-4" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center mt-4" } onClick={() => {toggleServiceType(3)}}>
                <Player 
                        src={bagcare}
                        loop
                        autoplay/>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="font-weight-bold big-text text-secondary col-md-12">Bag Care</div>
                            <div className="small-text">Careful cleaning for your bags</div>
                        </div>
                    <input type="radio" name='services-offered' id="services-offered" />
                </div>
                <div className={toggleLinens ? "active services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center mt-4" : "services-lottie border-thin col-md-12 border-big-radius d-flex align-items-center mt-4" } onClick={() => {toggleServiceType(4)}}>
                <Player 
                        src={linensandcomforters}
                        loop
                        autoplay/>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="font-weight-bold big-text text-secondary col-md-12">Linens & Comforters</div>
                            <div className="small-text">Cleaning for your favorite beddings</div>
                        </div>
                    <input type="radio" name='services-offered' id="services-offered" />
                </div>
             </div>
             <input type="hidden" onChange={(e) => setHiddenVal(e.target.value)} value={hiddenVal}/>
             <Footer servicesVal={servicesVal} servicePage={servicePage}/>
           </div>
    )
}

export default Services