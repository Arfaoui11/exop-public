import Layout from "@src/layouts/Layouts";
import type { AppProps } from "next/app";
import "../components/Banner/BannerPage/styles.less";
import "../components/Banner/styles.less";
import "../components/Contact/styles.less";
import "../layouts/Footer/styles.less";
import "../layouts/Header/styles.less";
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
