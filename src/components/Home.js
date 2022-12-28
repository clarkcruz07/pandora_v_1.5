import React from 'react'

/*imports */

/*components*/
import Header from './Header'
import Banner from './Banner'
import Body from './Body'
const Home = () =>{
   
    return (
           <div className="container">
            
                <Header />
                <Banner />
                <Body />
           </div>
    )
}

export default Home