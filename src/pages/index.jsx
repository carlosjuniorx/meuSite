import ConteudoPrincipal from '../components/conteudo/conteudoPrincipal/ConteudoPrincipal.jsx'
import Layout from '../components/layout/Layout.jsx'

export default function Index(){

        return (
            <Layout title="Inicio">
                <div className='container-fluid'>
                    <ConteudoPrincipal></ConteudoPrincipal>
                </div>
            </Layout>

        )

}


