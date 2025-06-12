import image from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css'

function Carousel_com() {
  return (
    <>
    <Carousel
    autoplay={true}
    infiniteloop={true}
    showIndicators={false}
    showThumbs={false}>
        {
            image.map((item,i)=>{
                return <img key={i} src={item}/>
            })
        }
    </Carousel>
    <div className={classes.hero__img}></div>
    </>
  )
}

export default Carousel_com