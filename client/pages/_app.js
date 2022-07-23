import "../styles/globals.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store, wrapper } from "../redux/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "../redux/action/auth.action";
import Alert from "../components/alert/Alert";
import "../interceptors/axios";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <>
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
