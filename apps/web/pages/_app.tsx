import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
