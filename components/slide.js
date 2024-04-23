"use client"
import Image from 'next/image';

export default function Slide({blogData}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="relative h-64">
      <Image
        src={blogData.img}
        layout="fill"
        objectFit="cover"
        alt={blogData.title}
      />
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{blogData.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        By {blogData.author} | {blogData.date}
      </p>
      <p className="text-gray-700">{blogData.content}</p>
    </div>
  </div>
  )
}
