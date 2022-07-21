import styles from "../../styles/landing.module.css";
import Image from "next/image";
import Slider from "react-slick";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Landing({ data }) {
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
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };
  return (
    <>
      <div className={styles.blue}>
        <h2 className={styles.bluestrip}>
          Free shipping on ALL orders + Flat ₹200 off on ₹1999. Code: MAX200
        </h2>
      </div>
      <div className={styles.mainland}>
        <Slider {...settings} className={styles.slimain}>
          {data.sliderimages.map((el) => {
            return (
              <div className={styles.slider}>
                <Image
                  className={styles.slimg}
                  loader={myLoader}
                  src={el}
                  alt="Picture of the author"
                  width={1220}
                  height={460}
                />
              </div>
            );
          })}
        </Slider>
        <div className={styles.off}>
          <Image
            className={styles.imageoff}
            loader={myLoader}
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-FREESHIPCOMMON-20JULY2022A.png"
            width={1232}
            height={150}
          />
        </div>
        <div>
          <div className={styles.spotlight}>
            <h2 className={styles.landtitles}>{data.stylespot.title}</h2>
            <div className={styles.spot}>
              {data.stylespot.spot.map((el) => {
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
            <div className={styles.cusfav}>
              <h2 className={styles.landtitles}>{data.CustomerFav.title}</h2>
              <div>
                <Image
                  className={styles.cusimg}
                  loader={myLoader}
                  src={data.CustomerFav.url}
                  width={1232}
                  height={485}
                />
              </div>
            </div>
            <div className={styles.bycats}>
              <h2 className={styles.landtitles}>{data.shopbycat.title}</h2>
              <div className={styles.catcontain}>
                {data.shopbycat.catarr.map((el) => {
                  return (
                    <div className={styles.catelem}>
                      <Image
                        className={styles.catimgs}
                        loader={myLoader}
                        src={el.img}
                        width={288}
                        height={288}
                      />
                      <h2 className={styles.cattitle}>{el.title}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.budget}>
              <h2 className={styles.landtitles}>{data.budget.title}</h2>
              <div className={styles.buds}>
                {data.budget.budgt.map((el) => {
                  return (
                    <Image
                      className={styles.budimgs}
                      loader={myLoader}
                      src={el}
                      alt="budgetimgs"
                      width={400}
                      height={200}
                    />
                  );
                })}
              </div>
            </div>
            {data.youthstore && (
              <div className={styles.youthstore}>
                <h2 className={styles.landtitles}>{data.youthstore.title}</h2>
                <Image
                  className={styles.youthimg}
                  loader={myLoader}
                  src={data.youthstore.youth}
                  alt="budgetimgs"
                  width={1232}
                  height={485}
                />
              </div>
            )}
            <div className={styles.trends}>
              <h2 className={styles.landtitles}>{data.trends.title}</h2>
              <div className={styles.trendgrid}>
                {data.trends.trendimgs.map((el) => {
                  return (
                    <Image
                      className={styles.trendimg}
                      loader={myLoader}
                      src={el}
                      alt="trendimgs"
                      width={600}
                      height={600}
                    />
                  );
                })}
              </div>
            </div>
            {data.topstores && (
              <div className={styles.topstore}>
                <h2 className={styles.landtitles}>{data.topstores.title}</h2>
                <div className={styles.tops}>
                  {data.topstores.top.map((el) => {
                    return (
                      <Image
                        className={styles.storeimg}
                        loader={myLoader}
                        src={el}
                        alt="topimgs"
                        width={600}
                        height={600}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            <div className={styles.view}>
              <Image
                className={styles.viewimg}
                loader={myLoader}
                src={data.viewall}
                alt="topimgs"
                width={1232}
                height={160}
              />
            </div>
          </div>
          <div className={styles.giftzone}>
            <h2 className={styles.landtitles}>Gifting Zone</h2>
            <Image
              className={styles.viewimg}
              loader={myLoader}
              src={
                "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock14One-Men-26Oct2021.jpg"
              }
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
              src={
                "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg"
              }
              alt="connectimg"
              width={1232}
              height={280}
            />
          </div>
        </div>
      </div>
      <div style={{ border: "0.5px solid #ecedeb" }}></div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8080/home/get/mens`);
  let data = await res.json();
  return { props: { data } };
}
