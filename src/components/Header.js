import React, {useEffect, useState} from 'react'

const Header = () =>{
    const [engActive, setEnglish] = useState('active')
    const [cnActive, setCn] = useState('')

    const radioEng = () => {
        setEnglish('active');
        setCn('');
        
        localStorage.setItem('lang-set', 'english')
    }
    const radioCn = () => {
        setCn('active');
        setEnglish('');
        
        localStorage.setItem('lang-set', 'chinese')
    }
    return (
        <div className="row d-flex justify-content-end pt-5">
            <div className="option-lang col-md-12">
                
                <div className={engActive ? 'active' : ''} onClick={()=> radioEng()}  id="lang-eng"><input type="radio" name="language" id='lang-eng'/>English</div>
                <div className={cnActive ? 'active' : ''} onClick={()=> radioCn()}  id="lang-cn"><input type="radio" name="language" id='lang-eng' />汉语</div>                
            </div>
        </div>
    )
}

export default Header