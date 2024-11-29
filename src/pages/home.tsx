import { useQuery } from "@tanstack/react-query";
import { FaCartShopping } from "react-icons/fa6";

import { useCartStore } from "@/state/useCartStore";
import { Button } from "@/components/Button";
import { getProducts } from "@/services";
import { currencyFormatter } from "@/utils";
import { Heading } from "@/components/Heading";

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);

  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isFetching) return <p>Loading...</p>;

  return (
    <>
      <Heading text="Products" />
      <ul className="grid grid-cols-3 gap-3">
        {data?.map((product) => (
          <li key={product.id} className="py-3 px-5 rounded bg-zinc-900">
            <p className="text-2xl text-gray-300 mb-2">{product.name}</p>
            <p className="font-bold text-gray-300">
              {currencyFormatter.format(product.price)}
            </p>
            <div className="mt-3 flex justify-end">
              <Button
                text="Add to Cart"
                Icon={FaCartShopping}
                onClick={() => addToCart(product)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
