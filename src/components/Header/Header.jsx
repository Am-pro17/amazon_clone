import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import amazon_logo from "../../assets/amazon_logo.png"
import us_flag from "../../assets/us_flag.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import classes from "./Header.module.css"

function Header() {
  return (
    <section className={classes.header__container}>


        <section className={classes.first_section}>

            <a href=""><img className={classes.logo}src={amazon_logo} alt="" /></a>

            <div className={classes.delivery}>

                <div>
                <LocationOnOutlinedIcon/>
                </div>

                <div className={classes.location}>
                <p>Deliver to</p>
                <div> Ethiopia</div>
                </div>
                
            </div>

        </section>


        <section className={classes.search}>

            <select name="" id="">
                <option value="">All</option>
            </select>

            <input type='search' placeholder='Search Amazon'/>

            <div>
            {/* Search icon */}
            <SearchOutlinedIcon/>
            </div>

        </section>


        <section className={classes.third_section}>
            
        <div className={classes.flag}>
            <img src={us_flag} alt="" />
                <select name="" id=""> 
                <option value="">EN</option>
                </select>
        </div>

        <a href="#sign in">
            <div>
                <p>Hello, sign in</p>
                <div>Account & Lists</div>
            </div>
        </a>

        <a href="">
            <div>
                <p>Returns</p>
                <div>& Orders</div>
            </div>
        </a>

        <a href="" className={classes.cart}>
            <div>
                <p>0</p>
                <div><ShoppingCartOutlinedIcon/></div>
            </div>
        </a>
        
        </section>

    </section>
  )
}

export default Header