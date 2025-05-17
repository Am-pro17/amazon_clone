import LayOut from '../../components/LayOut/LayOut'
import classes from "./Payment.module.css";
import { DataContext } from './../../components/DataProvider/DataProvider';
import { useContext, useState } from 'react';
import Single_product from './../../components/Product/Single_product';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from './../../components/CurrencyFormat/CurrencyFormat';
import {axiosInstance} from "../../Api/axios"
import { ClipLoader } from 'react-spinners';
import { db } from "../../utility/fireBase"
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Type } from './../../utility/actionType';

const Payment = () => {
  const { state, dispatch } = useContext(DataContext); 
  const { basket, user } = state; 
  const [processing,setProcessing] = useState()
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  let cartcounter = state.basket.length
  // console.log( state.user)

  const [error, setError] = useState("")

  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

  let handleChange =(e)=>{
    // console.log(e.error.message)
  e.error.message?setError(e.error.message):setError("")
  }

  let handlePayment = async (e) => {
    e.preventDefault()

    try {
      setProcessing(true)
      const response = await axiosInstance({
        method: "POST",
        url:`/payment/create?total=${total}`
      }) 
        //  console.log(response.data);
         const clinetSecret = response.data?.client_secret
         const paymentIntent = await stripe.confirmCardPayment(
          clinetSecret,
          {
            payment_method:{
                        card: elements.getElement(CardElement)
                      }
          }
         
         )
    
    
    // console.log(comfirmation)
    console.log(user.uid)
    const intent = paymentIntent.paymentIntent;

    await setDoc(
      doc(collection(db, "users", user.uid, "orders"), intent.id),
      {
        basket,
        amount: intent.amount,
        created: intent.created,
      }
    );
    
    // empty the state

    dispatch({type:Type.EMPTY_BASKET})
    
         
    setProcessing(false)
    navigate("/orders", {state:{msg :"you have placed new order"}})
        }


    
catch (err) {
  console.log(err)
  setProcessing(false)
}
  }
  return (
    <LayOut>
      {/* header */}
    <div className={classes.checkout} >Check out items ({cartcounter})</div>
    {/* payment method */}
    <section className={classes.payment}>

      {/* address */}
      <div className={classes.flexi}>
        <h3>Delivery address</h3>
          <div> 

          <div>{state?.user?.email}</div>
          <div>123 bomboclat</div>
          <div>addis, et</div>
          
          </div>
     
      </div>
      <hr />

      {/* product */}
      <div className={classes.flexi}>
        <h3>Review items and delivery</h3>
        <div>
          {
            state.basket.map((item,i)=>(

              <Single_product key={i} product={item} desc={true}/>

            ))
          }
        </div>
      </div>
      <hr />
      
      {/* card form */} 
      <div className={classes.flexi}>
        <h3>Payment methods</h3>
        <div className={classes.payment_card_container}>

          <div className={classes.payments_details}>
          <form onSubmit={handlePayment} action="">
            {error && (<small style={{color:"red"}}>{error}</small>)}
          <CardElement onChange={handleChange} />
          {/* price  */}

          <div className={classes.payment_price}>

            <div>
          <span style={{
            display:"flex",
            gap:"10px"
            }}><p>Total Price |</p><CurrencyFormat amount={total}/> </span>
            </div>
          <button type="submit">
            
            {
              processing?(
                <div className={classes.loading}>
                  <ClipLoader color="gray" size={12}/>
                  <p>Please wait ...</p>
                </div>
                  
              ):(
                "Pay Now"
              )
            }
            
            </button>
          </div>


          </form>
          </div>
            
        </div>
      </div>

    </section>
    </LayOut>
  )
}

export default Payment








