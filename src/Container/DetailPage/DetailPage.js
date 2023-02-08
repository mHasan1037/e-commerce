import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import useFetch from '../../Component/UseFetch/useFetch'
import { Link } from 'react-router-dom'
import './detailPage.css'

const DetailPage = () => {
  const [item, setItem] = useState([])
  const [mainImg, setMainImg] = useState('')
  const [sameProduct, setSameProduct] = useState([])
  const { loading, products } = useFetch('https://dummyjson.com/products')
  const { id } = useParams()


  useEffect(()=>{
    const product = products.find(product => product.id === Number(id))
    if(product){
      setItem(product)
      setMainImg(product.thumbnail)
    }
  },[products])


  useEffect(()=>{
    const product = products.find(product => product.id === Number(id))
    if(product){
      setItem(product)
      setMainImg(product.thumbnail)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [id, products])
  

  useEffect(()=>{
    const allProduct = products.filter(product => product.category === item.category)
    setSameProduct(allProduct)
  }, [item, products])


 // Star rating of the customer
  const stars = Array(5).fill(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  const handleClick = (value) =>{
    setCurrentValue(value)
  }

  const handleMouseOver = (value) =>{
     setHoverValue(value)
  }

  const handleMouseLeave = (value) =>{
     setHoverValue(undefined)
  }

  return (
    loading ? <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10vw'
    }}>Loading...</div> :
    <div>
       <div>
           <h1 className='product-headline'>Product Detail</h1>
       </div>
      <div className='product-box'>
         <div className='product-image-box'>
            {
              products && item && (
                <div className='product-main-img'>
                   <img className='main-image' src={mainImg} />
                </div>
              )
            }
            <div className='short-img-box'>
            {
            products && item && item.images && item.images.map((image, id)=>{
              return <img className='short-img' key={id} src={image} onClick={()=> setMainImg(image) }/>
            })
            }
            </div>

         </div>
         <div className='product-description-box'>
          {
            products && item && item.price && !isNaN(item.price) && (
              <div>
                <h1>{item.title}</h1>
                <h3>{item.brand}</h3>
                <div className='product-price'>
                  <span>${parseInt(item.price + item.price / 100 * 25)}</span>
                  <span>${item.price}</span>
                </div>
                <p className='dis-percentage'>Discount Percentage: {item.discountPercentage}</p>
                <div className='product-rating-stock'>
                   <span>Rating: {item.rating}</span>
                   <span>Stock: {item.stock}</span>
                </div>
                <p style={{width: '300px', textAlign: 'center', margin: '10px auto'}}>{item.description}</p>
              </div>
            )
          }
           <button className='button'>Add to cart</button>
         </div>
      </div>

         <div className='add-review'>
            <h2 style={{margin: '20px auto'}}>Add your review</h2>
            <div className='rating-box'>
               {stars.map((_, index)=>{
                 return (
                  <FaStar 
                     key={index}
                     size={24}
                     style={{
                       marginRight: 10,
                       cursor: 'pointer'
                     }}
                     color={(hoverValue || currentValue) > index ? "#FFBA5A" : "#7D7E7C"}
                     onClick={()=> handleClick(index + 1)}
                     onMouseOver={()=> handleMouseOver(index + 1)}
                     onMouseLeave={handleMouseLeave}
                  />
                 )
               })}             
            </div>
            <textarea className='review-box'></textarea>
            <button className='button'>Submit</button>
         </div>

      <div>
        <h1 className='product-headline'>Similar Products</h1>
            <div className='products'>
                {
                    sameProduct.map((product)=>{
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
                                <button className='add-cart'>ADD TO CART</button>
                                <span className='product-stock'>Stock: {stock}</span>
                            </div>
                      )     
                    })
                }
            </div>
      </div>
    </div>
  )
}

export default DetailPage




