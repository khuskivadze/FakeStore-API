'use client'
import axios from 'axios'
import styles from './Card.module.css'
import { useState } from 'react'


export default  () => {

    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('asc')

     
    const getProducts = () => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}`).then((result) => {
            setProducts(result.data)
        })
    }

    const onChange = (e:any) => {
       setSort(e.target.value)
    }
    console.log(sort)
  
    return (
        <>
        <section className= {styles.cards}>
            <button className= {styles.button} onClick={getProducts}>Get Products</button>

            <select onChange={onChange}>
                <option>asc</option>
                <option>desc</option>

            </select>

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