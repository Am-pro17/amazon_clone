import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import {Link} from 'react-router-dom'
import { Type } from './../../utility/actionType';
import { DataContext } from './../DataProvider/DataProvider';

function Single_product({product}) {
    let {title,image,description,category,rating,price,id} = product;
    
    const { state, dispatch } = useContext(DataContext); // Use Context
    let cartCounter = state.basket.length
    let location = useLocation()
    // console.log(location.pathname)
    
let show = true;
      let addtocart= ()=>{
        dispatch({
            type:Type.ADD_TO_BASKET,
            item:{
                title,image,description,category,rating,price,id
            } 
        })
      }

  return (
    <div className={classes.product__container}>
    <Link to={`/products/${id}`}>
        <img src={image} alt="" />
    </Link>
    <div>
        
        <h3>{title}</h3>
        <div className={classes.rating}>
            {/* rating */}
            <Rating value={rating?.rate} precision={0.5} />
            {/* counter */}
            <small>{rating?.count}</small>
        </div>
        <div>
            {/* price */}
            
            <CurrencyFormat amount={price}/>
        </div>
        <br />
        <br />
         {   
       ( location.pathname!="/cart")?(<button  className={`${classes.button} ${show==true}?${classes.show}:${classes.hide}`} onClick={addtocart}>
            add to cart
        </button>):(<br/>)
}
    </div>

</div>
  )
}

export default Single_product