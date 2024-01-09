import React from 'react'
import Image from 'next/image'

const ProductCarouselItem = ({ img, name, price }) => {
    return (
        <div class=" p-4 w-full">
            <a class="block relative h-24 rounded overflow-hidden">
                <Image src={img} alt="ecommerce" height={100} width={100} className=" object-cover w-full h-full block" />
            </a>
            <div class="mt-4">
                <h2 class="text-gray-900 title-font text-sm font-medium capitalize">{name?.replaceAll('_', ' ')}</h2>
                <p class="mt-1 text-sm">₹{price}.00</p>
            </div>
        </div>
    )
}

export default ProductCarouselItem
