import Layout from "@src/layouts/Layouts";
import "@src/styles/services.less";
import "@src/styles/styles.less";
import type { AppProps } from "next/app";
import Cookies from 'js-cookie';
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
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import {useEffect} from "react";



function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const pathname = usePathname();
    Cookies.set(
        process.env.NEXT_PUBLIC_COOKIE_CREDENTIAL || '',
        process.env.NEXT_PUBLIC_COOKIE_VALUE || '',
        {
            path: '/',
            domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || '',
        }
    );

    useEffect(() => {
        const routes = ["/regulations", "/informations", "/services", "/about", "/claims"];
        const matchedRoute = routes.find((route) => pathname.includes(route));

        router.push(matchedRoute ?? "/");
    }, [pathname, router]);

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
export default App;
