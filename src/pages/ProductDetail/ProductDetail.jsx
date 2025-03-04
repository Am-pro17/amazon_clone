import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {productUrl} from '../../Api/endpoints.js'
import Single_product from '../../components/Product/Single_product'
import classes from './ProductDetail.module.css'
import Loader from ".././../components/Loader/Loader"

function ProductDetail() {
  const [isLoading, setIsLoading] = useState(false)
  const [producti, setProduct] = useState({})
  let {productId} = useParams()
  console.log(productId)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      console.log(res.data)
      setProduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })

  
   
  }, [])
  
  return (
    <LayOut>
    
      {isLoading? (<Loader/>):(
       <div className={classes.product__detail}>
    
    <Single_product product={producti}/>
   <div className={classes.product__detail_des}>
   <div className={classes.product__detail_price}>{`Price $${producti.price}`}</div>     
     {producti.description}
     </div>

   </div>
  )}
 
    </LayOut>
  )
}

export default ProductDetail