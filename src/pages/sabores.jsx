import Slider from "../components/slider/Slider"
import Layout from "../components/layout/Layout"
import ImageS from "../components/slider/ImageS"
/*  <ImageSlid image={"images/logoHeader.png"} active="active"/>
                <ImageSlid image={"images/pepperoni.png"}/> 
                <ImageSlid image={"images/gorgonzola.jpg"}/> */
export default function Sabores(){
    return(
        <Layout title="Sabores">   
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