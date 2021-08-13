
import styles from './NavBar.module.css'
import Nav from './nav/Nav'


export default function NavBar(){
    return(
      <div className={"container-fluid "+styles.navbar}>
        <div className="row">
          <div className="col-md fs-2 " >
            <Nav color="#522828" url={"/"} text="LA FUGAZZA"></Nav>
          </div>
          <div  className="col-md fs-3">
            <Nav url={"/sabores"} text="Sabores"></Nav>
          </div>
          <div  className="col-md fs-3">
            <Nav url={"/"} text="História"></Nav>
          </div>
        </div>
      </div>
  )
}