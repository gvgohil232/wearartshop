import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductCard from '../../src/components/ProductCard/ProductCard';
import { products } from '../../src/utills/globalData';
import PageHead from '../../src/components/PageHead/PageHead'

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setCategoryData(products?.filter((item) => item?.category === category));
  }, [products, category]);

  return (
    <>
      <PageHead name={category} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-16 pt-8 mx-auto">
          <div className='flex justify-between flex-wrap'>
            <div>
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg capitalize">{category} Products</h2>
              <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
            </div>
            <h2 className="font-medium title-font mt-4 text-gray-900 text-sm capitalize">{categoryData?.length} Products</h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {categoryData?.map((item, key) => (
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
        </div>
      </section>
    </>
  )
}

export default Category
