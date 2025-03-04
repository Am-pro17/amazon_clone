import {useState,useEffect} from 'react'
import axios from 'axios'
import Single_product from './Single_product'
import classes from './Product.module.css'

function Product() {
 
// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));
const [products, setProducts] = useState([])

useEffect(() => {
  
    axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    setProducts(res.data)
  })
  
}, [])

// console.log(products)

  return (
   <div className={classes.products__container}>
    {
        products.map((single,i)=>{
            return <Single_product key={i} product={single}/>
        })
    }
   </div>
  )
}

export default Product