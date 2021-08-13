import Image from 'next/image'

export default function Footer(){
    return( 
        <footer className=" text-center text-lg-start" style={{ backgroundColor: 'grey',color:'black' }}>
            <div className="container p-4" >
                <div className="row">
                    <div className=" mb-4 mb-md-0">
                        <h2 className="text-uppercase">Contato</h2>
                        <p  className="fs-3">Whats: 48 991854910</p>
                 
                        <div className=" fs-3"><Image src="images/ifoodIcon.jpg" alt="" /><a className="ms-2" target="_blank" href="https://www.ifood.com.br/delivery/florianopolis-sc/la-fugazza-sao-joao-do-rio-vermelho/60d2a35d-4416-472b-977d-94c2aa229465" rel="noopener noreferrer" text="LA FUGAZZA">LA FUGAZZA</a>
                        
                        </div>

                        <div className="text-center p-3" >
                            © 2021 Copyright: La Fugazza
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}