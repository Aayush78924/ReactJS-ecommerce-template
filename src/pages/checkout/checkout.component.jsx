import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";
import { saveUserData } from "../../redux/user/userDataReducer";
import { selectCurrentUser } from '../../redux/user/user.selector.js';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
// import { collection, doc, setDoc,getDoc,updateDoc } from "firebase/firestore"; 
import {firestore} from '../../firebase/firebase.utils.js'
import {Modal} from 'react-bootstrap'
import CustomButton from '../../components/custom-button/custom-button.component';
import axios from 'axios'
import './checkout.styles.scss';
import FormInput from '../../components/form-input/form-input.component';

const CheckoutPage = ({cartItems, total,currentUser}) =>{ 
	const dispatch = useDispatch();

	const history = useHistory();

  const [show,setShow]=useState(false);
  const [razorpayID, setRazorpayID] = React.useState(undefined);
  const [deliveryData,setDeliveryData]=useState({
    name:"", address1:"",address2:"",phone:"",email:"",city:"",pincode:"",state:""
  })

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setDeliveryData((pre)=>{
      return {...pre,[name]:value}
    })


  }
  const test=async ()=>{
	  let x=await firestore.collection('Admin').where("__name__",'==','doc1').get().then(res=>{console.log(res.docs[0].data())})

  }
  function makeid(length) {
		var result = "";
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
  const placeOrder = async (razorpay_id, amount) => {
		console.log(firestore);
		let orderArr = [];
		let orderSD={};
		await firestore.collection('Admin').where("__name__",'==','doc1').get().then(res=>{orderSD=res.docs[0]})
		cartItems.forEach((p) => {
			orderArr.push({
				name: p.heading + " - " + p.Selectedsize,
				sku: p.productID,
				size: p.Selectedsize,
				units: p.Selectedquantity,
				selling_price: p.offerPrice,
				// discount: "",
				tax: "",
				hsn: orderSD.hsn
			});
		});
		let oid = makeid(5);
		let date_format = new Date();
		let req = {
			order_id: oid,
			order_date: date_format.getDate() + "-" + date_format.getMonth() + "-" + date_format.getFullYear(),
			pickup_location: orderSD.pickUpLocation,
			channel_id: orderSD.channelID,
			// comment: details?.comment ? details.comment : "",
			billing_customer_name: deliveryData.name,
			billing_last_name: "",
			billing_address: deliveryData.address1,
			billing_address_2: deliveryData.address2,
			billing_city: deliveryData.city,
			billing_pincode: deliveryData.zipCode,
			billing_state: deliveryData.state,
			billing_country: deliveryData.country,
			billing_email: currentUser.email,
			billing_phone: deliveryData.mnum,
			shipping_is_billing: true,
			shipping_customer_name: "",
			shipping_last_name: "",
			shipping_address: "",
			shipping_address_2: "",
			shipping_city: "",
			shipping_pincode: "",
			shipping_country: "",
			shipping_state: "",
			shipping_email: "",
			shipping_phone: "",
			order_items: orderArr,
			payment_method: "Prepaid",
			shipping_charges: 0,
			giftwrap_charges: 0,
			transaction_charges: 0,
			// total_discount: 0,
			sub_total: amount / 100,
			length: orderSD.length,
			breadth: orderSD.breadth,
			height: orderSD.height,
			weight: orderSD.weight
		};
		// await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
		// 	method: "POST",
		// 	mode: "no-cors",
		// 	cache: "no-cache",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		// "Access-Control-Allow-Origin": "*",
		// 		// "Access-Control-Allow-Credentials":true,
		// 		// "Access-Control-Allow-Methods": "POST",
		// 	},
		// 	body: JSON.stringify({
		// 		// email: orderSD.username,
		// 		// password: orderSD.password
		// 		email:'q.ashok@gmail.com',
		// 		password:'Kushagra.1'
		// 	})
		// })
		await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login',JSON.stringify({email:'q.ashok@gmail.com',
				password:'Kushagra.1'}),{'Content-Type':'application/json'})
			.then(async (val) => {
				// await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
				// 	method: "POST",
				// 	mode: "no-cors",
				// 	cache: "no-cache",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		"Access-Control-Allow-Origin": "*",
				// 		"Access-Control-Allow-Credentials":true,
				// 		"Access-Control-Allow-Methods": "POST",
				// 		Authorization': "Bearer " + val.token
				// 	},
				// 	body: JSON.stringify(req)
				// })
				await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',req)
					.then(async (r) => {
						let values = {
							order_id: r.order_id,
							shipment_id: r.shipment_id,
							orderItems: orderArr,
							// discount: subtotalPrice - totalOrderPrice(),
							totalValue: amount / 100,
							// coupon: discountCoupon,
							refOrderId: req.order_id,
							awb: "",
							razorpayID: razorpay_id,
							date: date_format.getDate() + "-" + date_format.getMonth() + "-" + date_format.getFullYear()
						};
						let user={};
						await firestore.collection("Users").doc(currentUser?.email).then(res=>{
							user=res.docs[0].data();
						})
						let ordersList;
						if(user.orders==undefined)
						{
							ordersList=[];
						}
						else{
							ordersList=[user.orders];
						}
						await firestore.collection('Users').where("email",'==',currentUser.email).update(
							{
							
							orders: [ordersList, values],
							cart: []
						})
							.then(() => {
								dispatch(saveUserData({ ...currentUser, orders: [...currentUser.orders, values], cart: [] }));
								toast.success("OrderPlaced Successfully.");
								toast.success("OrderID " + r.order_id);
								history.push("/");
							})
							.catch(() => {
								toast.error("Failed to updated user data.");
								toast.error("Please note this payment ID for any issue " + razorpay_id);
								toast.error("Please note this order ID for any issue " + r.order_id);
							});
					})
					.catch((err) => {
						toast.error("Something went wrong" + err);
						toast.error("Please note this payment ID for any issue " + razorpay_id);
					});
			})
			.catch((err) => {
				toast.error("Something went wrong" + err);
				toast.error("Please note this payment ID for any issue " + razorpay_id);
			});
	};

  const payment = (e, amount, name, desc, prefill, notes) => {
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
				placeOrder(response.razorpay_payment_id, amount);
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
      <CustomButton onClick={(e)=>{payment(e,total*100,{name:deliveryData.name,email:currentUser.email,contact:deliveryData.phone},{
										userId: currentUser.id,
										email: currentUser.email,
										mobileNumber: deliveryData.phone,
									})}}>Proceed for payment</CustomButton>
      
    </Modal.Footer>
    </form>
  </Modal>

  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
    cartItems.map(cartItem =>
        (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        )
    }
    <div className='total'>
        <span>TOTAL: ${total}</span>
    </div>
    <div>
    <CustomButton onClick={()=>{setShow(true)}}>CheckOut</CustomButton>
    <CustomButton onClick={test}>Test</CustomButton>

    </div>
  </div>
  </>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser,
    
})

export default connect(mapStateToProps)(CheckoutPage);