import { Button } from "@/components/Button";
import { useCartStore } from "@/state/useCartStore";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { currencyFormatter } from "@/utils";
import { Heading } from "@/components/Heading";

export default function Cart() {
  const state = useCartStore();

  const total = state.cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <>
      <Heading text="Cart" />
      <ul>
        {state.cart.map((product) => (
          <li
            key={product.id}
            className="py-3 px-5 mb-3 flex items-center justify-between bg-zinc-900 rounded"
          >
            <div>
              <p className="text-2xl">{product.name}</p>
              <p className="text-xl font-bold">
                {currencyFormatter.format(product.price * product.quantity)}
              </p>
            </div>
            <div className="flex items-center mt-2">
              <button
                type="button"
                onClick={() => state.removeFromCart(product.id)}
              >
                <FiMinusCircle />
              </button>

              <span className="block mx-3">{product.quantity}</span>
              <button
                type="button"
                className="mr-6"
                onClick={() => state.addToCart(product)}
              >
                <FiPlusCircle />
              </button>
              <Button
                text="Remove from cart"
                Icon={RiDeleteBin6Fill}
                onClick={() => state.removeAllProductFromCart(product.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full h-0.5 my-8 bg-white rounded"></div>
      <div className="py-3 px-5 mb-3  bg-zinc-900 rounded flex items-center justify-between">
        <h2 className="text-3xl mb-1 font-medium">Total</h2>
        <span className="text-3xl font-bold">
          {currencyFormatter.format(total)}
        </span>
      </div>
    </>
  );
}
