import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img from '../../assets/contactus.png'
import {firestore} from '../../firebase/firebase.utils.js'


const ContactUs = () => {
	const [validated, setValidated] = useState(false);
	const [data,setData]=useState({
		name:"",
		email:"",
		comment:""
	})


  const handleSubmit = async(event) => {
    const form = event.currentTarget;
	event.preventDefault();
    if (form.checkValidity() === false) {
      alert("Please fill all the details!!!!")
      event.stopPropagation();
    }
	else{
	console.log(data)
    setValidated(true);
	await firestore.collection('contactus').add(data)
	.then((res)=>{
		console.log(res)
		alert("Thanks for you response we will get back to you shortly.")
	}).catch("Could not save the data please try again!!")
	}
	setValidated(true);
  };
  const changeHandler=(e)=>{
		setData(pre=>{return {...pre,[e.target.name]:e.target.value}})
  }

	return (
		<Container id="contact-us" className="mb-5 txtali-l">
			<Row>
				<Col md={{ span: 4 }}>
					<img
						alt=""
						src={img}
						width="200"
						height="250"
						className="d-inline-block align-top"
					/>
				</Col>
				<Col md={8}>
					<h5 className="title">Contact us</h5>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group controlId="formGroupPassword">
							<Form.Control style={{margin:'2px'}}
								required
								type="text"
								placeholder="Your name"
								name='name'
								onChange={changeHandler}
							/>
							<Form.Control.Feedback  style={{margin:'2px'}} type="invalid">
             	 Please enter your name.
            	</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Control style={{margin:'2px'}}
								required
								type="email"
								placeholder="Your email address"
								name='email'
								onChange={changeHandler}
							/>
							<Form.Control.Feedback  style={{margin:'2px'}} type="invalid">
             	 Please enter a valid email address.
            	</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Control style={{margin:'2px'}}
								required
								type="text"
								placeholder="Your message" 
								as="textarea" 
								aria-label="With textarea"
								name='comment'
								onChange={changeHandler}
							/>
							<Form.Control.Feedback  style={{margin:'2px'}} type="invalid">
             	 Please enter your message.
            	</Form.Control.Feedback>
						</Form.Group>
						<Col md={{ span: 2, offset: 10 }}>
							<Button type="submit" className="customBtn">
								Send
							</Button>
						</Col>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactUs;
