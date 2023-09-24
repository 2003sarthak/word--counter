//import logo from './logo.svg';
//import './App.css';//w eare importing css which help us to improt css in our react aap
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; 

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
          setAlert(null);
          
        }, 2000);
  }
  const[mode,newMode]=useState("light");
  const togglemode=()=>{
    if(mode==='light'){
      newMode("dark");
      document.body.style.backgroundColor="#000d3b";
      showAlert(" Changed into dark mode","success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      newMode("light");
      document.body.style.backgroundColor="white";
      showAlert(" Changed into light mode","success");
      document.title="TextUtils-Light Mode";
    }
  }
  return (
    //the next written is JSX till return is closed andjsx is that we can write html and js{in curly brackets} both in this return portion directly
    //in JSX we will use "className" instead is class.And if we want to use for in html we will use "htmlFor"
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">         
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} >
            </Route>
            <Route exact path="/home" element={<Textforms showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>
            </Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
