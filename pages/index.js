import Header from '@/components/Header'
import Helmet from '@/components/Helmet'
import Head from 'next/head'



export default function Home() {
  return (
   <div>
   {/* <Helmet text='blog'></Helmet> */}
   <Head><title>Blog</title></Head>
    <Header></Header>
   </div>
  )
}
