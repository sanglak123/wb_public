import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, Store } from "@/sp/redux/store";
import type { AppProps } from "next/app";

import Hearder from "@/components/Hearder";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Hearder />
        <Component {...pageProps} />
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </PersistGate>
    </Provider>
  );
}
