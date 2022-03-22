import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../../assets/DeluxeDoubleRoom.jpg'


const Rooms = () => {
	const imgsArray = [
		[
			{ src: {img}, alt: "Deluxe Double Room" },
			{ src: {img}, alt: "Deluxe Single Room" },
			{ src: {img}, alt: "Deluxe Twin Room" }
		],
		[
			{ src: {img}, alt: "Double Room" },
			{ src: {img}, alt: "Single Room" },
			{ src: {img}, alt: "Twin Room" }
		],
		[
			{ src: {img}, alt: "Deluxe Double Room" },
			{ src: {img}, alt: "Deluxe Single Room" },
			{ src: {img}, alt: "Deluxe Twin Room" }
		],
		[
			{ src: {img}, alt: "Double Room" },
			{ src: {img}, alt: "Single Room" },
			{ src: {img}, alt: "Twin Room" }
		],
		[
			{ src: {img}, alt: "Deluxe Double Room" },
			{ src: {img}, alt: "Deluxe Single Room" },
			{ src: {img}, alt: "Deluxe Twin Room" }
		],
		[
			{ src: {img}, alt: "Double Room" },
			{ src: {img}, alt: "Single Room" },
			{ src: {img}, alt: "Twin Room" }
		]
	];
	const JumbotronDiv = styled(Jumbotron)`
		backgroundColor: "#E6E4DC",
		height: "400px"
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
		@media screen and (max-width: 800px) {
			width: 150px !important;
			height: 150px !important;
		}
	`;
	const ImgStyle = styled.img`
		width: 200px;
		height: 200px;
		@media screen and (max-width: 800px) {
			width: 150px;
			height: 150px;
		}
	`;
const Cell = ({ columnIndex, rowIndex, style }) => (
	<ImgGridDiv style={style}>
		<ImgStyle
			src={img}
			alt={imgsArray[rowIndex][columnIndex].alt}
		/>
		<CaptionDiv>
			<p>{imgsArray[rowIndex][columnIndex].alt}</p>
		</CaptionDiv>
	</ImgGridDiv>
);
	return (
		<JumbotronDiv
			id="rooms"
			className="pt-0 pb-0"
			fluid
		>
			<Container className="txtali-l">
				<Row>
					<Col md={{ span: 3, offset: 1 }}>
						<TextDiv>
							<h5 className="title">Rooms</h5>
							<p className="text">
								Nova Sky comprises 67 suites. Each one artfully
								combines the ultimate in luxury, comfort and
								sophistication. Every living space, gives a new
								definition to opulence and splendour, which
								contemporary finishes and premium facilities.
							</p>
						</TextDiv>
					</Col>
					<Col md={7}>
					<GridDiv
						className="Grid"
						columnCount={3}
						columnWidth={200}
						height={400}
						rowCount={6}
						rowHeight={200}
						width={600}
					>
						{Cell}
					</GridDiv>
					</Col>
				</Row>
			</Container>
		</JumbotronDiv>
	);
};

export default Rooms;
