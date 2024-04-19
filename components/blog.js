import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Blog() {

  const travelblog = [
    {
      img:'/images/img (1).jpg',
        title: "Exploring the Streets of Tokyo",
        author: "Alexandra Lee",
        date: "April 1, 2024",
        content: "Alexandra recounts her recent trip to Tokyo, Japan, where she immersed herself in the city's vibrant culture and bustling streets. From sampling sushi at Tsukiji Market to strolling through the tranquil gardens of Meiji Shrine, she shares her favorite moments and travel tips."
    },
    {
      img:'/images/img (2).jpg',
        title: "Adventures in the Swiss Alps",
        author: "Michael Chen",
        date: "April 5, 2024",
        content: "Michael takes readers on a thrilling journey through the Swiss Alps, detailing his experiences hiking rugged trails, skiing down snow-capped slopes, and savoring delicious Swiss chocolate in picturesque mountain villages. He also provides recommendations for outdoor enthusiasts planning their own Alpine adventure."
    },
    {
      img:'/images/img (3).jpg',
        title: "Sunset Serenity in Santorini",
        author: "Sophia Patel",
        date: "April 10, 2024",
        content: "Sophia shares the magic of watching the sunset over the iconic white-washed buildings and azure waters of Santorini, Greece. She describes exploring charming villages, indulging in local cuisine, and relaxing on pristine beaches, offering insights for travelers seeking a tranquil island getaway."
    },
    {
      img:'/images/img (4).jpg',
        title: "Jungle Trekking in Costa Rica",
        author: "Diego Rodriguez",
        date: "April 15, 2024",
        content: "Diego recounts his thrilling adventures trekking through the lush rainforests of Costa Rica. From spotting exotic wildlife like sloths and toucans to zip-lining through the canopy and bathing in natural hot springs, he shares his exhilarating experiences and eco-friendly travel tips."
    },
    {
      img:'/images/img (5).jpg',
        title: "Cultural Immersion in Marrakech",
        author: "Fatima Khan",
        date: "April 20, 2024",
        content: "Fatima delves into the vibrant colors, aromatic spices, and rich history of Marrakech, Morocco. She recounts exploring bustling souks, admiring intricate Moorish architecture, and sipping mint tea in tranquil courtyards, offering readers a glimpse into the enchanting allure of this North African city."
    },
    {
      img:'/images/img (6).jpg',
        title: "Island Hopping in the Philippines",
        author: "Carlos Fernandez",
        date: "April 25, 2024",
        content: "Carlos shares his island-hopping adventure through the pristine beaches and crystal-clear waters of the Philippines. From swimming with whale sharks in Oslob to snorkeling in the vibrant coral reefs of Palawan, he highlights the diverse beauty and warm hospitality of this tropical paradise."
    },
    {
      img:'/images/img (7).jpg',
        title: "Magical Moments in Machu Picchu",
        author: "Elena Gomez",
        date: "April 30, 2024",
        content: "Elena reflects on her awe-inspiring journey to the ancient Incan citadel of Machu Picchu in Peru. She describes hiking along the legendary Inca Trail, marveling at the mist-shrouded ruins at sunrise, and connecting with the spiritual energy of this UNESCO World Heritage site, inspiring readers to embark on their own pilgrimage to this mystical wonder."
    }
]


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
    <div className='my-10'>
    <Swiper
      spaceBetween={30}
      loop={true}
      breakpoints={{
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {travelblog.map((blog, index) => (
        <SwiperSlide key={index}>
          <Slide blog={blog} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export function Slide({ blog }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image
          src={blog.img}
          layout="fill"
          objectFit="cover"
          alt={blog.title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          By {blog.author} | {blog.date}
        </p>
        <p className="text-gray-700">{blog.content}</p>
      </div>
    </div>
  );
}