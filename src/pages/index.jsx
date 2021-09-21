import Slider from "../components/slider/Slider"
import Layout from "../components/layout/Layout.jsx"
import ImageS from "../components/slider/ImageS.jsx"
import Script from 'next/script'

export default function Index(){
    return(
        <Layout>   
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"/>
            <div className="container-fluid">
                <Slider>
                    <ImageS active="" img="/images/1.png"/>
                    <ImageS active="active" img="/images/2.png"/>
                </Slider>
            </div>        
        </Layout>
        
    )
}

