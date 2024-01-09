import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import PageHead from '../src/components/PageHead/PageHead';
import { bindActionCreators } from "redux";
import { actionCreators } from '../src/redux';

const Login = () => {
    const storeCart = useSelector((state) => state.cart);
    const loginout = useSelector((state) => state.loginout);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const dispatch = useDispatch();
    const { login } = bindActionCreators(actionCreators, dispatch);

    const submitLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            // localStorage.setItem("isLoggedIn", true);
            login();
            Router.push(`${storeCart?.length > 0 ? '/cart' : '/'}`);
        }
        if (username === '' || username !== 'admin') {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        if (password === '' || password !== 'admin') {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    useEffect(() => {
        if (loginout) {
            Router.push('/');
        }
    }, [])

    return (
        <>
            <PageHead name="Login" />
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 md:shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative w-full px-4 py-10 bg-white md:shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-2xl font-semibold">Login</h1>
                            <div className="divide-y divide-gray-200 text-sm">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <form onSubmit={submitLogin} className='w-72 md:w-96'>
                                        <div className="relative mt-6">
                                            <input
                                                autoComplete="off"
                                                id="email"
                                                name="email"
                                                type="text"
                                                className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:border-yellow-500 focus:outline-none focus:borer-rose-600 ${usernameError && 'border-red-500'}`}
                                                placeholder="Email address"
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
                                                }}
                                            />
                                            <label htmlhtmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                            {usernameError && <small className='text-xs text-red-500'>Please enter valid username.</small>}
                                        </div>
                                        <div className="relative mt-6">
                                            <input
                                                autoComplete="off"
                                                id="password"
                                                name="password"
                                                type="password"
                                                className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:border-yellow-500 focus:outline-none focus:borer-rose-600 ${passwordError && 'border-red-500'}`}
                                                placeholder="Password"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                            />
                                            <label htmlhtmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                            {passwordError && <small className='text-xs text-red-500'>Please enter valid password.</small>}
                                        </div>
                                        <div className="relative text-center pt-6">
                                            <button
                                                type='submit'
                                                className="text-white bg-yellow-500 ease-in duration-300 border-0 py-1 px-3 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-sm"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
