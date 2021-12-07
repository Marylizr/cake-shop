import styles from './landin.module.css'


const Landing = (isOpenLanding, closeLanding) =>{
     return(
          <div className={`wrapper ${isOpenLanding && "onCLose"}`} onChange={closeLanding}>
               <div>
                    <div className={styles.logo2}>
                         <img src="http://marylizr.com/doceefit/imagenes/logo-01.png" alt="logo"/>
                    </div>
    
                    <div className={styles.muneca}>
                         <img src="http://marylizr.com/doceefit/imagenes/MUNECA-01.png" alt="muneca"/>
                    </div>
    	          </div>
          </div>
     )
}

export default Landing;