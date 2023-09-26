import Head from "next/head";

export default function Helmet({text}) {
    return (
     <Head><title>{text}</title></Head>
    )
  }
  