import React from 'react'

/*imports*/
import { useNavigate } from 'react-router-dom'
/*components*/
import washIcon from '../../assets/img/washIcon.svg'
import dropIcon from '../../assets/img/dropIcon.svg'
import keepIcon from '../../assets/img/keepIcon.svg'
const Services = () =>{
    const navigate = useNavigate()

    function gotoWash(){
        navigate('/services/wash',{state : {service: 1}})
    }
    
    function gotoDrop() {
        navigate('/inputnumber',{state : {service: 2}})
    }
    return (
        <div>
           <div className="col-md-12 services border-thin rounded mt-6">
               <h5 className="text-center pt-5 font-weight-bold">FOR DROPPING</h5>
               <div className="d-flex justify-content-evenly align-items-center pt-4 flex-wrap">
                    <div className='font-weight-bold col-md-2 text-center' onClick={()=>gotoWash()}>
                        <img src={washIcon} />
                        WASH
                    </div>
                    <div className='font-weight-bold col-md-2 text-center' onClick={()=>gotoDrop()}>
                        <img src={dropIcon} />
                        DROP
                    </div>
                    <div className='font-weight-bold col-md-2 text-center'>
                        <img src={keepIcon} />
                        KEEP
                    </div>
               </div>
           </div>

           <div className="col-md-12 claiming border-thin rounded mt-4">
               <h5 className="text-center pt-3 font-weight-bold">FOR CLAIMING</h5>
               <input type="text" placeholder='Enter quickpin here...' className="mt-4" />
           </div>
        </div>
    )
}

export default Services