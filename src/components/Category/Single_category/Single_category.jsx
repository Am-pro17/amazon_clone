import React from 'react'
import classes from './Single_category.module.css'
import {Link} from 'react-router-dom'

function Single_category({data}) {
  // console.log(data)
 let {title,image} = data
  return (
    <div className={classes.Single_Wrapper}>
        <h4>{title}</h4>
        <Link to={`category/${data.name}`} className={classes.Single_anchor}> 
            <img src={image} alt="" />
            <p>Shop now</p>
            </Link>
       
    </div>
  ) 
}

export default Single_category