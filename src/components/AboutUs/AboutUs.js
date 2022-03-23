import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';
import img from '../../assets/aboutus.jpeg'
import img1 from '../../assets/logo.jpeg'


const aboutUs = () => {
	const TextDiv = styled.div`
		// margin-top: 100px;
		@media screen and (max-width: 500px) {
			margin-top: 50px;
		}
	`;
	return (
		<Container id="about-us" className="mb-5 txtali-l">
			<Row>
				<Col md={{ span: 6 }}>
					<img
						// className="d-block w-100"
						src={img1}
						alt="First slide"
						fluid="true"
						style={{padding:'10px',height:'300px',width:'250px'}}
					/>
				</Col>
				<Col md={{ span: 6 }}>
					<TextDiv>
						<h5 className="title">About us</h5>
						<p className="text">
							{/* A wonder vacation on dream. The beach with the
							breeze, enjoying the sunset in summer, and bathing
							the star at midnight. What an amazing thing when you
							wake up in the morning with the view formed the sky,
							the mountains and the ocean in front of you. You can
							totally relax yourself with the bright and tidy
							room, the astonishing scene, and our sweet service.
							Faraway from the noist city right now. */}
							EZ-Masala has revolutionized the current way of cooking in the world of Indian kitchens. For this, no long-life expertise is required to make vegetables in the kitchen. You become a super chef of your home on your own for a lifetime just by watching the video once for all you have to make.
							Easy-Masala is not merely a spice but it is an innovative concept, in which 21 herbs & spices have been blended at different temperatures through a complete tempering process to enhance the deliciousness and aroma of the food. EZ Masala greatly simplifies the traditional way of cooking, so easy as everyone feels competent enough to cook. It can also help to enhance the health and nutrition of the daily needs of the human body.
							Nowadays, in the increasing phase of economic development, the designs of houses are such that the effect of external weather inside the house is less, due to which there is less ventilation. When we cook our favorite food in the house, the whole house gets suffocated by the smell of smoke and cooked oil, due to which the smell of tempering also permeates every part of the house, such as open clothes, curtains, carpets, sofa, bed and not knowing where. With EZ-Masala this problem is also solved forever.
							Problems solution of combination and tempering of spices on daily basis
						</p>
					</TextDiv>
				</Col>
			</Row>
		</Container>
	);
};

export default aboutUs;
