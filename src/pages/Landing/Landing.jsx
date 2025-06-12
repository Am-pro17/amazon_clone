
import Carousel_com from '../../components/Carousel/Carousel_com'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import LayOut from '../../components/LayOut/LayOut'




function Landing() {
  return (
    <>
    <LayOut>
        <Carousel_com/>
        <Category/>
        <Product/>
    </LayOut>
    </>
  )
}

export default Landing