import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import img from '../../assets/mainpage.jpg'

const carousel = () => {
	const CarouselDiv = styled(Carousel)`
		margin-top:5rem
	`;
	const CarouselItemDiv = styled(Carousel.Item)`
		height: 450px;
	`;
  
	return (
		<CarouselDiv id="top" className="mb-5" interval="2000" indicators="false">
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={img}
          alt="First slide"
          fluid="true"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={img}
					alt="Second slide"
          fluid="true"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={img}
					alt="Third slide"
          fluid="true"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption>
			</CarouselItemDiv>
		</CarouselDiv>
	);
};

export default carousel;
