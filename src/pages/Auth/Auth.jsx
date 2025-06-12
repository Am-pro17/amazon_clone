import logo from "../../assets/auth_logo.png"
import {useState, useContext} from "react"
import classes from "./Signup.module.css"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from './../../utility/fireBase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from './../../components/DataProvider/DataProvider';
import { Type } from './../../utility/actionType';
import { ClipLoader } from "react-spinners"


function Auth() {


  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let [error,setError] = useState("")
  let [loading,setLoading] = useState({
    signin:false,
    signup:false
  })

  const { state, dispatch } = useContext(DataContext)
  // console.log(state.user)
  const navigate = useNavigate()
  const navStateData = useLocation()

  let authHandler = async(e)=>{
    e.preventDefault()
    console.log(e.target.name)
    if(e.target.name == "signin"){
      setLoading({
        ...loading,signin:true
      })
      // firebase auth
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo)=>{
        console.log(userInfo)
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({
          ...loading,signin:false
        })
        navigate(navStateData?.state?.redirect  || "/" )
      })
      .catch((err)=>{
        setError(err.message)
        setLoading({
          ...loading,signin:false
        })
      })
    }else{
      setLoading({...loading,signup:true })
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo)=>{
        console.log(userInfo) 
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
         setLoading({ ...loading,signup:false })
        navigate(navStateData?.state?.redirect  || "/" )

      })
    
      .catch((err)=>{
        setError(err.message)
        setLoading({...loading,signup:false})
      })
    }
  }
  // console.log(email,password)
  return (
    <section className={classes.login}>
        {/* logo holder */}
        <Link to={"/"}>
            <img src={logo} alt="" />
        </Link>
        {/* form */}
      <div className={classes.login__container}>
        <h1>Sign in</h1>
        {
         navStateData.state?.msg && (
          <small 
          style={{padding:"20px",
                  textAlign:"center",
                  color:"red",
                  fontWeight:"bold",
          }}
          >
            {navStateData.state.msg}
            
          </small>
         ) 
        }
        <div>
          <form action="">
      <div>  
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" type="email" />
      </div>

      <div>      
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password" />
       </div>
         
            
            <button name="signin" onClick={authHandler} type="submit"  className={classes.login__button}>
              {loading.signin ? <ClipLoader size={15}/>: ("Sign in")}
            </button>
            </form>
        <div>
          <p>By signing in you are agree to the AMAZON FAKE CLONE condition of the & sale. please see our privacy Notice, our cookie Notice and our Cookies Notice and our interest Based Ads notice</p>
        <button name="signup" onClick={authHandler} type="submit" className={classes.signup__button}>{loading.signup?<ClipLoader size={15}/>:("Create your Amazon Account")}</button>
        </div>
        {
          error && <small style={{ paddingTop:"5px", color:"red"}}>{error}</small>
        }
        </div>
    
      </div>
    </section>
  );
}

export default Auth;
