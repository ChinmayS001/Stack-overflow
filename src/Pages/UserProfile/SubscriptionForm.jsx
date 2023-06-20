import {useState} from 'react';
import React from 'react'
import {getOrder,getKey,paymentVerification} from '../../api'
import { useDispatch } from 'react-redux';
import { setCurrentUser,getCurrentUserA } from '../../actions/currentUser';
//import Razorpay from 'razorpay';
const SubscriptionForm = ({ currentUser, setSub }) => {
  //console.log(currentUser.result.Q_rem);
  const [noQ, noQUpd] = useState(currentUser.result.Q_rem);
  const dispatch = useDispatch();

        function close(none){
        //  console.log(noQ);
          currentUser.result.Q_rem = noQ;
          dispatch({
            type: "FETCH_CURRENT_USER",
            payload: currentUser,
          });
          setSub(false);
        }


        function loadScript(src) {
          return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
              resolve(true);
            };
            script.onerror = () => {
              resolve(false);
            };
            document.body.appendChild(script);
          });
        }



        async function displayRazorpay(){
          const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
          );
      
          if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            console.log('Razorpay SDK failed to load. Are you online?');
            return;
          }
        }
           const options = {
            key: '<YOUR RAZORPAY KEY>', // Enter the Key ID generated from the Dashboard
            amount: '',
            currency: "INR",
            name: 'NullClass Corp.',
            description: 'Test Transaction',
            //image: 'https://example.com/your_logo',
            order_id: '',
            handler: async function (response) {
              const data = {
                //orderCreationId: order_id,
                
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              };
             
              const result = await paymentVerification(currentUser?.result?._id,data);
              if(!result){
                console.log('error');
                alert('error');return;
              }
              
              alert(result.data.message," log out and log in to update the changes");
              close(result.user);
            },
            prefill: {
              name: '<YOUR NAME>',
              email: 'example@example.com',
              contact: '9999999999',
            },
            notes: {
              address: 'Example Corporate Office',
            },
            theme: {
              color: '#61dafb',
            },
          };
      



          async function SilverSubscription(){
             noQUpd(5);
             console.log(noQ);
            await displayRazorpay();//console.log("Order");
            const result = await getOrder(currentUser?.result?._id,{amount:100});
            if (!result) {
              alert('Server error. Are you online?');
              return;
            }
            //const { amount, id: order_id, currency } = result.data;
            const key = await getKey();
            
            options.key = key.data.key.toString();
            options.order_id = result.data.order.id;
           // console.log(result.data.order.id);
           // console.log(options.order_id);
            options.amount =10000;
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          
          }





          async function GoldSubscription(){
            noQUpd(1000);
            await displayRazorpay();
            const result = await getOrder(currentUser?.result?._id,{amount:1000});
            if (!result) {
              alert('Server error. Are you online?');
              return;
            }
            //const { amount, id: order_id, currency } = result.data;
            const key = await getKey();
            //console.log(key.data.key); 
            options.key = key.data.key.toString();
            options.order_id = result.data.order.id;
           // console.log(result.data.order.id);
           // console.log(options.order_id);
            options.amount =100000;
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          }       



  return (
    <div>
        <div>
          <p>Test card number: 5267 3181 8797 5449, any CVV</p>
          <h2>Silver subscription</h2>
          <p>The price is 100 INR and you will be able to ask 10 question per day</p>
          <button onClick ={SilverSubscription} >Silver Subscription</button></div>
        <div>
          <h2>Gold subscription</h2>
          <p>The price is 1000 INR and you will be able to ask unlimited question per day</p>
          <button onClick={GoldSubscription}>Gold Subscription</button>
        </div>
        <button onClick={() => setSub(false)}>Cancel</button>
    </div>
  )
}

export default SubscriptionForm;