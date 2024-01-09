import React from 'react'
import Image from 'next/image'
import orderconfirmedsvg from '../src/assets/svgs/orderconfirmed.svg'
import PageHead from '../src/components/PageHead/PageHead'
import OrderedItem from '../src/components/OrderedItem'
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Orderplaced = () => {
    const confirmedOrderData = useSelector((state) => state.orderconfirmed);
    let latestOrderedData = [];
    let productTotal = 0;
    confirmedOrderData?.orders?.filter((item) => {
        if (item?.orderId === confirmedOrderData?.lastOrderId) {
            latestOrderedData = item?.products;
            item?.products?.map((item) => {
                let just = parseFloat(item?.price) * parseFloat(item?.qty);
                productTotal = productTotal + just;
            })
        };
    })

    return (
        <>
            <PageHead name="Order Placed" />
            <section className="text-gray-600 body-font ">
                <div className="container px-4 py-2 md:py-4 lg:py-10 mx-auto flex flex-wrap items-start ">
                    <div className="lg:w-2/5 bg-gray-100 rounded-lg p-8 flex flex-col w-full my-3 md:mt-0 text-center">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Thank you for shopping with us!</h2>
                        <Image src={orderconfirmedsvg} height={150} width={150} className='w-2/3 m-auto my-2'></Image>
                        {confirmedOrderData.lastOrderId > 0 && <p className="text-xs text-gray-500 mt-3">Order id: #{confirmedOrderData.lastOrderId}</p>}
                        <div className='text-center mt-2'>
                            <button
                                className=" mx-auto my-2 text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-6 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-md"
                                onClick={() => Router.push('/')}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                    {latestOrderedData.length > 0 ? (
                        <div className="lg:w-3/6 w-full lg:ml-6 pr-0 text-center lg:text-left">
                            <h1 className="title-font font-medium text-2xl text-gray-900">Order Details</h1>
                            <>
                                <table className="table-auto w-full text-left whitespace-no-wrap capitalize mt-1">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-l-md">Item</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-r-md text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {latestOrderedData.map((item, key) => (
                                                <OrderedItem
                                                    key={key}
                                                    name={item?.name}
                                                    qty={item?.qty}
                                                    price={item?.price}
                                                />
                                        ))}
                                    </tbody>
                                </table>
                            </>
                            <p className='text-right font-medium p-2'>Total: ₹{productTotal}</p>
                        </div>
                    ) : ''}
                </div>
            </section>
        </>
    )
}

export default Orderplaced
