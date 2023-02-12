import React, { useContext } from 'react'
import CartContext from '../../Hooks/CartContext/CartContext'
import { Link } from 'react-router-dom'
import useFetch from '../../Hooks/UseFetch/useFetch'
import './productSection.css'
import useCart from '../../Hooks/AddCart/useCart'
import Loading from '../Loading/Loading'

const ProductSection = () => {
      const { loading, products } = useFetch('https://dummyjson.com/products')
      const [handleProduct] = useCart('addProduct')
      const { updateCart, setUpdateCart, setCartNotification} = useContext(CartContext)


  return (
    <div className='product-container'>
      {
       loading 
       ? 
       <Loading />
       :
        <>
          <h1 className='product-headline'>Products</h1>
          <div className='products'>
              {
                  products.map((product)=>{
                    const {id, title, description, category, price, thumbnail, images, rating, stock} = product
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
                              <button 
                                  className='add-cart' 
                                  onClick={()=> {
                                     handleProduct(id); 
                                     setUpdateCart(prev => isNaN(parseInt(prev)) ? 1 : parseInt(prev) + 1)
                                     setCartNotification(true)
                                     }}>
                                    ADD TO CART
                                    </button>
                              <span className='product-stock'>Stock: {stock}</span>
                          </div>
                    )     
                  })
              }
          </div>
        </>
      }
    </div>
  )
}

export default ProductSection

