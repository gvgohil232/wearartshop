import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import HomeCategory from '../HomeCategory/HomeCategory'
import CollectionSection from '../CollectionSection/CollectionSection'
import sketch_women from '../../assets/images/sketches_women.jpg'
import wordrobe_collection from '../../assets/images/wordrobe_collection.jpg'
import ProductCarousel from '../ProductCarousel/ProductCarousel'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeCategory />
            <CollectionSection
                side="rightImage"
                img={sketch_women}
                title="Trending Sketch Art"
                desc="Fashion sketch is the first step towards creating beautifully designed art."
                collection="women"
            />
            <ProductCarousel />
            <CollectionSection
                img={wordrobe_collection}
                title="Our Wordrobe Collection"
                desc="It's always good to change and keep things fresh, whether it's a wardrobe or whatever."
                collection="mens"
            />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Wear the art with us</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">It is more conscious of your physical appearance when you are wearing the art.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
