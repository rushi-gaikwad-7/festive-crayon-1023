import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <h1>Hello</h1>
      <Component {...pageProps} />;
    </>
  );
}
export default MyApp;
