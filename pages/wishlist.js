import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PageHead from '../src/components/PageHead/PageHead'
import { products } from '../src/utills/globalData'
import Wishlistitem from '../src/components/Wishlistitem';

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist);
    const [wishlistData, setWishlistData] = useState();

    useEffect(() => {
        let wishlistData = products?.filter((pitem) => wishlist.includes(pitem?.id))
        setWishlistData(wishlistData);
    }, [wishlist])

    return (
        <>
            <PageHead name="Wishlist" />
            <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-10 pt-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Wishlist</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You have total {wishlistData?.length} wishlisted item(s).</p>
                </div>
                <div className="w-full text-xs md:text-sm overflow-auto">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 pb-5 mx-auto flex flex-wrap ">
                            <div className="px-4 pb-4 w-full">
                                {wishlistData?.map((product, index) => (
                                    <>
                                        <Wishlistitem
                                            id={product?.id}
                                            img={product?.image}
                                            name={product?.name}
                                            price={product?.price}
                                            category={product?.category}
                                            rating={product?.ratings}
                                            key={index}
                                        />
                                    </>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Wishlist
