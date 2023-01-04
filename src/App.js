import './App.css';

/*custom imports */
import './assets/css/custom.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import IdleScreen from "./components/sub-component/IdleTimeout";
import IdlePage from './assets/json/Idle.json'
import { Player } from '@lottiefiles/react-lottie-player';

/*components*/
import Home from './components/Home'
import Wash from './components/wash/Services'
import Drop from './components/drop/DropHome'

import OpenDoor from './components/sub-component/OpenDoor'
import InputNumber from './components/sub-component/InputNumber'
import InputOTP from './components/sub-component/InputOTP'
import Washandfold from './components/wash/washandfold/Services'
import Shoecare from './components/wash/shoecare/Services'
import Bagcare from './components/wash/bagcare/Services'
import LinenCare from './components/wash/linencare/Services'
function App() {
  let timer = IdleScreen(300);

  if(timer == 0){
      document.getElementById('lottie-player').classList.remove('hidden')
  }
  const lottieEnd = () => {
      document.getElementById('lottie-player').classList.add('hidden')
  }
  return (
    <div className="App">
       <div className="home hidden" id="lottie-player" onClick={lottieEnd}>
                <Player 
                    src={IdlePage}
                    loop
                    autoplay
                />
            </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services/wash" element={<Wash/>} />
          <Route path="/services/drop" element={<Drop/>} />

          <Route path="/inputnumber" element={<InputNumber/>} />
          <Route path="/inputotp" element={<InputOTP/>} />
          <Route path="/opendoor" element={<OpenDoor/>} />
          <Route path="/doorsizes" element={<OpenDoor/>} />

          <Route path="/services/wash/washandfold" element={<Washandfold/>} />
          <Route path="/services/wash/shoecare" element={<Shoecare/>} />
          <Route path="/services/wash/bagcare" element={<Bagcare/>} />
          <Route path="/services/wash/linencare" element={<LinenCare/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
