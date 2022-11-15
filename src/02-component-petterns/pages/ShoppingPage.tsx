import { ProductCard, ProductImg, ProductTitle, ProductButtons  } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee cup',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',

        }}>

            <ProductCard product={ product } className="bg-dark">
                <ProductCard.Img className="custom-image"/>
                <ProductCard.Title className="text-white"/>
                <ProductCard.Buttons className="custom-button"/>
            </ProductCard>

            <ProductCard 
                product={ product }  
                className="bg-dark"
                style={{
                    backgroundColor: '#70D1F8',
                    textAlign: 'center',
                }}>

                <ProductImg
                className="custom-image"
                style={{ 
                    borderRadius: '50%'
,                   boxShadow: '0 0 10px #000'  
                }}/>

                <ProductTitle style={{ 
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    color: '#FFFFFF'
                }}/>

                <ProductButtons className="custom-button" style={{ display: 'flex', justifyContent: 'center'}}/>
            
            </ProductCard>

        </div>
    </div>
  )
}
