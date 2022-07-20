import styles from "../../styles/landing.module.css";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Landing({ data }) {
  console.log(data)
  return (
    <>
      <div className={styles.mainland}>
        <div className={styles.off}>
          <Image
            className={styles.imageoff}
            loader={myLoader}
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-FREESHIPCOMMON-20JULY2022A.png"
            width={1232}
            height={150}
          />
        </div>
        {data.map((el) => {
          return (
            <div>
              <div className={styles.spotlight}>
                <h2 className={styles.landtitles}>{el.stylespot.title}</h2>
                <div className={styles.spot}>
                  {el.stylespot.spot.map((el) => {
                    return (
                      <Image
                        className={styles.imagespot}
                        loader={myLoader}
                        src={el}
                        width={600}
                        height={600}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={styles.cusfav}>
                <h2 className={styles.landtitles}>
                  {el.CustomerFav.title}
                </h2>
                <div>
                <Image
                        className={styles.cusimg}
                        loader={myLoader}
                        src={el.CustomerFav.url}
                        width={1232}
                        height={485}
                      />
              </div>
              </div>
              <div className={styles.bycats}>
                <h2 className={styles.landtitles}>{el.shopbycat.title}</h2>
                <div className={styles.catcontain}>
                 {el.shopbycat.catarr.map((el)=>{
                  return <div className={styles.catelem}>
                     <Image
                        className={styles.catimgs}
                        loader={myLoader}
                        src={el.img}
                        width={288}
                        height={288}
                      />
                      <h2 className={styles.cattitle}>{el.title}</h2>
                  </div>
                 })} 
                </div>
              </div>
              <div className={styles.budget}>
                <h2 className={styles.landtitles}>
                  {el.budget.title}
                </h2>
                <div className={styles.buds}>
                {el.budget.budgt.map((el)=>{
                  return  <Image
                    className={styles.budimgs}
                    loader={myLoader}
                    src={el}
                    alt="budgetimgs"
                    width={400}
                    height={200}
                  />
                })}</div>
                </div>
              <div className={styles.youthstore}>
              <h2 className={styles.landtitles} >{el.youthstore.title}</h2>
              <Image
                    className={styles.youthimg}
                    loader={myLoader}
                    src={el.youthstore.youth}
                    alt="budgetimgs"
                    width={1232}
                    height={485}
                  />
              </div>
              <div className={styles.trends}>
              <h2 className={styles.landtitles}>{el.trends.title}</h2>
              <div className={styles.trendgrid}>
               {el.trends.trendimgs.map((el)=>{
               return <Image
                className={styles.trendimg}
                loader={myLoader}
                src={el}
                alt="trendimgs"
                width={600}
                height={600}
              />
               })}
              </div>
              </div>
              <div className={styles.topstore}>
                <h2 className={styles.landtitles}>{el.topstores.title}</h2>
                <div className={styles.tops}>
                {el.topstores.top.map((el)=>{
               return <Image
                className={styles.storeimg}
                loader={myLoader}
                src={el}
                alt="topimgs"
                width={600}
                height={600}
              />
               })}
                </div>
              </div>
              <div className={styles.view}>
              <Image
                className={styles.viewimg}
                loader={myLoader}
                src={el.viewall}
                alt="topimgs"
                width={1232}
                height={160}
              />
              </div>
            </div>
          );
        })}
        <div className={styles.giftzone}>
          <h2 className={styles.landtitles}>Gifting Zone</h2>
          <Image
                className={styles.viewimg}
                loader={myLoader}
                src={"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock14One-Men-26Oct2021.jpg"}
                alt="giftimgs"
                width={1232}
                height={250}
              />
        </div>
        <div className={styles.connect}>
          <h2 className={styles.landtitles}>Connect With Us</h2>
        <Image
                className={styles.viewimg}
                loader={myLoader}
                src={"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg"}
                alt="connectimg"
                width={1232}
                height={280}
              />
        </div>
      </div>
      <div style={{border:"0.5px solid #ecedeb"}}></div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8080/home/Mens`);
  let data = await res.json();
  console.log(data)
  return { props: { data } };
}
