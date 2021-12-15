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
            <div 
                className="card-body" 
                class="container-lg"
            >
                <h5 
                    className="card-title"
                >
                    Dias Sem acidentes
                </h5>

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