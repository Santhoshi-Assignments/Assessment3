import React from 'react'
import "./Products.css";

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className='products'>
        {productItems.map((productItem) => (
            <div key={productItem.id} className='card'>
                <div>
                    <img className="product-image"
                    src={productItem.image} 
                    alt={productItem.name}
                    />
                </div>
                <div>
                    <h3 className='product-name'>
                        {productItem.name}
                    </h3>
                </div>

                <div className='product-description'>
                    {productItem.description}
                </div>

                <div className='product-type'>
                    Type: {productItem.type}
                </div>

                <div className='product-rating'>
                    Rating: {productItem.rating}
                </div>
         

                <div className='product-price'>
                    Price: ${productItem.price}
                
                    <div>
                        <button className='product-add-button' 
                        onClick={() => handleAddProduct(productItem)}>
                            Purchase
                        </button>
                    </div>
                </div>
                <div className='product-buttons'>
                    <button className='product-like-button'>
                        Like
                    </button>
                    <button className='product-share-button'>
                        Share
                    </button>
                </div>



            </div>
        )
        )}
    </div>
  )
}

export default Products