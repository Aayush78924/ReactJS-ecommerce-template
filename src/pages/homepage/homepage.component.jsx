import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import AboutUs from "../../components/AboutUs/AboutUs";
import Rooms from "../../components/Rooms/Rooms";
import ContactUs from "../../components/ContactUs/ContactUs";
// import AnimatedComponent from "../components/Animated-component/AnimatedComponent";
import AnimatedComponent from "../../components/Animated-component/AmimatedComponent"
// import "bootstrap/dist/css/bootstrap.min.css";

// import Directory from '../../components/directory/directory.component'

import "./homepage.styles.scss";

const HomePage = () => (
  // <div className="homepage">
  //   <Directory />
  // </div>
  <>
  <div style={{width:'100%',paddin:'5px'}}>
					{/* <Navbar /> */}
          <center>
          <Carousel />
          <AnimatedComponent/>
          <AboutUs />
          <Rooms />
          <ContactUs />
          </center>
				
			</div>
  </>


);

export default HomePage;
