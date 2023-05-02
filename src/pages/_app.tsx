import Layout from '@src/layouts/Layouts';
import type { AppProps } from 'next/app';
import './global.less';
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  {/*<Spinner />*/}
    <Layout>
      <Component {...pageProps} />
    </Layout></>
  )
}
