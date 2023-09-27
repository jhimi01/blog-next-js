import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Section1() {
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold my-5'>Trending</h1>
      {Slide()}
    </div>
  )
}

function Slide() {
  return (
    <div className='grid lg:grid-cols-2 gap-6'>
<div className='image'>
  <Image src={'/images/img (2).jpg'} width={700} height={900} alt='blog image'></Image>
</div>
<div className='info'>
<div className='cat'>
  <Link legacyBehavior href={'/'}><a className='text-[#74b9ff]'>Business, Travel</a></Link>
  <Link legacyBehavior href={'/'}><a className='text-[#b2bec3]'>-july-04-2023</a></Link>
</div>
<div className='space-y-3'>
  <h2 className='text-5xl font-semibold'>Your most unhappy customer is your greate source of learning...</h2>
  <p className='text-[#959899]'>Societal Marketing is based on the principle of societal welfare. It emphasizes that an organization must make strategic marketing decisions keeping in mind the consumer wants, the organizational needs and most important the long term interests of the society.</p>
  <h5>author</h5>
</div>
</div>
    </div>
  )
}