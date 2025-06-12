import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Result from './pages/Result/Result'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Auth from './pages/Auth/Auth';
import Signout from './pages/Auth/Signout';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';




const stripePromise = loadStripe('pk_test_51R692OQxDV7YS5Lvnst5xQUTHfSySqR5Jovz02e05KKORCkPUsHcAPY9HNWazunbzAF6uipdbNuhpwL0zZuVykGa00dnlVk92L');


const Routering =()=> {



  return (
    <Router>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/auth' element={<Auth/>}/>
            <Route path='/payments' 
            element={
              <ProtectedRoute msg={"You must log in before proceeding to payment"}
              redirect={"/Payments"}
              > 
            <Elements stripe={stripePromise}>
            <Payment/>
            </Elements>
             </ProtectedRoute>}/>
          <Route path='/orders' element={
            
            <ProtectedRoute msg={"You must log in before proceeding order page"}
            redirect={"/Payments"}
            > 
            <Orders/>
           </ProtectedRoute>

        
            
            
            }/>
          <Route path='/Category/:categoryName' element={<Result/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signout' element={<Signout/>}/>
      </Routes>
    </Router>
  )
}

export default Routering