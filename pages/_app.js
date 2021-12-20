import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AuthProvider from "../context/AuthProvider";
import store from "../redux/store";
import "../styles/globals.scss";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
