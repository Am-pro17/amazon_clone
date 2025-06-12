import classes from './Cart.module.css' 
import LayOut from '../../components/LayOut/LayOut'
import { useContext } from 'react';
import { DataContext } from './../../components/DataProvider/DataProvider';
import Single_product from './../../components/Product/Single_product';
import CurrencyFormat from './../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from './../../utility/actionType';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function Cart() {
  const { state, dispatch } = useContext(DataContext); 
  const { basket, user } = state; 
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)
  const increment = (item)=>{
    dispatch(
      {
        type:Type.ADD_TO_BASKET,
        item
      }
    )
  }
  const decrement = (id)=>{
    dispatch(
      {
        type:Type.REMOVE,
        id
      }
    )
  }
  return (
    <LayOut>
            <section  className={classes.container} >
              <div className={classes.cart_container}>
                {/* <h2>Cart page</h2>    */}
                  <h3>Your Shopping List</h3>
                  <hr />
                  {
                    basket?.length==0?(<p>Opps No item in your cart</p>):(
                      basket.map((item,i)=>{
                       return(
                       <section className={classes.cart_product} key={i}>

                        <Single_product key={i}
                        product={item}
                         desc={true}
                        />
                        <div>
                          <button onClick={()=>increment(item)}><SlArrowUp /></button>
                          <div>{item.amount}</div>
                          <button onClick={()=>decrement(item.id)}><SlArrowDown /></button>
                        </div>

                    </section>
                       ) 
                      })
                    )
                  }
              </div>
              <div>
                {
                  basket?.length !==0&&(
                    <div className={classes.subtotal}>
                      <div>
                        <p>Subtotal {basket.length==1?("item :"):("items :")}</p>
                        <CurrencyFormat amount={total}/>
                      </div>
                      <span>
                            <input type="checkbox"/>
                            <small>This order contains a gift </small>
                        </span>
                        <Link to="/payments">Continue to Checkout</Link>
                    </div>
                  )
                }
              </div>
              </section>
    </LayOut>
  )
}

export default Cart