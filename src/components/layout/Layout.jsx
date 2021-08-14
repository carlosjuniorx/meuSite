import styles from './Layout.module.css'
import Header from '../header/Header'
import Footer from '../Footer'


export default function Layout({children, ...pageProps}){
    return(
        <div className= {styles.layout}>
            <Header></Header>
            <h1>{pageProps.title}</h1>
            <main>{children}</main>
            <Footer className={styles.layout}></Footer>
        </div>
    )
}