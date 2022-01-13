const QuoteServices = () =>{
    fetch('www.narutoql.up.railway.app/graphql').then(response => response.json());
};

export default QuoteServices;