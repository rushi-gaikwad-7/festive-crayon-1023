import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';

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
