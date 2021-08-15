import styles from './Layout.module.css'
import Header from '../header/Header.jsx'
import Footer from '../Footer.jsx'


export default function Layout({children, ...props}){
    return(
        <div className= {styles.layout}>
            <Header></Header>
            <h1>{props.title}</h1>
            <main>{children}</main>
            <Footer className={styles.layout}></Footer>
        </div>
    )
}