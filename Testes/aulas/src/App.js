import styled from 'styled-components';
import narutoImg from './images/naruto.png';
import Quotes from './components/quotes'
import {useState} from 'react';
import QuoteServices from './services';

function App() {
 const [quote, setQuote] = useState({quote: 'Douglas', speaker: 'Speaker'});

 const update = async ()=>{
   const quote = await QuoteServices();
   setQuote(quote);
 }

  return (
    <Content className="App">
      <Quotes {...quote} onUpdate={update} />
      <Narutoimg src={narutoImg} alt='Naruto segurando uma kunai'></Narutoimg>
    </Content>
  );
}

export default App;

const  Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center/
  align-items: center`;

const Narutoimg = styled.img`
  max-width: 50vw;
  align-self: flex-end;`;