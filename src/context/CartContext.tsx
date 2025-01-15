"use client";
import { TCart } from "@/Types";
import { ReactNode, createContext, useEffect, useState } from "react";
interface TCartContext {
  cart: TCart[];
  addToCart: (item: any) => void;
  removeFromLocalStorage: (item: any) => void;
  increaseCartQuantity: (item: any) => void;
  decreaseCartQuantity: (item: any) => void;
}
export const CartContext = createContext<TCartContext>({
  cart: [],
  addToCart: () => {},
  removeFromLocalStorage: () => {},
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
});
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    setCartToState();
  }, []);
  const setCartToState = () => {
    const items = localStorage.getItem("shopping-cart");
    setCart(JSON.parse(items as string));
  };

  const addToCart = async ({
    quantity,
    name,
    image,
    size,
    color,
    price,
    productId,
  }: TCart) => {
    const item = {
      size,
      color,
      price,
      productId,
      name,
      image,
    };

    const isExistItem = cart?.find(
      (i: TCart) => i?.productId === item?.productId
    );
    let newCartItem;
    if (isExistItem) {
      newCartItem = cart.map((i: TCart) =>
        i.productId === item.productId ? { ...i, quantity: i?.quantity + 1 } : i
      );
    } else {
      newCartItem = [...(cart || []), { ...item, quantity: quantity || 1 }];
    }

    localStorage.setItem("shopping-cart", JSON.stringify(newCartItem));
    setCartToState();
  };

  const removeFromLocalStorage = (id: string) => {
    const newCartItems = cart?.filter((i: TCart) => i.productId !== id);
    localStorage.setItem("shopping-cart", JSON.stringify(newCartItems));
    setCartToState();
  };

  const increaseCartQuantity = (id: string) => {
    const cartItems: any = cart.map((i: TCart) =>
      i.productId === id ? { ...i, quantity: i?.quantity + 1 } : i
    );
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    setCartToState();
  };

  const decreaseCartQuantity = (id: string) => {
    const updatedCartItems = cart.map((item: TCart) => {
      if (item.productId === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCartItems));
    setCartToState();
  };

  const values: any = {
    cart,
    addToCart,
    removeFromLocalStorage,
    increaseCartQuantity,
    decreaseCartQuantity,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
