import React, { useState } from 'react'
import CategoryItem from '../CategoryItem';
import men_cate from '../../assets/images/men_cate.png';
import women_cate from '../../assets/images/women_cate.png';
import kids_cate from '../../assets/images/kids_cate.png';
import beauty_cate from '../../assets/images/beauty_cate.png';

const HomeCategory = () => {
  const categories = [
    {
      id: 1,
      name: 'mens',
      img: men_cate
    },
    {
      id: 2,
      name: 'women',
      img: women_cate
    },
    {
      id: 3,
      name: 'kids',
      img: kids_cate
    },
    {
      id: 4,
      name: 'beauty',
      img: beauty_cate
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-12 pb-4 mx-auto">
        <div className="flex justify-evenly flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 ">
          {categories?.map((item, index) => (
            <>
              <CategoryItem key={index} name={item?.name} img={item?.img} />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeCategory
