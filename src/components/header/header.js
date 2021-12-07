import styles from './header.module.css'



const Header = ({onSearch, closeLanding}) => {

     return(
          <div>
				<div className={styles.header_bg}>
							
						<header id={styles.topnav}>
								<div className={styles.logo}><img src="http://marylizr.com/doceefit/imagenes/logo2-01.png" alt="doce e fit"/></div>
									<nav>	
										<ul>
										<img className={styles.cart} src="https://marylizr.com/assets/cart-2.png" alt="carrito"/>
											<li className={styles.active}>|Home|</li>
											<li>|Sobre n&oacute;s|</li>
											<li>|Doces|</li>
											<li>|Contactos|</li>
											<li>|login|</li>
										</ul>
									</nav>
						</header>
						
						<div className={styles.seach}> <input onChange={event => 
								{const value = event.target.value;
								onSearch(value) 
								closeLanding()
								}} type="text" placeholder="pesquiçar" />
						</div>    
				</div>
          </div>
     )
};

<input  placeholder="Search" />

export default Header;