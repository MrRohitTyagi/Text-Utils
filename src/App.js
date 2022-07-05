import './App.css';
import NavBar from './Componens/NavBar';
import TextForm from './Componens/TextForm';
import About from './Componens/About';
import React, { useState } from 'react'
import Alert from './Componens/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [alert, setAlert] = useState(null);
  const [buttonText, setbuttonText] = useState('Light Mode');
  const [style, setstyle] = useState({

    backgroundColor: "#313131",
    color: "white"


  }
  );

  let AlertMsg = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 2000);

  }

  let handlestyle = () => {

    if (style.backgroundColor === '#313131') {



      setstyle({

        backgroundColor: "white",
        color: "#313131"



      })
      setbuttonText("Dark Mode")

      AlertMsg("Switched to Lightmode", "success")
      document.title = "TextUtils - Lightmode"
    }
    else {
      AlertMsg("Switched to Darkmode", "success")
      setstyle({

        backgroundColor: "#313131",
        color: "white"



      })
      setbuttonText("Light Mode")
      document.title = "TextUtils - DarkMode"
    }


  }

  return (

    <div className='body' style={style}>



      <div className="form-check form-switch abs">


        <input onClick={handlestyle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

        <h4>{buttonText}</h4>


      </div>

      <BrowserRouter>

        <NavBar title="Textutils" about="about" />

        <Routes>

          <Route  path='/' element={<div className="container">

            <Alert alert={alert} />

            {/* passing function as a prop(alertmsg) it can be called from the  component */}
            <TextForm showalert={AlertMsg} heading="Enter Your Text Here" />
          </div>} />

            <Route path='/about' element={<About />}/>
        </Routes>


        

      </BrowserRouter>
    </div>

  );
}

export default App;
