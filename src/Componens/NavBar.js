// import React from 'react'
import PropTypes from "prop-types"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function NavBar(props) {
  const [style, setstyle] = useState({
    display: "none"
  });

  let hide = () => {

    style.display === "none" ? setstyle({ display: "flex" }) : setstyle({ display: "none" })

  }

  return (
    <>

      <nav className="mobnav">

        <div>


          <div className="center" style={{ letterSpacing: "3px" }}>
            <div>

              <img src="../favicon.ico" alt="" height='30px' /><span style={{ color: "greenyellow", fontSize: "20px" }}>Text</span><span style={{ color: "white", fontSize: "20px" }}>Utils</span>


            </div>






            <div className="icon">

              <div className="items" style={style}>

                <p><Link to={"/"}>Home</Link></p>
                <p><Link to={"/about"}>About</Link></p>

              </div>
              <div onClick={hide} className="cli">

                <FormatListBulletedIcon />
              </div>


            </div>




          </div>

        </div>

      </nav>



      <nav className="nav">

        <h1 className="title"><span style={{ color: "greenyellow", marginLeft: '3rem' }}> Text</span><span style={{color:"inherit"}}>Utils</span></h1>




        <div className="about">

          <Link to={"/"}> <h3>Home</h3></Link>
          <Link to={"/about"}><h3>About</h3></Link>
        </div>



      </nav>
    </>

  )



}
NavBar.prototype = {
  //to hardcode the datatype tof the props

  title: PropTypes.string.isRequired,  // isrequired is used when props are required compolsury
  about: PropTypes.string,

}

NavBar.defaultProps = {   // if props are not passed these will be the default prop value
  title: " set title here",
  about: "set about here"
}

export default NavBar