import Layout from "@src/layouts/Layouts";
import "@src/styles/services.less";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../components/Banner/BannerPage/styles.less";
import "../components/Banner/styles.less";
import "../components/Card/styles.less";
import "../components/Contact/styles.less";
import "../components/Filter/styles.less";
import "../layouts/Footer/styles.less";
import "../layouts/Header/styles.less";
import "../pages/informations/styles.less";
import "../styles/claims-styles.less";
import "./global.less";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*<Spinner />*/}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
