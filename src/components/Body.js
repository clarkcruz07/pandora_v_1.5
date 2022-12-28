import React from 'react'

/*components*/
import Services from './sub-component/Services'
const Body = () =>{

    return (
           <div className="col-md-12 px-5">
               <h3 className="text-default">Hello, how can we help you today?</h3>
                <Services />
           </div>
    )
}

export default Body