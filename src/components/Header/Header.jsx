import {useContext} from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import amazon_logo from "../../assets/amazon_logo.png"
import us_flag from "../../assets/us_flag.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import classes from "./Header.module.css"
import {Link} from 'react-router-dom'
import { DataContext } from './../DataProvider/DataProvider';
import { auth } from './../../utility/firebase';


function Header() {
    const {state} = useContext(DataContext)
    let cartcounter = state.basket.length
    let user = state?.user?.email
    let name = user?.split("@")[0]

    // console.log(state)
    
// console.log(cartcounter)


  return (
    <section className={classes.header__container}>


        <section className={classes.first_section}>

            <Link to="/"><img className={classes.logo}src={amazon_logo} alt="" /></Link>

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

        <Link to={!user && "/auth"}>
            <div>
                {
                    user?(
                    <>
                    <p>Hello, {name}</p>
                <small onClick={()=>auth.signOut()}>Signout</small>
                    </>
                ):(<>
                <p>Hello ,sign in</p>
                <small>Account & Lists</small>
                </>)
                }
                

            </div>
        </Link>

        <Link to="/orders">
            <div>
                <p>Returns</p>
                <div>& Orders</div>
            </div>
        </Link>

        <Link to="/cart" className={classes.cart}>
            <div>
                <p>{cartcounter}</p>
                <div><ShoppingCartOutlinedIcon/></div>
            </div>
        </Link>
        
        </section>

    </section>
  )
}

export default Header