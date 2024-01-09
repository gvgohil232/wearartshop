import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

const Wishlistitem = ({ id, img, name, price, category, rating }) => {
    const dispatch = useDispatch();
    const { incremental, removefromwishlist } = bindActionCreators(actionCreators, dispatch);
    const cartValue = useSelector((state) => state.cart);
    const wishlistValue = useSelector((state) => state.wishlist);
    return (
        <>
            <div className='flex flex-wrap justify-between py-5 border-b-2'>
                <div className='flex'>
                    <div className="mr-6">
                        <Link href={`/products/${id}?category=${category}`}>
                            <Image src={img} height={75} width={75} alt="user" className="rounded-lg flex-shrink-0 object-cover object-center"></Image>
                        </Link>
                    </div>
                    <div className="capitalize ml-1">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                            <Link href={`/products/${id}?category=${category}`}>
                                {name?.replaceAll('_', ' ')}
                            </Link>
                        </h2>
                        <p className="leading-relaxed text-base">
                            <span>{category}</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium mx-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                {rating}{' '}
                                <FontAwesomeIcon icon={faStar} style={{ width: "10px", height: "10px" }} className='inline align-baseline' />
                            </span>
                        </p>
                        <a className="mt-2 text-base inline-flex items-center">₹{price}</a>
                    </div>
                </div>
                <div className="rounded-md mt-3 sm:mt-0" role="group">
                    <button
                        type="button"
                        className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-4 ml-0.5 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded-r text-md"
                        title='Delete'
                        onClick={() => removefromwishlist(id)}
                    >
                        <FontAwesomeIcon icon={faTrash} style={{ width: "10px", height: "10px" }} className='inline align-baseline' />
                    </button>
                    <button
                        type="button"
                        className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 py-1.5 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded-l text-md"
                        title='Move to cart'
                        onClick={() => {
                            incremental({ id: id, qty: 1 });
                            removefromwishlist(id);
                        }}
                    >
                        Move to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Wishlistitem
