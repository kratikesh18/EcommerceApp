import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../Components/cartTile/CartTile.jsx";


export default function Cart() {
  const [cartTotal, setCartTotal] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setCartTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, cartTotal);

  return (
    <div className="flex">
      {cart && cart.length ? (
        <div className="min-h-[80vh ] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center  p-3">
                {
                    cart.map(cartItem => <CartTile key={cartItem.id} cartItem={cartItem}/>)
                }
            </div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-10">
                <h2 className="">Your Cart Summary</h2>
                <p className="text-gray-800 font-bold">
                    <span >Total Items </span>
                    <span>:{cart.length}</span>
                </p>
                <p className="text-gray-800 font-bold">
                    <span>Total Amount</span>
                    <span>:{cartTotal} Rs.</span>
                </p>
            </div>
        </div>
      ) : (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
