import { useState } from 'react'
import Layout from '../components/Layout'
export default function Integracao(){
    const [cliente, setCliente]=useState({})

    const [codigo,setCodigo]=useState()

    const getClient=()=>{
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp=>resp.json())
            .then(dados=>setCliente(dados))
    }


    return(
        <Layout titulo={'Integração com API'}>
            <div>
                <input onChange={(e)=>setCodigo(e.target.value)} type="number" />
                <button onClick={getClient}>Código Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.name}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}