import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faHeart
} from "@fortawesome/free-solid-svg-icons";
import styles from './ProductCard.module.css'
import Router from 'next/router';

const ProductCard = ({ id, category, image, ratings, name, price }) => {
    const wishlist = useSelector((state) => state.wishlist);
    const loginout = useSelector((state) => state.loginout);

    const [addwish, setAddWish] = useState(wishlist.includes(id));

    const dispatch = useDispatch();
    const { addtowishlist, removefromwishlist } = bindActionCreators(actionCreators, dispatch);

    const addToWishListFun = (proId) => {
        if (!addwish) {
            setAddWish(true);
            addtowishlist(proId);
        } else if (addwish) {
            setAddWish(false);
            removefromwishlist(proId);
        }
    }

    return (
        <div className={`${styles.productCard} relative p-4 hover:shadow-lg cursor-default`}>
            <Link href={`/products/${id}?category=${category}`}>
                <div className='block h-48 rounded overflow-hidden'>
                    <Image src={image} alt="ecommerce" height={100} width={100} className=" object-cover w-full h-full block" />
                </div>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium capitalize">{name?.replaceAll('_', ' ')}</h2>
                    <span className="float-right bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        {ratings}{' '}
                        <FontAwesomeIcon icon={faStar} style={{ width: "10px", height: "10px" }} className='inline align-baseline' />
                    </span>
                    <p className="mt-1">₹{price}.00</p>
                </div>
            </Link>
            <button
                className={`${addwish && 'text-yellow-500'} absolute top-3 right-3 rounded-md p-2 border-0 inline-flex items-center justify-center`}
                title={`${addwish ? 'Remove from' : 'Add to'} wishlist`}
                onClick={() => {
                    if (loginout !== true) {
                        Router.push('/login');
                    } else {
                        addToWishListFun(id);
                    }
                }}
            >
                <FontAwesomeIcon icon={faHeart} style={{ width: "17px", height: "17px" }} />
            </button>
        </div>
    )
}

export default ProductCard
