import React,{useState} from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { addItem }from '../../redux/cart/cart.actions.js';
import {Button,Modal} from 'react-bootstrap'
import './collection-item.styles.scss';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCurrentUser } from '../../redux/user/user.selector.js';
import { createStructuredSelector } from 'reselect';
import FormInput from '../../components/form-input/form-input.component';




const CollectionItem = ({item, addItem,currentUser}) => {

  const dispatch = useDispatch();

	const history = useHistory();


  const [show,setShow]=useState(false);
  const [razorpayID, setRazorpayID] = React.useState(undefined);
  const [deliveryData,setDeliveryData]=useState({
    name:"", address1:"",address2:"",phone:"",email:"",city:"",pincode:"",state:""
  })
  const handleChange=(e)=>{
    let name1=e.target.name;
    let value=e.target.value;
    setDeliveryData((pre)=>{
      return {...pre,[name1]:value}
    })


  }
  const payment = (e, amount, name, desc, prefill, notes) => {
    console.log(e);
		e.preventDefault();
		var options = {
			key: "rzp_test_MFxacFpWLjhjtF",
			key_secret: "ZNIQ0Cjtqch5ReZfnEY1hCTE",
			amount: amount,
			currency: "USD",
			// order_id: "order_9A33XWu170gUtm",
			name: name,
			description: desc,
			handler: function (response) {
				setRazorpayID(response.razorpay_payment_id);
				// placeOrder(response.razorpay_payment_id, amount);
        setShow(false);
				return;
			},
			prefill,
			notes,
			theme: {
				color: "#3399cc"
			},
			timeout: 900
		};
		var pay = new window.Razorpay(options);
		pay.open();
		pay.on("payment.failed", function (response) {
      alert("Payment Failed")
			alert(response.error.code);
			alert(response.error.description);
			history.push("/");
			alert(response.error.source);
			alert(response.error.step);
			alert(response.error.reason);
			alert(response.error.metadata.order_id);
			alert(response.error.metadata.payment_id);
		});
	};


  
    const {name, price, imageUrl} = item;
    return (
      <>
       <Modal show={show} onHide={()=>{setShow(false)}}>
    <Modal.Header closeButton>
      <Modal.Title>Fill  the details</Modal.Title>
    </Modal.Header>
    <form>
    <Modal.Body>
      <FormInput onChange={handleChange} name='name' required placeholder='Name'/>
      <FormInput onChange={handleChange} name='phone' type='number'required placeholder='phone number'/>
      <FormInput onChange={handleChange} name='address1' required placeholder='Address 1'/>
      <FormInput onChange={handleChange} name='address2' required placeholder='Address 2'/>
      <FormInput onChange={handleChange} name='email' required type='email' placeholder='email'/>
      <FormInput onChange={handleChange} name='city' required placeholder='city'/>
      <FormInput onChange={handleChange} name='state' required placeholder='state'/>
      <FormInput onChange={handleChange} name='pincode' type='number' required placeholder='PIN CODE'/>
      {/* <FormInput placeholder='Name'/> */}
    </Modal.Body>
    <Modal.Footer>
      <CustomButton onClick={() =>{setShow(false)}}>Cancel</CustomButton>
      {
        currentUser!=null? <CustomButton  type='submit' onClick={(e)=>{e.preventDefault();payment(e,100*price,{name:deliveryData.name,email:currentUser.email,contact:deliveryData.phone},{
          userId: currentUser.id,
          email: currentUser.email,
          mobileNumber: deliveryData.phone,
        })}}>Proceed for payment</CustomButton>:
        <CustomButton onClick={()=>{alert("Please login to buy items!!!!!")}}>Proceed for payments</CustomButton>
      }
     
      
    </Modal.Footer>
    </form>
  </Modal>

      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name"> {name} </span>
          <span className="price"> {price} </span>
          
        </div>
        <CustomButton className='custom-button custom-button2' onClick={()=>{setShow(true)}} inverted >BuyNow</CustomButton>
        <CustomButton onClick={ () =>  addItem(item)} inverted>Add to cart</CustomButton>
        
      </div>
      </>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
})

export default connect(mapStateToProps, mapDispatchToProps) (CollectionItem);