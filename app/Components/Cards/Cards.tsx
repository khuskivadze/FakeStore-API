'use client'
import axios from 'axios'
import styles from './Card.module.css'
import { useState } from 'react'


export default  () => {

    const [products, setProducts] = useState([])

     
    const getProducts = () => {

        axios.get('https://fakestoreapi.com/products?limit=5').then((result) => {
            setProducts(result.data)
        })
    }
    console.log(products)



    return (
        <>

        <section className= {styles.cards}>
            <button className= {styles.button} onClick={getProducts}>Get Products</button>

            <section className= {styles.containers}>
                <ul className= {styles.containerItems}>
                    {products.map( (product : any) => 
                        <li className= {styles.cardItem}>
                            <img src= {product.image}  className= {styles.images}  />
                            <p className= {styles.title}> {product.title}</p>
                            <button className= {styles.btn}>Add To Cart</button>
                        </li>)
                    }
                </ul>
            </section>


           
        </section>
        
        
        
        </>
    )
}