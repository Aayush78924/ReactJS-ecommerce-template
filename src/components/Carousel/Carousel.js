import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import img from '../../assets/mainpage.jpg'
import img1 from '../../assets/aboutus.jpeg'
import img2 from '../../assets/slider1.jpeg'
import img3 from '../../assets/slider2.jpeg'
import img4 from '../../assets/spice6.jpg'
import img5 from '../../assets/spice4.jpg'
import img6 from '../../assets/spice5.jpg'



const carousel = () => {
	const CarouselDiv = styled(Carousel)`
	`;
	const CarouselItemDiv = styled(Carousel.Item)`
		height: 650px;
		width:90vw!important
		
	`;
  
	return (
    <center>
    <div style={{width:'100vw'}}>
    <Carousel variant='dark' style={{width:'100%'}}>
        <Carousel.Item interval={5000}>
            <img src={img4} style={{height:'73vh',width:'100%'}}/>
            <Carousel.Caption>
 	 <TextDiv>No additives
  <p style={{fontSize:'30px'}}>We do not use any additives to give our spice extra taste and colour!!!!!</p>
  </TextDiv>
      
     </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img src={img5}  style={{height:'73vh',width:'100%'}}/>
            <Carousel.Caption>
 	 <TextDiv>Fastest home Delivery
  <p style={{fontSize:'30px'}}>We do not use any additives to give our spice extra taste and colour!!!!!</p>
  </TextDiv>
      
     </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img src={img6}  style={{height:'73vh',width:'100%'}}/>
            <Carousel.Caption>
 	 <TextDiv>Spice King
  <p style={{fontSize:'30px'}}>Now all your spices available at your soor step!!!!!!!</p>
  </TextDiv>
      
     </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
    
</div>
</center>
		
		// <CarouselDiv id="top" className="mb-5"style={{width:'100vw',margin:'5px'}} interval="2000" indicators="false">
		// 	<CarouselItemDiv style={{margin:'0'}}>
		// 		<img
		// 			className="d-block w-100"
		// 			src={img5}
		// 			// style={{heigth:'100%',width:'100vw'}}
        //   alt="First slide"
        //   fluid="true"
		// 		/>
		// 	</CarouselItemDiv>
		// 	<CarouselItemDiv style={{margin:'0'}}>
		// 		<img
		// 			className="d-block w-100"
		// 			src={img4}
		// 			style={{heigth:'100%',width:'100vw'}}
        //   alt="First slide"
        //   fluid="true"
		// 		/>
		// 	</CarouselItemDiv>
			
		// 	<CarouselItemDiv style={{margin:'0'}}>
		// 		<img
		// 			className="d-block w-100"
		// 			src={img6}
		// 			style={{heigth:'100%',width:'100vw'}}
        //   alt="First slide"
        //   fluid="true"
		// 		/>
		// 	</CarouselItemDiv>
		// </CarouselDiv>

    //SLider with text is below
// 		<Carousel style={{width:'100%',margin:'10px'}}>
//   <Carousel.Item style={{width:'100%'}}>
//     <img
//       className="d-block w-100"
//       src={img4}
// 	  style={{heigth:'100%',width:'100%'}}
//       alt="First slide"
//     />
// 	 <Carousel.Caption>
//       <div style={{ position: 'absolute',
//   bottom: '100px',
//   fontSize:'100px',
//   fontWeight:'100',
//   left: '5%',
//   zIndex: '20',
//   color: 'white'
//  }}>Spice King
//  <p style={{fontSize:'30px'}}>One stop for all of your favourite spices!!!!!!</p>
//  </div>
      
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item style={{width:'100%'}}>
//     <img
//       className="d-block w-100"
//       src={img5}
// 	  style={{heigth:'100%',width:'100%'}}
//       alt="Second slide"
//     />
// 	 <Carousel.Caption>
// 	 <div style={{ position: 'absolute',
//   bottom: '100px',
//   fontSize:'100px',
//   fontWeight:'100',
//   left: '5%',
//   zIndex: '20',
//   color: 'white'
//  }}>No additives
//  <p style={{fontSize:'30px'}}>We do not use any additives to give our spice extra taste and colour!!!!!</p>
//  </div>
      
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item style={{width:'100%'}}>
//     <img
//       className="d-block w-100"
//       src={img6}
// 	  style={{heigth:'100%',width:'100%'}}
//       alt="Third slide"
//     />
// 	 <Carousel.Caption>
   
// 	 <div style={{ position: 'absolute',
//   bottom: '100px',
//   fontSize:'100px',
//   fontWeight:'100',
//   left: '5%',
//   zIndex: '20',
//   color: 'white'
//  }} >Fastest home Delivery
//  <p style={{fontSize:'30px'}}>Now all your spices available at your soor step!!!!!!!</p>
//  </div>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
	);
};

export default carousel;

const TextDiv=styled.div`
   position: relative;
   bottom: 100px;
   font-size:6em;
   font-weight:150;
//    left: 5%;
   font-family:Archivo Black;
   text-shadow: 4px 4px 4px black;
   z-index: '20';
   color: 'white';
   @media screen and (max-width: 600px) {
       font-size:3em;
   }
`
