
import '../styles/globals.css'

import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MyApp({ Component, pageProps }) {
  return (
    <>
     <Navbar/>
  <Component {...pageProps} />
  <Footer />
    </>
  );
}
export default MyApp;
