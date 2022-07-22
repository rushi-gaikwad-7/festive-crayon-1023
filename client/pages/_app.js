import Navbar from "../components/Header/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />;
        </>
    );
}
export default MyApp;
