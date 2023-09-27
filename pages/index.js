import Section1 from '@/components/Section1'
import Head from 'next/head'



export default function Home() {
  return (
   <div className='custom-width'>
   {/* <Helmet text='blog'></Helmet> */}
   <Head><title>Blog</title></Head>
   {/* <h1 className='text-6xl py-5 font-semibold text-center border-b'>Blog</h1> */}
   <Section1></Section1>
   </div>
  )
}
