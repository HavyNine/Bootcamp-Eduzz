import { useState } from "react";
import Button from "../Button";

const Card = () =>{
    const [valor,setValor] = useState(0);

    function Adiciona(){
        setValor(valor +1);
    }

    function Remove() {
        setValor(valor -1)
    }
    return(
        <>
            <div className="card text-white bg-secondary mb-3" >
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Secondary card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title
                         and make up the bulk of the card's content.
                    </p>
            </div>

                <Button 
                    className="btn btn-success"
                    onClick={Adiciona}
                >
                    Adiciona
                </Button>

                <Button
                    className="btn btn-danger"
                    onClick={Remove}
                >                
                    Remove
                </Button>

                <p className="card-text">{valor}</p>
                
            </div>
        </>


    );
}
export default Card;