import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import PageHead from '../src/components/PageHead/PageHead'

const Orders = () => {
    const confirmedOrderData = useSelector((state) => state.orderconfirmed);
    return (
        <>
            <PageHead name="Orders" />
            <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-10 pt-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Orders</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You have ordered total {confirmedOrderData?.orders?.length} item(s) with us.</p>
                </div>
                <div className="w-full text-xs md:text-sm overflow-auto mb-4">
                    {confirmedOrderData?.orders?.map((order, index) => (
                        <>
                            <details className='rounded-md border-gray-300 shadow-md mx-3 my-4 p-4 select-none'>
                                <summary className='capitalize'>
                                    <span className='px-2'>{order?.orderId})</span>
                                    <span className='px-2'>{order?.date?.toLocaleString()}</span>
                                    <span className='px-2 text-green-500 '>{order?.status}</span>
                                </summary>
                                <div className='my-2 p-2'>
                                    <div className='flex flex-wrap -m-2'>
                                        {order?.products?.map((product, key) =>
                                        (
                                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={key}>
                                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                    <Link href={`/products/${product?.id}?category=${product?.category}`}>
                                                        <Image src={product?.image} height={75} width={75} alt="user" className="rounded-lg flex-shrink-0 object-cover object-center mr-4"></Image>
                                                    </Link>
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-900 title-font font-medium capitalize">
                                                            <Link href={`/products/${product?.id}?category=${product?.category}`}>
                                                                {product?.name?.replaceAll('_', ' ')}
                                                            </Link>
                                                        </h2>
                                                        <p className="text-gray-500">x {product?.qty}</p>
                                                        <p className="text-gray-500">₹{product?.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        )}
                                    </div>
                                </div>
                            </details>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Orders
