import Layout from "../../../components/Layout"
import {useRouter} from 'next/router'

export default function ClienteProCodigo(){
    const router = useRouter()
    return(
        <Layout titulo={'Navegação dinamica'}>
            <div>Código = {router.query.codigo} </div>
            <div>Filial = {router.query.filia}</div>
        </Layout>

    )
}