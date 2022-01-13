import styled from "styled-components";
import {string} from 'prop-types';
import Button from "../button";

const Quotes = ({ quote, speaker, onUpdate = () => {} }) =>{
    return(
        <Wrapper>
            <Quote>{quote}</Quote>
            <Autor>{speaker}</Autor>
            <Button/>
        </Wrapper>
    )
}
export default Quotes;
Quotes.propTypes = {
    quote: string,
    speaker: string
}

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Autor = styled.p`
    text-align: right;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
