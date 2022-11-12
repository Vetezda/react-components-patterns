import { ProductCard as  ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/productInterfaces";


import { ProductImg } from "./ProductImg";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";


export { ProductImg } from "./ProductImg";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Img: ProductImg,
    Title: ProductTitle,
    Buttons: ProductButtons
});

export default ProductCard;
