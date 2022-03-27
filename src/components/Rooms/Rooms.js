import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../../assets/SpiceProduct1.jpg'
import img2 from '../../assets/SpiceProduct2.jpg'
import img3 from '../../assets/SpiceProduct3.jpg'
import img4 from '../../assets/SpiceProduct4.jpg'
import img5 from '../../assets/SpiceProduct5.jpg'
import img6 from '../../assets/SpiceProduct6.jpg'
import img7 from '../../assets/SpiceProduct7.jpg'
import img8 from '../../assets/SpiceProduct8.jpg'
import img9 from '../../assets/SpiceProduct9.jpg'
import img10 from '../../assets/SpiceProduct10.jpeg'




const Rooms = () => {
	const imgsArray = [
			{ src: img1, alt: "Deluxe Double Room" },
			{ src: img2, alt: "Deluxe Single Room" },
			{ src: img3, alt: "Deluxe Twin Room" },
			{ src: img4, alt: "Double Room" },
			{ src: img5, alt: "Single Room" },
			{ src: img6, alt: "Twin Room" },
			{ src: img7, alt: "Deluxe Double Room" },
			{ src: img8, alt: "Deluxe Single Room" },
			{ src: img9, alt: "Deluxe Twin Room" },
			{ src: img10, alt: "Deluxe Twin Room" }

		
		// [
		// 	
		// ],
		// [
		// 	{ src: {img}, alt: "Double Room" },
		// 	{ src: {img}, alt: "Single Room" },
		// 	{ src: {img}, alt: "Twin Room" }
		// ],
		// [
		// 	{ src: {img}, alt: "Deluxe Double Room" },
		// 	{ src: {img}, alt: "Deluxe Single Room" },
		// 	{ src: {img}, alt: "Deluxe Twin Room" }
		// ],
		// [
		// 	{ src: {img}, alt: "Double Room" },
		// 	{ src: {img}, alt: "Single Room" },
		// 	{ src: {img}, alt: "Twin Room" }
		// ]
	];
	const JumbotronDiv = styled(Jumbotron)`
		backgroundColor: #E6E4DC;
		// height: 400px;
		width:95%;
		padding:20px;
		margin:20px
		
	`;
	const TextDiv = styled.div`
		margin-top: 100px;
	`;
	const GridDiv = styled(Grid)`
		@media screen and (max-width: 800px) {
			width: 450px;
			height: 300px;

		}
	`;
	const CaptionDiv = styled.div`
		position: absolute;
		right: 15%;
		top: 45%;
		left: 15%;
		z-zndex: 10;
		color: #fff;
		text-align: center;
	`;
	const ImgGridDiv = styled.div`
		display:flex;
		flex-wrap:wrap;
		@media screen and (max-width: 800px) {
			width: 150px !important;
			height: 150px !important;
		}
	`;
	const ImgStyle = styled.img`
		width: 200px;
		height: 200px;
		padding:2px;
		@media screen and (max-width: 800px) {
			width: 150px;
			height: 150px;
		}
	`;
const Cell = ({ p}) => 
(
	<ImgGridDiv style={{display:'flex',flexDirection:'row'}}>
		<ImgStyle
			src={p.src}
			alt={p.alt}
		/>
		{/* <CaptionDiv>
			<p>{imgsArray[rowIndex][columnIndex].alt}</p>
		</CaptionDiv> */}
	</ImgGridDiv>
);
	return (
		<JumbotronDiv
			id="rooms"
			className="pt-0 pb-0"
			fluid
			
		>
			<div className="txtali-l" style={{padding:'20px'}}>
				<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'start',flexWrap:'wrap'}}>
					<Col md={{ span: 3, offset: 1 }}>
						<TextDiv>
							<h5 className="title"> Our Products:</h5>
							<p className="text">
								Nova Sky comprises 67 suites. Each one artfully
								combines the ultimate in luxury, comfort and
								sophistication. Every living space, gives a new
								definition to opulence and splendour, which
								contemporary finishes and premium facilities.
							</p>
						</TextDiv>
					</Col>
					<div md={7}>
					{/* <GridDiv
						className="Grid"
						columnCount={3}
						columnWidth={200}
						height={400}
						rowCount={2}
						rowHeight={200}
						width={700}
					>
						{Cell}
					</GridDiv> */}
					{
						imgsArray.map((p,idx)=>{
							console.log(p)
							return (
								// <ImgStyle p={p}>
								// </ImgStyle>
								<img  style={{margin:'10px',height:'250px',width:'220px'}} src={p.src}/>
								
							)
						})
					}
					</div>
	
			</div>
			</div>
		</JumbotronDiv>
	);
};

export default Rooms;
