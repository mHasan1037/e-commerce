import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const fetchData = async() =>{
        setLoading(true)
        const { data } = await axios.get(url)
        setLoading(false)
        setProducts(data.products)
      }
  
      useEffect(()=>{
          fetchData()
      }, [])

      return {loading, products}
}

export default useFetch