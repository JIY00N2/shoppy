import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section>
      <p>내 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  uid={uid}
                ></CartItem>
              ))}
          </ul>
          <div>
            <PriceCard text="상품 총액" price={totalPrice}></PriceCard>
            <BsFillPlusCircleFill></BsFillPlusCircleFill>
            <PriceCard text="배송액" price={SHIPPING}></PriceCard>
            <FaEquals></FaEquals>
            <PriceCard text="총가격" price={totalPrice + SHIPPING}></PriceCard>
          </div>
        </>
      )}
    </section>
  );
}
