import styles from "./Card.module.css"
export default function Card(){
    return(
        <div className={"card " + styles.card}>
            <img src="images/profile.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Confira
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci perferendis vel minima libero amet esse quo voluptates qui praesentium eius, facere fuga fugit odio exercitationem nesciunt fugiat nemo accusamus.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}