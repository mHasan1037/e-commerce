import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../Hooks/UseFetch/useFetch'
import styles from './cartPage.module.css'
import {RxCross2} from 'react-icons/rx'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCreditCard } from 'react-icons/fa'
import Loading from '../../Component/Loading/Loading'
import CartContext from '../../Hooks/CartContext/CartContext'

const CartPage = () => {
    const {loading, products} = useFetch('https://dummyjson.com/products')
    const [storedIds, setStoredIds] = useState(JSON.parse(localStorage.getItem('addProduct')) || [])
    const [totalBuy, setTotalBuy] = useState(0)
    const { updateCart, setUpdateCart} = useContext(CartContext)

    useEffect(() => {
        const storedIds = JSON.parse(localStorage.getItem('addProduct')) || []
        setStoredIds(storedIds)
    }, [])

    const productCount = storedIds.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1
        return acc
    }, {})

    

    const filteredProducts = products.filter(product => productCount[product.id])

    useEffect(()=>{
        setTotalBuy(filteredProducts.length)
    }, [filteredProducts])


    const totalPrice = filteredProducts.reduce((acc, product)=>{
        return acc + product.price
    }, 0)

    const delivery = filteredProducts.length * 20

    const total = totalPrice + delivery


    const handleDelete = (id) =>{
       const updatedIds = storedIds.filter(storedId => storedId !== id)
       setStoredIds(updatedIds)
       localStorage.setItem('addProduct', JSON.stringify(updatedIds))
       setUpdateCart(prev => isNaN(parseInt(prev)) ? 0 : parseInt(prev) + 1);
    }


  return (
    <>
      {loading 
       ?
       <Loading /> 
       : 
        filteredProducts.length === 0 ? 
        <div className={styles.bigText}>
           <h1>
             You have no product in your cart. <Link to="/">Buy some!</Link>
           </h1> 
        </div>
        :
        <div className={styles.cartContainer}>
          <div className={styles.cartBox}>
               <div className={styles.cartHeading}>
                    <h1>MY BAG</h1>
                    <p>You have <span style={{color: 'green', fontWeight: 'bold', fontSize: '24px'}}>{totalBuy}</span> products in your cart</p>
               </div>
               <hr></hr>
               <div className={styles.container}>
                  {
                    filteredProducts.map((product, idx)=>{
                          const {thumbnail, title, price, id} = product
                        return(
                            <div key={id} className={styles.productBox}>
                                <img src={thumbnail} className={styles.img} alt={title} />
                                <div className={styles.productDetails}>
                                   <div>
                                      <h3 className={styles.price}>${price}</h3>
                                      <Link to={`/detailpage/${id}`} ><h3>{title}</h3></Link>
                                   </div>
                                   <RxCross2 className={styles.closeBtn} onClick={()=> handleDelete(id)} />
                                </div>
                            </div>
                        )
                    })
                  }
               </div>
               <hr></hr>
               <div className={styles.subTotalOne}>
                   <h3>SUB-TOTAL</h3>
                   <h3>${totalPrice}</h3>
               </div>
          </div>
          <div className={styles.cartCheckout}>
               <h1>TOTAL</h1>
               <hr></hr>
               <div className={styles.subTotalTwo}>
                   <h3>SUB-TOTAL</h3>
                   <h3 className={styles.price}>${totalPrice}</h3>
               </div>
               <div className={styles.subTotalTwo}>
                   <h3>Delivery</h3>
                   <h3 className={styles.price}>${delivery}</h3>
               </div>
               <hr></hr>
               <div className={styles.subTotalTwo}>
                   <h3>Total</h3>
                   <h3 className={styles.price}>${total}</h3>
               </div>
               <button className={styles.checkout}>CHECKOUT</button>
               <div className={styles.paymentOptions}>
                  <h3>WE ACCEPT:</h3>
                  <div className={styles.paymentCard}>
                       <FaCcVisa />
                       <FaCcMastercard />
                       <FaCcPaypal />
                       <FaCreditCard />
                  </div>
               </div>
          </div>
      </div>
      }
    </>
  )
}

export default CartPage