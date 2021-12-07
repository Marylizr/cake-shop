import React, { useState } from "react";
import Cart from "../../components/cart/cart";
import Header from "../../components/header/header";
import Landing from "../../components/landing/landing";
import ProductList from "../../components/productList/productList";
import styles from './home.module.css'
import {useLanding} from '../../hooks/useLanding';


const Home = () => {
     const [searchValue, setSearchValue] = useState('');
     const [cartProducts, setCartProducts]  = useState([]);
     const [isOpenLanding, openLanding, closeLanding] = useLanding(true);

     const addToCart = (product) => {       
          setCartProducts([...cartProducts, product]);
     }


     return(
          <div className={styles.home}>

               <div className={styles.header}>
                    <Header onSearch={setSearchValue} onChange={closeLanding}/>
               </div>
               <div className={styles.bodyApp}>
                    <Landing isOpenLanding={isOpenLanding} displayLanding={openLanding}/>
                    <ProductList searchValue={searchValue} addToCart={addToCart}/>
                    <Cart cartProducts={cartProducts}/>
               </div>   
          </div>
     )
};

export default Home;