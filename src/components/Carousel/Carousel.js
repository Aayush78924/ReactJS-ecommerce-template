import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import img from '../../assets/mainpage.jpg'
import img1 from '../../assets/aboutus.jpeg'
import img2 from '../../assets/slider1.jpeg'
import img3 from '../../assets/slider2.jpeg'
import img4 from '../../assets/spice3.jpg'
import img5 from '../../assets/spice4.jpg'
import img6 from '../../assets/spice5.jpg'



const carousel = () => {
	const CarouselDiv = styled(Carousel)`
	`;
	const CarouselItemDiv = styled(Carousel.Item)`
		height: 600px;
		width:100vw!important
		
	`;
  
	return (
		
		<CarouselDiv id="top" className="mb-5"style={{width:'100vw',margin:'5px'}} interval="2000" indicators="false">
			<CarouselItemDiv style={{margin:'0'}}>
				<img
					className="d-block w-100"
					src={img5}
					style={{heigth:'100%',width:'100vw'}}
          alt="First slide"
          fluid="true"
				/>
			</CarouselItemDiv>
			<CarouselItemDiv style={{margin:'0'}}>
				<img
					className="d-block w-100"
					src={img4}
					style={{heigth:'100%',width:'100vw'}}
          alt="First slide"
          fluid="true"
				/>
			</CarouselItemDiv>
			
			<CarouselItemDiv style={{margin:'0'}}>
				<img
					className="d-block w-100"
					src={img6}
					style={{heigth:'100%',width:'100vw'}}
          alt="First slide"
          fluid="true"
				/>
			</CarouselItemDiv>
			{/* <CarouselItemDiv>
				<img
					className="d-block w-100"
					src={img2}
					alt="Second slide"
          fluid="true"
				/>

				<Carousel.Caption>
					{/* <h3>Second slide label</h3> */}
				{/* </Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={img3}
					alt="Third slide"
          fluid="true"
				/>

				<Carousel.Caption> */}
					{/* <h3>Third slide label</h3> */}
				{/* </Carousel.Caption>
			</CarouselItemDiv> */} 
		</CarouselDiv>
	);
};

export default carousel;
