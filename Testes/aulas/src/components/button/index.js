import styled from "styled-components";
import QuoteServices from "../../services";

const Button = () =>{
    return(
        <Buttons href= "#" onClick={QuoteServices}>
            Gerar nova frase
        </Buttons>
    )
}

export default Button;

const Buttons = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;
    shadow: #333 3px 3px;
`;