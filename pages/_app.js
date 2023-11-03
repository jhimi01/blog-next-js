import DarModeProvider from "@/Provider/DarModeProvider";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <DarModeProvider>
      <Layout>
        <Head>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </DarModeProvider>
  );
}
