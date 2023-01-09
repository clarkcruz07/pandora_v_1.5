import React,{useState, useEffect} from 'react'

/*components*/
import Services from './sub-component/Services'
//import useScanDetection from 'use-scan-detection';
const Body = () =>{
    const [language, setLanguage] = useState('')
    //const [value, setValue] = useState("");

    /*useScanDetection({
        onComplete: (code) => { setValue(code) },
        minLength: 13 
    });*/
    useEffect(() => {
        if(localStorage.getItem('lang-set') == 'chinese'){
            setLanguage('您好，今天有什么可以帮到您的吗？')
        }
        else{
            setLanguage('Hello, how can we help you today?')
        }
        /*if(value == ''){

        }
        else{
            alert(value)
        }*/
        
       
    })
    return (
           <div className="col-md-12 px-5">
               <h3 className="text-default">{language}</h3>
                <Services />
           </div>
    )
}

export default Body