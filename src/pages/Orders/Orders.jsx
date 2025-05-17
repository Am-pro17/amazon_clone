import React, {useEffect,useContext, useState} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { db } from "../../utility/fireBase"
import { getFirestore, collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { DataContext } from './../../components/DataProvider/DataProvider';
import classes from "./Order.module.css"
import Single_product from './../../components/Product/Single_product';


function Orders() {


  const { state, dispatch } = useContext(DataContext); 
  const { basket, user } = state;
  const [order, setOrder ] = useState([])

  
  
  useEffect(()=>{

    if(user){

   // Reference to the user's orders collection
const ordersRef = collection(doc(collection(db, "users"), user.uid), "orders");

// Create a query ordered by "created" field in descending order
const ordersQuery = query(ordersRef, orderBy("created", "desc"));

// Listen to real-time updates
onSnapshot(ordersQuery, (snapshot) => {
  console.log(snapshot);
  setOrder(snapshot.docs.map((items)=>{
    return  {
                 id:items.id,
                data:items.data()
              }

                
  }))
});
      
    }else{

      setOrder([])

    }




  },[])


  return (
    <LayOut>
   <section className={classes.containers}>
    <div className={classes.orders_container}>
      <h2>Your Orders</h2>
      {
        order?.length == 0 && <div style={{padding:"20px",}}>you don't have any order</div>
      }
      <div>
        {
          order?.map((eachOrder,index)=>{
            return(
              <div key={index}>
                <hr />
                <p>order id : {eachOrder.id}</p>
                {
                  console.log(eachOrder)
                }
                {
                  eachOrder?.data?.basket?.map((order)=>(
                    <Single_product
                    product={order}
                    key={index}
                    flex={true}
                    />)
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
   </section>
    </LayOut>
  )
}

export default Orders