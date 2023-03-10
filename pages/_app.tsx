import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/eventCard.css';
import '../styles/globals.css';
import '../styles/swiper.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
