import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../src/redux';

const CartItem = ({ item, index, products, itemFor }) => {
    const [cartItems, setCartItems] = useState();
    const dispatch = useDispatch();
    const { incremental, decremental, removefromcart } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        setCartItems(products?.find((product) => product.id === item?.id))
    }, [item]);

    return (
        <tr>
            <td className="px-4 py-3">{index + 1}</td>
            <td className="px-4 py-3">
                <Link href={`/products/${cartItems?.id}?category=${cartItems?.category}`}>
                    <Image src={cartItems?.image} height={75} width={75} alt="user" className="rounded-lg flex-shrink-0 object-cover object-center"></Image>
                </Link>
            </td>
            <td className="px-4 py-3 capitalize">
                <Link href={`/products/${cartItems?.id}?category=${cartItems?.category}`}>
                    {cartItems?.name?.replaceAll('_', ' ')}
                </Link>
            </td>
            <td className="px-4 py-3 capitalize">{cartItems?.category}</td>
            <td className="px-4 py-3">₹{cartItems?.price}</td>
            <td className="px-4 py-3">
                {itemFor === 'cart' ? (
                    <>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button
                                type="button"
                                className="float-right hover:text-yellow-500 ease-in duration-300 border px-2 focus:outline-none rounded-l-md text-md"
                                onClick={() => decremental({ id: item?.id, qty: 1 })}>
                                -
                            </button>
                            <span className='px-2 py-0.5 text-sm border'>{item?.qty}</span>
                            <button
                                type="button"
                                className="float-right hover:text-yellow-500 ease-in duration-300 border px-2 focus:outline-none rounded-r-md text-md"
                                onClick={() => incremental({ id: item?.id, qty: 1 })}>
                                +
                            </button>
                        </div>
                    </>
                ) : item?.qty}
            </td>
            <td className="px-4 py-3">₹{cartItems?.price * item?.qty}</td>
            <td className="px-4 py-3">
                {itemFor === 'cart' &&
                    <button
                        type="button"
                        className="float-right text-white bg-yellow-500 ease-in duration-300 border-0 px-2 mx-1 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded-md text-md"
                        onClick={() => removefromcart({ id: item?.id, qty: item?.qty })}
                        title="Remove from cart"
                    >
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ width: "11px", height: "11px" }}
                            className='inline align-baseline'
                        />
                    </button>
                }
            </td>
        </tr>
    )
}

export default CartItem
