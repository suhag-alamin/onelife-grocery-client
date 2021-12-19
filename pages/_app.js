import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AuthProvider from "../context/AuthProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </>
  );
}

export default MyApp;
