
import styles from "./index.module.css";
export default function myAccount() {

    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.txt}>
                    <h1>One account to rule them all</h1>
                    <p>Manage your account across all participating brands from one place.</p>
                </div>

                <div className={styles.logo}>
                    <div className={styles.lifestyle}>
                        <img src="https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg" />
                    </div>
                    <div className={styles.max}>
                        <img src="https://i1.lmsin.net/website_images/in/logos/logo-max.svg"/>
                    </div>
                    <div className={styles.homecentre}>
                        <img src="https://i1.lmsin.net/website_images/in/logos/logo-homecentre.svg" />
                    </div>
                </div>
            </div>

            <div className={styles.lower}>

            </div>
        </div>
    )
}