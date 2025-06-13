import { useEffect, useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from './../../components/DataProvider/DataProvider';
import { Type } from './../../utility/actionType';
import { auth } from './../../utility/firebase';
import Landing from './../Landing/Landing';

function Signout() {
const {state, dispatch} = useContext(DataContext)
const location = useLocation();
const navigate = useNavigate();
// console.log(location.pathname);
let loc = location.pathname === "/signout"



useEffect(() => {
    auth.signOut()
    loc?navigate("/", { replace: true }):navigate("/", { replace: false });
  auth.onAuthStateChanged((authUser)=>{
  if(authUser){
        // console.log(authUser)
        dispatch({
            type:Type.SET_USER,
            user:authUser
        })
    }else{
        dispatch({
            type:Type.SET_USER,
            user:null
        })
    }
  })

 
}, [])

  return (
    <Landing/>
  )
}

export default Signout