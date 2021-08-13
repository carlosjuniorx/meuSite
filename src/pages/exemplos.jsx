
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
export default function Exemplo(){
    return(
        <Layout titulo={'Exemplo'}>       
                <Cabecalho texto={"Componente cabecalho"}></Cabecalho>
                <Cabecalho texto={"Componente cabecalho 2"}></Cabecalho>
                <h1>Estamos no componente 'exemplo'</h1>
        </Layout>
    )
}