import styles from "../../styles/landing.module.css";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
export default function Landing({ data }) {
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
                        width={616}
                        height={616}
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
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3004/home`);
  let data = await res.json();
  console.log(data);
  return { props: { data } };
}
