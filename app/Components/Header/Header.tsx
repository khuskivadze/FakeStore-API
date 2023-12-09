'use client'
import { useRecoilState } from 'recoil';
import Cart from './Cart/Cart'
import styles from './Header.module.css'
import { HiMiniShoppingCart } from "react-icons/hi2";
import { cartOpenState } from '../../States/States';

export default () => {

    const [cart, setCart] = useRecoilState (cartOpenState)

    const clickCart = () => {
        setCart(!cart)
    }



    return (
        <>
         <header className= {styles.header}>
            
            <nav className= {styles.navigation}>
                <ul className= {styles.nav}> 
                    <li className= {styles.liItem}>
                        <a href="#">home</a>
                    </li>
                    <li className= {styles.liItem}>
                        <a href="#">about</a>
                    </li>
                    <li className= {styles.liItem}>
                        <a href="#">contact</a>
                    </li>
                    <li onClick={clickCart}><HiMiniShoppingCart/></li>
                </ul>
            </nav>


         </header>
         <Cart/>
          


          
        
        
        
        
        
        </>
    )
}