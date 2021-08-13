import Link from "next/link";
import styles from "../styles/Navegador.module.css"


export default function Navegador(props){
    return(
        <>
            <div className={styles.navegador} style={{backgroundColor:props.color?? 'blue'}}>
                <Link href={props.page}><a>{props.nameUrl}</a></Link>          
            </div>

        </>
    )
}