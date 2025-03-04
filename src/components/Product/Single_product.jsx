import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import {Link} from 'react-router-dom'


function Single_product({product}) {
    let {title,image,description,category,rating,price,id} = product
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
        <button className={classes.button}>
            add to cart
        </button>
    </div>

</div>
  )
}

export default Single_product