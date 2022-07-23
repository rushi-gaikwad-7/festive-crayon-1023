import { useEffect, useState } from "react";
import styles from "../../styles/you.module.css";
import Image from "next/image";
import Slider from "react-slick";
export default function Youlike(){
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
      };
    let [data,setdata] = useState([])
    useEffect(()=>{
let getData = async ()=>{
    let res = await fetch("http://localhost:3004/des")
    let data = await res.json();
    setdata(data)
}
  getData()  },[])
  
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img
          src={
            "https://cdn2.iconfinder.com/data/icons/mobile-web-apps-1/32/arrow_left-128.png"
          }
          alt="prevArrow"
          height="20px"
          {...props}
        />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img
          src={
            "https://cdn2.iconfinder.com/data/icons/mobile-web-apps-1/32/arrow_right-512.png"
          }
          height="20px"
          alt="nextArrow"
          {...props}
        />
      );
    
      const settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
      };
    return (<div className={styles.you}>
    <Slider {...settings} className={styles.slimain}>
        {data.map((el) => {
          return (
            <div className={styles.slider}>
              <Image
                className={styles.slimg}
                loader={myLoader}
                src={el.Images[0]}
                alt="Picture of the author"
                width={500}
                height={460}
              />
            </div>
          );
        })}
      </Slider>
    </div>)
}

