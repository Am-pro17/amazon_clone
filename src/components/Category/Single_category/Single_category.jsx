import React from 'react'
import classes from './Single_category.module.css'

function Single_category({data}) {
  console.log(data)
 let {title,image} = data
  return (
    <div className={classes.Single_Wrapper}>
        <h4>{title}</h4>
        <a className={classes.Single_anchor} href="">
            <img src={image} alt="" />
            <p>Shop now</p>
            </a>
       
    </div>
  )
}

export default Single_category