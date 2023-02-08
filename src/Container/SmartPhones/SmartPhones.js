import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../Component/UseFetch/useFetch'
import '../../Component/ProductSection/productSection.css'

const SmartPhones = () => {
      const { loading, products } = useFetch('https://dummyjson.com/products')

      const getProduct = () =>{

      }


  return (
    <div className='product-container'>
      {
       loading 
       ? 
       <h1>Loading...</h1>
       :
        <>
          <h1 className='product-headline'>Smart Phones</h1>
          <div className='products'>
              {
                  products.map((product)=>{
                    const {id, title, description, category, price, thumbnail, images, rating, stock} = product
                    if(category === 'smartphones'){
                      return (
                        <div key={id} className='product'>
                            <Link to={`/detailpage/${id}`}><img src={thumbnail} /></Link>
                            <div className='product-details'>
                              <Link className='title' to={`/detailpage/${id}`}><h3>{title}</h3></Link>
                              <div className='price-rating'>
                                   <p>${price}</p>
                                   <p>Rating: {rating}/5</p>
                              </div>
                            </div>
                            <button className='add-cart' onClick={getProduct}>ADD TO CART</button>
                            <span className='product-stock'>Stock: {stock}</span>
                        </div>
                    )
                    }     
                  })
              }
          </div>
        </>
      }
    </div>
  )
}

export default SmartPhones
