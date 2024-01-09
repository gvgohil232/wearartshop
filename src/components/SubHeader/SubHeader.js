import React from 'react'
import styles from './SubHeader.module.css';
import Link from 'next/link';
import { menuItems } from '../../utills/globalData';
import { useRouter } from 'next/router';

const SubHeader = () => {
  const router = useRouter();
  return (
    <div className={`${styles.subHeaderContainer} text-gray-600 body-font border-b`}>
      <div className="container mx-auto flex flex-wrap px-5 pt-14 sm:pt-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-medium uppercase text-base justify-center">
          {menuItems?.map((item, key) => (
            <>
              <Link href={`${item?.url}${item?.name}`} key={key} legacyBehavior>
                <a className={`mx-5 pb-2 ${router.query.category === item?.name ? 'border-b-2 text-yellow-500 border-yellow-500' : ''} hover:text-yellow-500 sm:text-sm`}>
                  {item?.name}
                </a>
              </Link>
            </>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default SubHeader
