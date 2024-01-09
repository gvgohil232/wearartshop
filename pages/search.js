import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import PageHead from '../src/components/PageHead/PageHead'
import { products } from '../src/utills/globalData';
import ProductCard from '../src/components/ProductCard/ProductCard'
import nosearchresult from  '../src/assets/svgs/nosearchresult.svg';

const Search = () => {
    const router = useRouter();
    const searchart = router.query.q;

    const [searchResultData, setSearchResultData] = useState([]);

    useEffect(() => {
        setSearchResultData(products?.filter((item) => item?.name.search(searchart) >= 0));
    }, [products, searchart]);

    return (
        <>
            <PageHead name="Search Result" />
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-16 pt-8 mx-auto">
                    {searchResultData?.length > 0 && searchart !== '' ? (
                        <>
                            <div className='flex justify-between flex-wrap'>
                                <div>
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{`Showing Result For "${searchart}"`}</h2>
                                    <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                                </div>
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-sm capitalize">{searchResultData?.length} Products</h2>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                {searchResultData?.map((item, key) => (
                                    <ProductCard
                                        key={key}
                                        id={item?.id}
                                        category={item?.category}
                                        image={item?.image}
                                        ratings={item?.ratings}
                                        name={item?.name}
                                        price={item?.price}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className='text-center'>
                            <Image src={nosearchresult} height={150} width={150} className='lg:w-1/6 m-auto my-2'></Image>
                            <strong className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>Sorry, no results found!</strong>
                            <p className='lg:w-2/3 mx-auto my-2 leading-relaxed text-base'>Please try again with another keyword or try searching for something else</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Search
