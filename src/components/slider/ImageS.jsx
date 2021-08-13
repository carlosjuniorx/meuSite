
import styles from './ImageS.module.css'
export default function ImageS({children, ...pageProps}){
    return(

        <div data-bs-interval="3000" className={`carousel-item ${pageProps.active} d-flex ${styles.imageS}`}>
            <div>
            <img className="img-fluid" src={pageProps.img} alt="" />
            </div>
            <div>
                {children}
            </div>
        </div>
 
    )
}