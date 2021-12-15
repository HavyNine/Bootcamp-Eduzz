import Item from './components/Item';
import Card from './components/Card';
const App = () =>{
  return(
    <>
      <h1>Controle Geral</h1>
      <ul>
       <Item>
         Caldeira I
       </Item>
       <Item>
         Caldeira II
       </Item>
       <Item>
         Caldeira III
       </Item>
       <Card/>
      </ul>
    </>
    
  )
}

export default App;
