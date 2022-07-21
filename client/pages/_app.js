import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Header/Navbar';


function MyApp({ Component, pageProps }) {

  return( 
    <>
     <Navbar/>
  <Component {...pageProps} />
    </>
 
  )
}
export default MyApp
