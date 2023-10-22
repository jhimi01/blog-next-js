import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Section1() {
  const images = [
    '/images/img (1).jpg',
    '/images/img (2).jpg',
    // '/images/img (3).jpg',
    '/images/img (4).jpg',
    '/images/img (5).jpg',
    '/images/img (6).jpg',
    '/images/img (7).jpg',
  ]
  
  return (
    <div className='my-5'>
      

      <Swiper
      spaceBetween={30}
      // slidesPerView={3}
      breakpoints={{
    768: {
      slidesPerView: 2, // Show only 1 slide on devices with width >= 768px
    },
    992: {
      slidesPerView: 3, // Show 2 slides on devices with width >= 992px
    },
  }}
    >
      {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide imageSource={image} />
          </SwiperSlide>
        ))}
    </Swiper>
     
    </div>
  )
}

function Slide({imageSource}) {
  return (
    <div  data-aos="fade-up"
    data-aos-duration="1200" data-aos-easing="ease-in-out">
    <div className='image'>
      <Image src={imageSource} width={1000} height={900} alt='blog image' />
    </div>
  </div>
   
  )
}

{/* <div className=''>
<div className='image'>
  <Image src={'/images/img (2).jpg'} width={1000} height={900} alt='blog image'></Image>
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
    </div> */}