import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PageHead from '../src/components/PageHead/PageHead'
import CartItem from '../src/components/CartItem';
import { products } from '../src/utills/globalData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWallet,
    faCreditCard,
    faMoneyBills,
    faG
} from "@fortawesome/free-solid-svg-icons";
import { bindActionCreators } from "redux";
import { actionCreators } from '../src/redux';
// import { useRouter } from 'next/navigation';
import Router from 'next/router';
import styles from '../src/styles/Home.module.css'

const Checkout = () => {
    const storeCart = useSelector((state) => state.cart);
    const loginout = useSelector((state) => state.loginout);

    // const router = useRouter();

    const [cartTotal, setCartTotal] = useState(0);
    const [confirmingOrder, setConfirmingOrder] = useState();
    const [selectedAddress, setSelectedAddress] = useState('home');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod');

    const addresses = [
        { type: 'home', fulladdress: 'Romsho Heights, nr. Moscor Public School, Bhavnagar, Gujarat - 364001' },
        { type: 'office', fulladdress: 'Sonway Plaza, opp. flying junction, Bhavnagar, Gujarat - 364001' }
    ]

    const [continueCheckout, setContinueCheckout] = useState(false);
    const [deliverHere, setDeliverHere] = useState(false);

    const dispatch = useDispatch();
    const { orderconfirmed, clearcart } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        let productPrices = 0;
        let orderdata = [];
        storeCart?.map((b) => {
            products?.filter((a) => {
                if (a.id === b.id) {
                    let two = parseFloat(a.price) * b.qty;
                    productPrices = productPrices + two;

                    orderdata = [...orderdata, { ...a, qty: b.qty, address: addresses?.[selectedAddress === 'home' ? 0 : 1], paymentMethod: selectedPaymentMethod }];
                }
            })
        });
        setCartTotal(productPrices);
        setConfirmingOrder(orderdata);
    }, [storeCart, selectedAddress, selectedPaymentMethod]);

    return (
        <>
            <PageHead name="Checkout" />
            <div className='container mx-auto py-5'>
                <h1 className="text-center m-1 p-1 text-1xl font-medium title-font text-gray-900">Check it  out</h1>
                <details open className='productDetails rounded-md border-gray-300 shadow-md mx-3 my-4 p-4 select-none'>
                    <summary onClick={(e) => e.preventDefault()} className='font-medium'>Order Summary</summary>
                    <div className='my-2 p-2'>
                        {storeCart.length > 0 ?
                            (<>
                                <div className="lg:w-3/4 w-full  overflow-auto">
                                    <table className="table-auto w-full text-left whitespace-no-wrap">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">#</th>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Category</th>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Qty</th>
                                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {storeCart?.map((item, index) =>
                                            (
                                                <CartItem item={item} key={index} index={index} products={products} />
                                            )
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="mt-2 text-right capitalize">
                                        Total Amount: ₹ {cartTotal}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="mx-2 mt-2 text-white bg-yellow-500 ease-in duration-300 border-0 py-1 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-sm"
                                    onClick={() => {
                                        setContinueCheckout(true);
                                    }}>
                                    Continue
                                </button>
                            </>) : 'No items in your cart.'}
                    </div>
                </details>
                <details open={continueCheckout ? true : ''} className='productDetails rounded-md border-gray-300 shadow-md mx-3 my-4 p-4 select-none'>
                    <summary onClick={(e) => e.preventDefault()} className='font-medium'>Delivery Address</summary>
                    <div className=' my-2 p-2'>
                        <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input
                                    type="radio"
                                    id="homeAddress"
                                    name="address"
                                    value="homeAddress"
                                    className="hidden peer"
                                    required
                                    checked={selectedAddress === 'home'}
                                    onChange={(e) => {
                                        setSelectedAddress('home');
                                    }}
                                />
                                <label htmlFor="homeAddress" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold capitalize">{addresses?.[0]?.type}</div>
                                        <div className="w-full">Mon to Sat - 8 AM to 8 PM</div>
                                        <small>{addresses?.[0]?.fulladdress}</small>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="officeAddress"
                                    name="address"
                                    value="officeAddress"
                                    className="hidden peer"
                                    checked={selectedAddress === 'office'}
                                    onChange={(e) => {
                                        setSelectedAddress('office');
                                    }}
                                />
                                <label htmlFor="officeAddress" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold capitalize">{addresses?.[1]?.type}</div>
                                        <div className="w-full">Mon to Fri - 9 AM to 5 PM</div>
                                        <small>{addresses?.[1]?.fulladdress}</small>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="addAddress" className="inline-flex items-center justify-between w-full p-4 mt-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Add Address</div>
                                    </div>
                                </label>
                                <label htmlFor="addMapAddress" className="inline-flex items-center justify-between w-full p-4 mt-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Find on Map</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="my-1 mx-2 text-white bg-yellow-500 ease-in duration-300 border-0 py-1 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-sm"
                        onClick={() => {
                            setDeliverHere(true);
                        }}>
                        Deliver here
                    </button>
                </details>
                <details open={deliverHere ? true : ''} className='productDetails rounded-md border-gray-300 shadow-md mx-3 my-4 p-4 select-none'>
                    <summary onClick={(e) => e.preventDefault()} className='font-medium'>Payment Option</summary>
                    <div className=' my-2 p-2'>
                        <ul className="grid w-full gap-6 md:grid-cols-4">
                            <li>
                                <input
                                    type="radio"
                                    id="upipmnt"
                                    name="pmntmethod"
                                    value="upipmnt"
                                    className="hidden peer"
                                    onChange={() => setSelectedPaymentMethod('upi')}
                                />
                                <label htmlFor="upipmnt" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faG} className="w-4 h-4 mr-2 fill-current" />
                                    <div className="pl-2 w-full text-lg font-semibold">UPI</div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="walletpmnt"
                                    name="pmntmethod"
                                    value="walletpmnt"
                                    className="hidden peer"
                                    onChange={() => setSelectedPaymentMethod('wallet')}
                                />
                                <label htmlFor="walletpmnt" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faWallet} className="w-4 h-4 mr-2 fill-current" />
                                    <div className="pl-2 w-full text-lg font-semibold">Wallet</div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="cardpmnt"
                                    name="pmntmethod"
                                    value="cardpmnt"
                                    className="hidden peer"
                                    onChange={() => setSelectedPaymentMethod('card')}
                                />
                                <label htmlFor="cardpmnt" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4 mr-2 fill-current" />
                                    <div className="pl-2 w-full text-lg font-semibold">Credit/Debit Card</div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="codpmnt"
                                    name="pmntmethod"
                                    value="codpmnt"
                                    className="hidden peer"
                                    onChange={() => setSelectedPaymentMethod('cod')}
                                />
                                <label htmlFor="codpmnt" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-yellow-500 peer-checked:border-yellow-600 peer-checked:text-yellow-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faMoneyBills} className="w-4 h-4 mr-2 fill-current" />
                                    <div className="pl-2 w-full text-lg font-semibold">Cash On Delivery</div>
                                </label>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="mt-3 text-white bg-yellow-500 ease-in duration-300 border-0 py-1 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-sm"
                            onClick={() => {
                                if (loginout === true) {
                                    orderconfirmed(confirmingOrder);
                                    Router.push('/orderplaced');
                                    clearcart();
                                }
                            }}
                        >
                            Pay  {cartTotal ? `₹ ${cartTotal}` : ''}
                        </button>
                    </div>
                </details>
            </div>
        </>
    )
}

export default Checkout
