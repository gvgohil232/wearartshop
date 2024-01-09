import React from 'react'
import PageHead from '../src/components/PageHead/PageHead';
import { faqData } from '../src/utills/globalData';

const faq = () => {
    return (
        <>
            <PageHead name="FAQ" />
            <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-10 pt-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Frequently Asked Questions</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We can tell whether a man is wise by his questions.</p>
                </div>
                <div className="w-full text-xs md:text-sm overflow-auto mb-4">
                    <div className="text-gray-600 body-font px-4 pb-4 w-full">
                        {faqData?.map((item) => (
                            <>
                                <details className='rounded-md border-gray-300 shadow-md mx-3 my-4 p-4 cursor-default leading-loose'>
                                    <summary className=''>{item?.ques}</summary>
                                    <p className='my-2'>{item?.ans}</p>
                                </details>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default faq
