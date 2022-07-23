
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
                <div className={styles.list}>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Profile</h3>
                            <p>Manage your personal details</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                    <div className={styles.icon}><img src="https://tse1.mm.bing.net/th?id=OIP.shJRXMMACil9rrsbxpVQNAHaHa&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>My Addresses</h3>
                            <p>Manage your shipping and billing addresses.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                    <div className={styles.icon}><img src="https://tse4.mm.bing.net/th?id=OIP.UTsvtEJpBOF1AI59UgorhAHaFk&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>My Credit</h3>
                            <p>View your available credit balance</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                    <div className={styles.icon}><img src="https://tse3.mm.bing.net/th?id=OIP.9lr1JeOdM3OeNDHayX-Z0gHaJI&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Reviews</h3>
                            <p>View all your reviews</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse2.mm.bing.net/th?id=OIP.8-Y4Gz71hHMWsmSHg8fS2gHaKb&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Landmark Rewards</h3>
                            <p>Earn and spend valuable loyalty points for instant savings.</p>
                        </div>
                    </div>   
                </div>
                <div>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse3.mm.bing.net/th?id=OIP.0rzE3hT16YH0KGgOfL-phAHaHa&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Favourites</h3>
                            <p>View your most wanted products.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse2.mm.bing.net/th?id=OIP.Fkg49LeHqH0dZ0HsCZSyaQHaHG&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Payment</h3>
                            <p>Manage your payment preferences.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse2.mm.bing.net/th?id=OIP.WJXjE5x7hp7NRzfYosOifwAAAA&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Click & Collect</h3>
                            <p>Manage your collection stores.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse1.mm.bing.net/th?id=OIP.kmYvS3UlKoURvgcJBr2P7wHaHD&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Orders</h3>
                            <p>View and track your orders.</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.icon}><img src="https://tse1.mm.bing.net/th?id=OIP.EhdCzplgLpRITwuuzzHdZQHaHa&pid=Api&P=0" alt="pf" /></div>
                        <div className={styles.abt}>
                            <h3>Email Preferences</h3>
                            <p>Manage your news letter and email preferences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}