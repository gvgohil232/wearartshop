import React from 'react'
import PageHead from '../src/components/PageHead/PageHead'
import Router from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import userProfile from '../src/assets/images/user.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOutAlt,
    faListAlt,
    faHeartCircleCheck,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from '../src/redux';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { logout, clearcart, clearorder, clearwishlist } = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <PageHead name="User Profile" />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <Image src={userProfile} height={60} width={60} alt="User" className="inline" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Admin</h2>
                                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                                <div className="w-40 my-1 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <Link href="/userprofile" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 text-yellow-500 focus:z-10 focus:ring-2 focus:ring-yellow-500 focus:text-yellow-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ">
                                        <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2 fill-current" />
                                        Profile
                                    </Link>
                                    <Link href="/orders" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-2 focus:ring-yellow-500 focus:text-yellow-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ">
                                        <FontAwesomeIcon icon={faListAlt} className="w-4 h-4 mr-2 fill-current" />
                                        Orders
                                    </Link>
                                    <Link href="/wishlist" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-2 focus:ring-yellow-500 focus:text-yellow-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ">
                                        <FontAwesomeIcon icon={faHeartCircleCheck} className="w-4 h-4 mr-2 fill-current" />
                                        Wishlist
                                    </Link>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-2 focus:ring-yellow-500 focus:text-yellow-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white "
                                        onClick={() => {
                                            // localStorage.setItem('isLoggedIn', false);
                                            clearcart();
                                            clearwishlist();
                                            clearorder();
                                            logout();
                                            setTimeout(() => {
                                                Router.push("/");
                                            }, 1000);
                                        }}>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-2 fill-current" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 py-4 sm:mt-0 sm:text-left">
                            <span className="font-medium title-font mt-4 text-gray-900 text-sm">Edit Profile</span>
                            <div className="w-12 h-1 bg-yellow-500 rounded  mb-4"></div>
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <span className="font-medium title-font mt-4 text-gray-900 text-sm">Manage Contact Details</span>
                            <div className="w-12 h-1 bg-yellow-500 rounded  mb-4"></div>
                            <div className="relative mb-4">
                                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 h-28 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div   >
                            <div className="relative mb-4">
                                <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Contact</label>
                                <input type="text" id="contact" name="contact" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-yellow-500 ease-in duration-300 border-0 py-1 px-4 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-sm md:text-md">
                                Save Changes
                            </button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default UserProfile
