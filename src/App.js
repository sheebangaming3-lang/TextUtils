import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

const [mode ,setMode] = useState('light');
const [alert, setAlert] = useState(null)

const showAlert = (message , type) =>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
}

const toggleMode = () =>{
  if (mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#0e2677'
    showAlert("Dark mode has been Enabled", "success")
  } 
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been Enabled", "success")
  }
}

const changeBg = (color) => {
  document.body.style.backgroundColor = color
}

  return (

<BrowserRouter>
<Navbar title="TextUtils2" AboutText="About" mode={mode} toggleMode={toggleMode} changeBg={changeBg}/>
<Alert alert={alert} />

<div className='container my-3'>
<Routes>

<Route
 exact path="/" 
 element={
 <Text
  showAlert={showAlert}
  heading="TextUtils - word counter, character character , remove extra spaces" 
  mode={mode}
  />
 }
/>

<Route exact path="/about"
 element={<About   mode={mode}/>} />

</Routes>
</div>

</BrowserRouter>

  );
}

export default App;