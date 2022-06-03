import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../interfaces/product";
import { addProductToCart } from "../store/modules/cart/reducer";

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" "}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
    </article>
  );
}