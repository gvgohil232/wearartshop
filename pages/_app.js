import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/styles/globals.css'
import Header from '../src/components/Header/Header'
import AdminHeader from '../src/components/Admin/Header/Header'
import SubHeader from '../src/components/SubHeader/SubHeader'
import Footer from '../src/components/Footer/Footer';
import LeftSideBar from '../src/components/Admin/LeftSideBar/LeftSideBar'
import BackToTop from "../src/components/BackToTop/BackToTop";
import { store } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  const router = useRouter();
  return <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {router.pathname.includes('admin') ? (
          <AdminHeader />
        ) : (
          <>
            <Header />
            <SubHeader />
          </>
        )}
        <NextNProgress color="#FFD05B" height={2} />
        <Component {...pageProps} />
        {router.pathname.includes('admin') ? (
          <LeftSideBar />
        ) : (
          <Footer />
        )}
        <BackToTop />
      </PersistGate>
    </Provider>
  </>
}

export default MyApp
