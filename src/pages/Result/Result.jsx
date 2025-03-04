import React from 'react'
import classes from "./Result.module.css";
import LayOut from '../../components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endpoints.js'
import {useState,useEffect} from 'react'
import Single_product from '../../components/Product/Single_product'
function Result() {
  let {categoryName} = useParams()
  const [result, setResult] = useState([])
  // console.log(categoryName)
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    setResult(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  }, [])
  

  return (
    <LayOut>
    <section>
      <h1 style={{ padding:"30px"}}>Results</h1>
      <p style={{ padding:"30px"}}>Category/ {categoryName}</p>
    <hr />
    <div className={classes.products__container}>
      {
        result.map((single,i)=>(
          <Single_product key={i} product={single}/>
        ))
      }
    </div>
    </section>
    </LayOut>
  )
}

export default Result