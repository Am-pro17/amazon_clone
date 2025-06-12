import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './../DataProvider/DataProvider';

function ProtectedRoute({children,msg,redirect}) {
    
    const { state } = useContext(DataContext); 
    const { basket, user } = state; 
    const navigate = useNavigate(DataContext)

    useEffect(()=>{
        if(!user){
            navigate("/auth", {state:{msg, redirect}})
        }
    },[user])

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute