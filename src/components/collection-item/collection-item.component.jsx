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
import {toast,ToastContainer } from 'react-toastify';
import {firestore} from '../../firebase/firebase.utils.js'
import axios from 'axios'
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
    orderArr.push({
      name: item.name,
      sku: item.id,
      // size: p.Selectedsize,
      units: 1,
      selling_price: item.price,
      // discount: "",
      tax: "",
      hsn: 0
    }
  )
		await firestore.collection('Admin').where("__name__",'==','doc1').get().then(res=>{orderSD=res.docs[0]})
		// cartItems.forEach((p) => {
		// 	console.log(p)
		// 	orderArr.push({
		// 		name: p.name,
		// 		sku: p.id,
		// 		// size: p.Selectedsize,
		// 		units: p.quantity,
		// 		selling_price: p.price,
		// 		// discount: "",
		// 		tax: "",
		// 		hsn: 0
		// 	});
		// });
		let oid = makeid(5);
		let date_format = new Date();
		let req = {
			order_id: oid,
			order_date: date_format.getDate() + "-" + date_format.getMonth() + "-" + date_format.getFullYear(),
			pickup_location: "Primary",
			channel_id:"",
			// comment: details?.comment ? details.comment : "",
			billing_customer_name: deliveryData.name,
			billing_last_name: "",
			billing_address: deliveryData.address1,
			billing_address_2: deliveryData.address2,
			billing_city: deliveryData.city,
			billing_pincode: deliveryData.pincode,
			billing_state: deliveryData.state,
			billing_country: deliveryData.country,
			billing_email: currentUser.email,
			billing_phone: deliveryData.phone,
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
			total_discount: 0,
			sub_total: amount / 100,
			length: 1,
			breadth: 1,
			height: 1,
			weight: 2
		};
		// await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
		// 	method: "POST",
		// 	mode: "no-cors",
		// 	cache: "no-cache",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		"Access-Control-Allow-Origin": "*",
		// 		"Access-Control-Allow-Credentials":true,
		// 		"Access-Control-Allow-Methods": "POST",
		// 	},
		// 	body: JSON.stringify({
		// 		// email: orderSD.username,
		// 		// password: orderSD.password
		// 		email:'q.ashok@gmail.com',
		// 		password:'Kushagra.1'
		// 	})
		// })
		await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login',{email:'shiprocketspiuser1@gmail.com',
				password:'shiprocket@123'})
			.then(async (val) => {
				console.log(val)
				// await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
				// 	method: "POST",
				// 	mode: "no-cors",
				// 	cache: "no-cache",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		"Access-Control-Allow-Origin": "*",
				// 		"Access-Control-Allow-Credentials":true,
				// 		"Access-Control-Allow-Methods": "POST",
				// 		Authorization: "Bearer "+val.data.token
				// 	},
				// 	body: JSON.stringify(req)
				// }).then(res=>res.json())
				console.log(req)
				await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',req,{headers:{Authorization: 'Bearer '+val.data.token}})
					.then(async (r) => {
						let values = {
							order_id: r.data.order_id,
							shipment_id: r.data.shipment_id,
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
						
						await firestore.collection("users").where('__name__','==',currentUser?.id).get().then(res=>{
							console.log(res.docs)
							user=res.docs[0].data();
						})
						let ordersList;
						if(user.orders==undefined)
						{	console.log("undefined")
							ordersList=[];
							ordersList.push(values)
							await firestore.collection('users').doc(currentUser?.id).update(
								{
								...user,
								orders:ordersList,
							}).then(() => {
								// dispatch(saveUserData({ ...currentUser, orders: [...currentUser.orders, values], cart: [] }));
								toast.success("OrderPlaced Successfully.");
								toast.success("OrderID " + r.data.order_id);
								// history.push("/");
                toast.success("OrderAdded successfully");
							}).catch(() => {
								toast.error("Failed to updated user data.");
								toast.error("Please note this payment ID for any issue " + razorpay_id);
								toast.error("Please note this order ID for any issue " + r.data.order_id);
							});
						}
						else{
							console.log("Defined")
							ordersList=[...user.orders];
							ordersList.push(values);
							console.log({
								...user,
								orders:ordersList,
							})
							await firestore.collection('users').doc(currentUser?.id).update(
								{
								...user,
								orders:ordersList,
							}).then(() => {
								// dispatch(saveUserData({ ...currentUser, orders: [...currentUser.orders, values], cart: [] }));
								toast.success("OrderPlaced Successfully.");
								toast.success("OrderID " + r.data.order_id);
								// history.push("/");
                toast.success("Successfuly added order")
							}).catch(() => {
								toast.error("Failed to updated user data.");
								toast.error("Please note this payment ID for any issue " + razorpay_id);
								toast.error("Please note this order ID for any issue " + r.data.order_id);
							});
						}

						
							
							
					})
					.catch((err) => {
						console.log(err)
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
				placeOrder(response.razorpay_payment_id, amount);
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
      <ToastContainer/>
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
      <FormInput onChange={handleChange} name='country' required placeholder='country'/>
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

      <div className="collection-item shadow" >
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