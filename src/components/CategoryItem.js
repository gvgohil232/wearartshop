import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CategoryItem = ({ name, img }) => {
    return (
        <div className="p-4 flex flex-col text-center items-center group cursor-default">
            <Link href={`/category/${name}`}>
                <div className="w-28 h-28 inline-flex items-center justify-center rounded-full bg-yellow-50 text-yellow-500 mb-5 flex-shrink-0 pointer-events-none transform group-hover:border border-yellow-200 transition duration-500 group-hover:scale-110">
                    <Image src={img.src} height={80} width={80} alt={name}/>
                </div>
            </Link>
            <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 uppercase">{name}</h2>
            </div>
        </div>
    )
}

export default CategoryItem
