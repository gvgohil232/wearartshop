import React, { useEffect, useState } from 'react'
import PageHead from '../src/components/PageHead/PageHead';
import { products } from '../src/utills/globalData';
import { useSelector } from 'react-redux';
import CartItem from '../src/components/CartItem';
import Router from 'next/router';

const Cart = () => {
  const storeCart = useSelector((state) => state.cart);
  const loginout = useSelector((state) => state.loginout);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let productPrices = 0;
    storeCart?.map((b) => {
      products?.filter((a) => {
        if (a.id === b.id) {
          let two = parseFloat(a.price) * b.qty;
          productPrices = productPrices + two;
        }
      })
    });
    setCartTotal(productPrices);
  }, [storeCart]);

  return (
    <>
      <PageHead name="Cart" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Cart list</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You have total {storeCart?.length} item(s) in your cart.</p>
          </div>
          {storeCart.length > 0 &&
            (<>
              <div className="w-full mx-auto overflow-auto">
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
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {storeCart?.map((item, index) =>
                    (
                      <CartItem item={item} key={index} index={index} products={products} itemFor='cart' />
                    )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="text-right font-semibold mt-4 lg:w-2/3 w-full mx-auto capitalize">
                Total Amount: ₹{cartTotal}
              </div>
              <div className="flex justify-between text-center pl-4 mt-4 lg:w-2/3 w-full mx-auto capitalize">
                <button
                  type='button'
                  className='mx-2 mt-1 text-white bg-yellow-500 ease-in duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-md'
                  onClick={() => {
                    Router.push('/')
                  }}
                >
                  ← Continue Shopping
                </button>
                <button
                  type='button'
                  className="mx-2 mt-1 text-white bg-yellow-500 ease-in duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-yellow-500 to-red-400 rounded text-md"
                  onClick={() => {
                    Router.push(`/${loginout === true ? 'checkout' : 'login'}`)
                  }}
                >
                  Place order →
                </button>

              </div>
            </>)}
        </div>
      </section>
    </>
  )
}

export default Cart
