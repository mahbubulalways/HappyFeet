import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TSignIn = {
  email: string;
  password: string;
};

//  product types

interface TColor {
  _id: string;
  colorName: string;
  colorCode: string;
}

export interface TProduct {
  _id: string;
  name: string;
  brand: string;
  productCode: string;
  image: string;
  images: string[];
  availability: "In stock" | "Out of stock";
  price: number;
  discount: number;
  offerPrice: number;
  productType: string;
  category: string;
  colors: TColor[];
  size: string[];
  features: string[];
  gender: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

//

export type TCart = {
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  productId: string;
};

// checkout
export type TCheckout = {
  personInfo: {
    division: string;
    district: string;
    upazila: string;
    email: string;
    mobileNumber: string;
    fullName: string;
    address: string;
    postalCode: string;
  };
  order: TCart[];
  paymentType: string;
  totalPrice: number;
};
