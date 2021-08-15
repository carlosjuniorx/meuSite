import Slider from "../components/slider/Slider"
import Layout from "../components/layout/Layout.jsx"
import ImageS from "../components/slider/ImageS.jsx"
import Script from 'next/script'
export default function Sabores(){
    return(
        <Layout title="Sabores">   
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"/>
            <div className="container-fluid">
                <Slider>
                    <ImageS active="active" img="/images/gorgonzola.jpg">
                       <h2>Gorgonzola</h2>
                       <p>blablablablabla</p>
                    </ImageS>
                    <ImageS img="/images/pepperoni.png">
                       <h2>Pepperoni</h2>
                       <p>pepperoni é bom</p>
                    </ImageS>
                    <ImageS img="/images/4queijos.jpg">
                       <h2>Quatro Queijos</h2>
                       <p>4 blablabla</p>
                    </ImageS>
                </Slider>
            </div>        
        </Layout>
        
    )
}