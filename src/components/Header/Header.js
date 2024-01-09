import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Wearart from '../../../public/wearart.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbedSuitcase,
  faUser,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Header = () => {
  const [searchBoxValue, setSearchBoxValue] = useState('');

  const cartValue = useSelector((state) => state.cart);
  const loginout = useSelector((state) => state.loginout);

  return (
    <header className="z-50 text-gray-600 body-font border-b fixed inset-x-0 top-0 bg-slate-100 shadow-lg shadow-gray-200/30">
      <div className="container mx-auto flex flex-wrap md:flex-row items-center p-2 justify-between">
        <Link href="/" legacyBehavior>
          <a className="sm:flex w-full block text-center sm:w-auto title-font font-medium items-center text-gray-900 md:mb-0">
            <span className="text-xl"><Image src={Wearart} height={28} width={28} alt="Wearart" className="inline pointer-events-none" />{' '}Wearart</span>
          </a>
        </Link>
        {/* <form className=''> */}
        <div className="relative">
          <input
            type="input"
            id="search"
            onChange={(e) => setSearchBoxValue(e.target.value)}
            className="block w-full p-2.5 text-sm text-gray-900 bg-transparent border-b-2 outline-0 focus:border-yellow-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500" placeholder="Search" required
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchBoxValue !== '') {
                Router.push(`/search?q=${searchBoxValue}`)
              }
            }}
          />
          <button
            type='button'
            className="absolute right-1 bottom-0 top-0.5 border-0 py-2 m-1 focus:outline-none rounded-full text-base md:mt-0"
            title="Search"
            onClick={() => {
              if (searchBoxValue !== '') {
                Router.push(`/search?q=${searchBoxValue}`)
              }
            }
            }
          >
            <FontAwesomeIcon icon={faSearch} style={{ width: "13px", height: "13x" }} />
          </button>
        </div>
        {/* </form> */}
        <nav className=" flex flex-wrap items-center text-base justify-center">
          {/* <button className="inline-flex items-center border-0 p-2 m-1 focus:outline-none hover:bg-gray-300 rounded-full text-base md:mt-0" title="Search">
            <FontAwesomeIcon icon={faSearch} style={{ width: "16px", height: "16px" }} />
          </button> */}
          <Link href='/cart'>
            <button className="relative inline-flex items-center border-0 p-2 m-1 focus:outline-none hover:bg-gray-300 rounded-full text-base md:mt-0" title="Bag">
              <FontAwesomeIcon icon={faCartFlatbedSuitcase} style={{ width: "18px", height: "18px" }} />
              {cartValue?.length > 0 &&
                <span className="inline-flex absolute -top-1 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">{cartValue?.length}</span>
              }
            </button>
          </Link>
          <Link href={`${loginout === true ? '/userprofile' : '/login'}`}>
            <button
              className="inline-flex items-center border-0 p-2 m-1 focus:outline-none hover:bg-gray-300 rounded-full md:mt-0 text-xs"
              title={`${loginout === true ? 'Profile' : 'Login'}`}>
              <FontAwesomeIcon icon={faUser} style={{ width: "18px", height: "18px" }} />
              {/* {isloggedin === 'true' ?
                  <span className='pl-1'>GV</span>
                  : ''} */}
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
