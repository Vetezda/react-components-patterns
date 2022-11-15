import { ReactElement } from "react";
import { ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImgProps } from '../components/ProductImg';
import { ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product;
    increaseBy: (value: number) => void;
    counter: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Img: (Props: ProductImgProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
