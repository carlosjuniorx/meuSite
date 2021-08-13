import Image from 'next/image'
import Open from '../../open'
import styles from './CntPrincipal.module.css'
export default function Conteudo(){
    return(
        <div className={"container-fluid "+ styles.conteudoP}>
            <div className={"row "+ styles.open}>
                <Open></Open>
            </div>
            <div className="row">
                <h1 className="col">Quero pizza</h1>
                <Image src="" alt="" />
            </div>

        </div>
    )
}