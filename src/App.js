
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
 import About from './components/About';
import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [Mode,setMode]=useState('light');//whether darkmode is enabled or not
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

  const toggleMode=()=>{
    if (Mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor="#060223"
      showAlert("Dark mode has been enabled","success");
      //document.title='WordSmith-Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success");
      //document.title='WordSmith-Light Mode'
    }
  }
  return (
    <>
    <Router>  
   <Navbar title="WordSmith" AboutText="About Us" Mode={Mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3npm ">
       <Routes>
       <Route exact path="/" element={ 
            <TextForm heading="Try WordSmith- word counter, character counter,Remove Extra spaces" Mode={Mode} showAlert={showAlert}/>}>
        </Route>    
          <Route exact path="/About" element={<About Mode={Mode} />}>
          </Route>
       </Routes>
          </div>
   </Router>
    </> 
  );

}

export default App;
