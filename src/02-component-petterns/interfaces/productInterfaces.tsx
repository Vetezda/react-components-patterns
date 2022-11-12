import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];//para que acepte uno o varios elementos
}

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
    Title: ({ title }: { title?: string }) => JSX.Element;
    Img: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}
