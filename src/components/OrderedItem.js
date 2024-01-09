import React from 'react'

const orderedItem = ({ name, qty, price }) => {
    return (
        <tr>
            <td className="px-4 py-3">
                {name.replaceAll('_', ' ')}
                <p className='text-xs font-thin'>x {qty}</p>
            </td>
            <td className="px-4 py-3 text-right">₹{price * qty}</td>
        </tr>
    )
}

export default orderedItem
