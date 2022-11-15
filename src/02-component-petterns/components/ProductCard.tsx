import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps,  } from '../interfaces/productInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];//para que acepte uno o varios elementos
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({children, product, className, style }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ product, counter, increaseBy }} >
        <div className={ `${styles.productCard} ${className}`} style={ style }>

            { children }

            {/*<ProductImg img={product.img} />
            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} />*/}

        </div>
    </Provider>
  )
}


