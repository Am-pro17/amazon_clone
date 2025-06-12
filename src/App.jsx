import './App.css'
import Routering from './Router'
import { useContext, useEffect } from 'react';
import { auth } from './utility/firebase.js';
import { DataContext } from './components/DataProvider/DataProvider';
import { Type } from './utility/actionType';

function App() {
  const { dispatch } = useContext(DataContext)


  useEffect(()=>{
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
  <>
 <Routering/>
 </>
  )
}

export default App
 