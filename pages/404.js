import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHead from '../src/components/PageHead/PageHead'
import pagenotfound from '../src/assets/svgs/pagenotfound.svg'

const PageNotFound = () => {
    return (
        <>
        <PageHead name="404 - Page not found"/>
            <div className='text-center mx-auto py-5 my-5'>
                <Image
                    src={pagenotfound}
                    height={150}
                    width={150}
                    className='w-1/4 m-auto my-5 pointer-events-none'></Image>
                <strong className='sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase font-bold'>Sorry, Page not found!</strong>
                <p className='lg:w-2/3 mx-auto my-2 leading-relaxed text-base'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link href='/' className='text-yellow-500 font-bold tracking-wider'>← Back to Homepage</Link>
            </div>
        </>
    )
}

export default PageNotFound
