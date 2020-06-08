import * as validation from './../Validation/ValidationActions'; 

const inicialState = {

    counter: 0,
    results: [],
    validation : true,  

}
const reducer = (state = inicialState, action) => {

    switch (action.type) {
        case validation.VALIDATE_USER : 
       
        return { validation : true};
        
        case validation.INVALIDATE_USER : 
      
        return {validation : false} 
        
        
    }
      
    return (state);
}


export default reducer; 