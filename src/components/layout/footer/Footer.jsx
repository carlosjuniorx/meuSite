import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer(){
    return( 
        <footer className={`container-fluid ${styles.footer}`}>

            <div>
                <h2 className="col text-uppercase">Contato</h2>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-between fs-3">
                    <div className="d-flex flex-column">
                        <div className="d-flex mb-2">
                            <Image width={50} height={50} src="/images/whatsIcon.png" alt=" " />
                            <p>48 991854910</p>
                        </div>
                        <div className="d-flex mb-2">
                            <Image width={50} height={50} src="/images/ifoodIcon.jpg" alt=" " /><a className="ms-2" target="_blank" rel="noopener noreferrer" href="https://www.ifood.com.br/delivery/florianopolis-sc/la-fugazza-sao-joao-do-rio-vermelho/60d2a35d-4416-472b-977d-94c2aa229465">LA FUGAZZA</a>
                        </div>
                        <div className="d-flex mb-2">
                            <Image width={50} height={50} src="/images/instagram.png" alt=" "/><a href="https://www.instagram.com/fugazalla/" rel="noopener noreferrer" target="_blank">LA FUGAZZA</a>
                        </div>
                    </div>

                    <div className="col d-flex flex-column justify-content-center align-items-end ">
                        <div className="d-flex flex-column">
                            <h2>Horarios</h2>
                            <p>quarta a segunda</p>
                            <p>18:00 as 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className="text-center" >
                    © 2021 Copyright: Carlos R. R. M. Junior
                </div>
        </footer>
    )
}