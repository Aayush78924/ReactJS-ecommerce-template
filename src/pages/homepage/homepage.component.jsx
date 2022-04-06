import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import AboutUs from "../../components/AboutUs/AboutUs";
import Rooms from "../../components/Rooms/Rooms";
import ContactUs from "../../components/ContactUs/ContactUs";
import SimpleReactFooter from "simple-react-footer";
// import AnimatedComponent from "../components/Animated-component/AnimatedComponent";
import AnimatedComponent from "../../components/Animated-component/AmimatedComponent"
// import "bootstrap/dist/css/bootstrap.min.css";

// import Directory from '../../components/directory/directory.component'

import "./homepage.styles.scss";

const HomePage = () => 
{
  const description = "EZ-Masala has revolutionized the current way of cooking in the world of Indian kitchens. For this, no long-life expertise is required to make vegetables in the kitchen. You become a super chef of your home on your own for a lifetime just by watching the video once for all you have to make."
  const title = "E-Z Masala";
  const columns = [
    {
        title: "Contact Details",
        resources: [
            {
                name: "Mobile\n9910 387 487",
                link:"#"
            },
            {
              name: "ezmasala.it@gmail.com",
              link:"#"
          }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "#"
            },
            {
                name: "Terms",
                link: "#"
            }
        ]
    },
    {
        title: "Location",
        resources: [
            {
                name: `B1-337, First Floor, Janakpuri
                New Delhi - 110058`,
                link: "#"
            },
            
        ]
    }
 ];


return (

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
          <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="black"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />
				
			</div>
  </>


);
}
export default HomePage;
