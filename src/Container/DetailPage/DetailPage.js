import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Component/UseFetch/useFetch'

const DetailPage = () => {
  const [item, setItem] = useState([])
  const { loading, products } = useFetch('https://dummyjson.com/products')
  const { id } = useParams()

  useEffect(()=>{
    const product = products.find(product => product.id === Number(id))
    setItem(product)
  },[products])

  return (
    <div>
      {
        products && item && (
          <div>
             <h1>{item.title}</h1>
             <img width='200' src={item.thumbnail} />
             <p>{item.price}</p>
          </div>
        )
      }
    </div>
  )
}

export default DetailPage