import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

const CollectionSection = ({ side, img, title, desc, collection }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
                {side !== 'rightImage' && (
                    <>
                        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <Image src={img} width={600} height={300}></Image>
                        </div>
                    </>
                )}
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className={`w-full sm:p-4 px-4 mb-6 text-center ${side === 'rightImage' ? 'md:text-left' : 'md:text-right'} md:text-left`}>
                        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">{title}</h1>
                        <div className="leading-relaxed">{desc}</div>
                        <button
                            className="mt-12 text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-6 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-md"
                            onClick={()=>Router.push(`/category/${collection}`)}
                        >
                            Explore now
                        </button>
                    </div>
                </div>
                {side === 'rightImage' && (
                    <>
                        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <Image src={img} width={600} height={300}></Image>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default CollectionSection
