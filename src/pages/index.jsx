import ConteudoPrincipal from '../components/Conteudo/conteudoPrincipal/ConteudoPrincipal'
import Layout from '../components/layout/Layout'

export default function Inicio(){

        return (
            <Layout title="Inicio">
                <div className='container-fluid'>
                    <ConteudoPrincipal></ConteudoPrincipal>
                </div>
            </Layout>
        )

}


