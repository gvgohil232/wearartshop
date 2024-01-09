import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <div
            className={`${visible ? 'visible' : 'hidden'} fixed z-30 bottom-0 right-0 mr-5 mb-5 cursor-pointer rounded-full`}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}
            title="Back To Top"
        >
            <div id='backToTop' className='text-black/20 opacity-50 hover:text-yellow-500 opacity-100'>
                <FontAwesomeIcon icon={faChevronCircleUp} style={{ width: "35px", height: "35px" }} />
            </div>
        </div>
    )
}

export default BackToTop
