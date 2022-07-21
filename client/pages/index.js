import styles from '../styles/Home.module.css'
import Link from "next/Link"


export default function Home() {
  return (
    <div className={styles.container}>
    
       <div className={styles.imgContainer}>
       <Link href={"/landing/womens"}><div className="MuiGrid-root jss396 MuiGrid-item MuiGrid-grid-xs-true" id="maxin-DesktopPrelandingBanner1">
            <div className={styles.btnContainer}>
                <img width="100%" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Women-18July2022.jpg" alt="Shop Women" />
                
                  <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss395 MuiButton-containedSecondary" tabIndex="0" type="button" id="shopwomen">
                  <span className="MuiButton-label">SHOP WOMEN</span>
                  </button>
              
            </div>
          </div></Link>

          <Link href={"landing/mens"}><div className="MuiGrid-root jss396 MuiGrid-item MuiGrid-grid-xs-true" id="maxin-DesktopPrelandingBanner2">
            <div className={styles.btnContainer}>
              <img width="100%" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Men-18July2022.jpg" alt="Shop Men" />
              
                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss395 MuiButton-containedSecondary" I="0" type="button" id="shopmen">
                  <span className="MuiButton-label">SHOP MEN</span>
                </button>
              
            </div>
          </div></Link>

          <Link href={"landing/girls"}><div className="MuiGrid-root jss396 MuiGrid-item MuiGrid-grid-xs-true" id="maxin-DesktopPrelandingBanner3">
            <div className={styles.btnContainer}>
              <img width="100%" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Girls-18July2022.jpg" alt="Shop Girls" />
              
                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss395 MuiButton-containedSecondary" tabIndex="0" type="button" id="shopgirls">
                  <span className="MuiButton-label">SHOP GIRLS</span>
                </button>
            </div>
          </div></Link>
          
          <Link href={"landing/boys"}><div className="MuiGrid-root jss396 MuiGrid-item MuiGrid-grid-xs-true" id="maxin-DesktopPrelandingBanner4">
            <div className={styles.btnContainer}>
              <img width="100%" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Boys-18July2022.jpg" alt="Shop Boys" />
             
                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss395 MuiButton-containedSecondary" tabIndex="0" type="button" id="shopboys">
                  <span className="MuiButton-label">SHOP BOYS</span>
                </button>
    
            </div>
          </div></Link>

       </div>

    </div>
  )
}
