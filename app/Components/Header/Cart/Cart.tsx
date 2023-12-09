import { useRecoilState } from 'recoil';
import styles from './Cart.module.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import {  cartOpenState } from '../../../States/States';

export default () => {
    const [cart, setCart] = useRecoilState (cartOpenState)
 

    const closeCartBtn = () => {
        setCart(!cart)
    }
     



    return (
       
      <> 
      {cart &&
        <section className= {styles.cart}>
            <button className= {styles.close} onClick={closeCartBtn}>
              <IoMdCloseCircleOutline />
            </button>
             
        </section>
      }
     </>
    )
}