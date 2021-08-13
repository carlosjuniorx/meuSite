import styles from './Header.module.css'
import Logo from "./Logo"
import NavBar from "./NavBar"
export default function Header(){
    return(
        <div className={styles.header}>
            <div className="col d-flex justify-content-center">
                <Logo></Logo>
            </div>
            <div className="col">
                <NavBar></NavBar>
            </div>
        </div>
    )
}