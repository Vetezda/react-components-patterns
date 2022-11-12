import { ProductCard, ProductImg, ProductTitle, ProductButtons  } from '../components';

const product = {
    id: '1',
    title: 'Coffee cup',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',

        }}>

            <ProductCard product={ product } >
                <ProductCard.Img />
                <ProductCard.Title title={ '' } />
                <ProductCard.Buttons />
            </ProductCard>
            
            <ProductCard product={ product } >
                <ProductCard.Img />
                <ProductCard.Title title={ 'Coffe dev :)' } />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ product } >
                <ProductCard.Img />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>


            <ProductCard product={ product } >
                <ProductImg />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>

        </div>
    </div>
  )
}
