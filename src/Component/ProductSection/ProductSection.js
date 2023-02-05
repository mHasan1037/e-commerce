import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductSection = () => {
    const [products, setProducts] = useState([])

    const fetchData = () =>{
      const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
        params: {ingr: ''},
        headers: {
          'X-RapidAPI-Key': 'cce05c14d6msh6d4a1104f708a78p1b3e43jsn0c753286ba83',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };
  
      axios.request(options).then(function (response) {
        setProducts(response.data.hints);
      }).catch(function (error) {
        console.error(error);
      });
    }

    useEffect(()=>{
        fetchData()
    }, [])


  return (
    <div>
      {
        products.map((product, idex) =>{
          const { food } = product
          return (
            <div key={food.foodId}>
               <img src={food.image} />
            </div>
          )

         
        })
      }
    </div>
  )
}

export default ProductSection