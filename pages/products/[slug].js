import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageHead from '../../src/components/PageHead/PageHead';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faStar,
  faStarHalfAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { products, commentsData } from '../../src/utills/globalData';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../src/redux';

const Slug = () => {
  const router = useRouter();
  const { category, slug } = router.query;
  const [productData, setProductData] = useState();
  const [cartData, setCartData] = useState();
  const [addwish, setAddWish] = useState(false);

  const cartValue = useSelector((state) => state.cart);
  const wishlistData = useSelector((state) => state.wishlist);
  const loginout = useSelector((state) => state.loginout);

  const dispatch = useDispatch();
  const { incremental, decremental, addtowishlist, removefromwishlist } = bindActionCreators(actionCreators, dispatch);

  const addToWishListFun = (proId) => {
    if (!addwish) {
      setAddWish(true);
      addtowishlist(proId);
    } else if (addwish) {
      setAddWish(false);
      removefromwishlist(proId);
    }
  }

  useEffect(() => {
    setProductData(products?.find((item) => item?.id === slug));
    setCartData(cartValue?.find((item) => item?.id === slug));
  }, [products, category, cartValue]);


  useEffect(() => {
    wishlistData?.map((item) => {
      if (item === slug) {
        setAddWish(true);
      }
    })
  }, [])

  return <>
    <PageHead name={productData?.name.replaceAll('_', ' ').toUpperCase()} />
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-5 lg:py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img src={productData?.image?.src} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
          <div className="relative lg:w-1/2 w-full lg:pl-10 lg:py-1 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{productData?.name.replaceAll('_', ' ')}</h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">{productData?.category}</h2>
            <div className="flex mb-4">
              <span className="flex items-center text-yellow-500">
                {[...Array(5)].map((item, key) => (
                  <>
                    <FontAwesomeIcon icon={key === 4 ? faStarHalfAlt : faStar} style={{ width: "15px", height: "15px" }} />
                  </>
                ))}
                <span className="text-gray-600 ml-3">{productData?.ratings}k Reviews</span>
              </span>
              <span className="flex ml-3 border-l-2 border-gray-200 space-x-2s cursor-pointer" title='Share'>
                <a className="text-gray-500 p-2 m-1 hover:bg-gray-200 rounded-full">
                  <FontAwesomeIcon icon={faShareAlt} style={{ width: "17px", height: "17px" }} />
                </a>
              </span>
            </div>
            <p className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est atque delectus eveniet corporis eum repudiandae repellat? Natus asperiores et placeat, ut ducimus, molestiae nulla recusandae nobis nesciunt nam dolorem magni?</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-pink-300 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">₹{productData?.price}.00</span>
              {/* <Link href={`../checkout/${productData?.id}?category=${productData?.category}`} className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-6 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-lg">
                Add to cart
              </Link> */}
              {cartData?.qty > 0 ?
                (
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                      type="button"
                      className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded-l text-md"
                      onClick={() => decremental({ id: productData?.id, qty: 1 })}>
                      -
                    </button>
                    <span className='px-3 py-2 border-y-2 border-yellow-500'>{cartData?.qty}</span>
                    <button
                      type="button"
                      className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded-r text-md"
                      onClick={() => incremental({ id: productData?.id, qty: 1 })}>
                      +
                    </button>
                  </div>
                )
                :
                <button
                  className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 py-2.5 px-6 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-md"
                  onClick={() => incremental({ id: productData?.id, qty: 1 })}
                >
                  Add to cart
                </button>
              }
            </div>
            <button
              className={`${addwish && 'text-yellow-500'} absolute top-0 right-0 rounded-full p-2 border-0 inline-flex items-center justify-center text-gray-500 hover:bg-gray-200`}
              title={`${addwish ? 'Remove from' : 'Add to'} wishlist`}
              onClick={() => {
                if (loginout !== true) {
                  router.push('/login');
                } else {
                  addToWishListFun(productData?.id);
                }
              }}
            >
              <FontAwesomeIcon icon={faHeart} style={{ width: "17px", height: "17px" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font overflow-hidden ">
      <div className="container px-7 pt-5 pb-10 mx-auto">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg capitalize">Comments ({commentsData?.length})</h2>
        <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
        {commentsData?.map((item) => (
          <>
            <div className="-my-8 divide-y-2 divide-gray-100 border-b-2 border-gray-100 my-2">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <Image src={item?.userImg} height={100} width={100} alt="user" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2 font-medium text-gray-900 title-font capitalize">{item?.userName}</h2>
                  <small className="text-gray-600 mb-3 block">{`${item?.ratings} Rattings · ${new Date().toDateString()}`}</small>
                  <p className="leading-relaxed">{item?.comment}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  </>
}

export default Slug