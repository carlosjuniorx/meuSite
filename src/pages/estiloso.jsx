
import style from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'



export default function Estiloso(){
    return(
        <Layout titulo={"Estiloso"}>
            <div className={style.roxo}>
                <h1>Estiloso está aqui</h1>
            </div>
        </Layout>

    )
} 