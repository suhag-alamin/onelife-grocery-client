import Layout from "../components/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
