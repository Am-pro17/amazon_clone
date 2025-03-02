import React from 'react'
import classes from './Category.module.css'
import Single_category from './Single_category/Single_category'
import cata_items from './category_data.js'

function Category() {
  return (
    
    <div className={classes.category_wrapper}>{
        cata_items.map((single_product,i)=>{
          return (
          <Single_category key={i} data={single_product} />
        )
        })
        }
    </div>
  )
}

export default Category 