import Image from 'next/image'
import styles from './ImageS.module.css'
export default function ImageS({children, ...pageProps}){
    return(

        <div data-bs-interval="3000" className={`carousel-item ${pageProps.active} d-flex ${styles.imageS}`}>
            <div>
            <Image width={1000} height={1500} className="img-fluid" src={pageProps.img} alt="" />
            </div>
        </div>
 
    )
}