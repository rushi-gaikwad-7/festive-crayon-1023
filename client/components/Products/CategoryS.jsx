import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/products.module.css";
import { useRouter } from 'next/router'


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

export const CategoryS = ({category,path}) => {

  const { asPath } = useRouter()


  return (
    <div className={styles.categoryDiv}>
      { category.length>1 ?
    <p>Shop For</p>:<></>
      }
    {category.map((el, i) => {
      return (
     <Link key={i} href={`${path}/${el.name}/?currentCat=${el.name}`} >
        <div  key={i}>
          <Image
            loader={myLoader}
            src={el.img}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <p>{el.name}</p>
        </div>
     </Link>
      );
    })}
  </div>
  )
}
