import "../styles/globals.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store, wrapper } from "../redux/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "../redux/action/auth.action";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "../components/alert/Alert";
import "../interceptors/axios";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Online shopping at max</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://image3.mouthshut.com/images/imagesp/925949557s.jpg"
        />
      </Head>
      <Provider store={store}>
        <Alert />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
