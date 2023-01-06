"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Basket from "../../components/Basket";
import { clearBasket } from "../../features/basketSlice";

const page = () => {
  const dispatch = useDispatch();
  let sumTotal = 0;
  const { basket } = useSelector((state) => state.basket);
  basket.map((item) => (sumTotal += item.price));
  const clearbasket = () => {
    dispatch(clearBasket());
  };
  return (
    <div>
      {basket.length ? (
        <div className="flex flex-wrap justify-center gap-6 mt-7">
          {basket.map((produc, index) => (
            <Basket produc={produc} key={index} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center mt-20">
          Sepette Ürün Bulunmamaktadır...
        </p>
      )}
      {basket.length ? (
        <div className="w-full flex justify-center">
          <button
            className="w-36 bg-slate-700 py-1 px-2 rounded-md text-slate-300 font-bold active:scale-95 active:bg-slate-600 mb-16 mt-5"
            onClick={clearbasket}
          >
            CLEAR BASKET
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="fixed bg-slate-300 bottom-0 w-full text-end pr-4 font-bold py-2 text-lg">
        TOPLAM : {sumTotal} TL
      </div>
    </div>
  );
};

export default page;
