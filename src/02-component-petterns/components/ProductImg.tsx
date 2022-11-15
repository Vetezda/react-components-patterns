import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ProductImgProps {
    img?: string,
    className?: string,
    style?: React.CSSProperties
}


export const ProductImg = ({img='', className, style}: ProductImgProps) => {

    const {product} = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img
    }else if ( product.img ) {
        imgToShow = product.img;
    }else {
        imgToShow = noImage;
    }

    return <img src={imgToShow} 
                alt="product" 
                className={`${styles.productImg} ${className}`}
                style={style} />
}
