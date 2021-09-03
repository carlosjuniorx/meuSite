import Link from 'next/link'

import styles from './Nav.module.css'
export default function Nav(props){
    return(
        <div className={styles.nav}>
            <Link href={props.url}><a>{props.text}</a></Link>
        </div>
    )
}