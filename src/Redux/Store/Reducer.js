import * as validation from './../Validation/ValidationActions'; 

const inicialState = {

    counter: 0,
    results: [],
    validation : false,  

}
const reducer = (state = inicialState, action) => {

    switch (action.type) {
        case validation.VALIDATE_USER : 
       
        return { validation : true};
        console.log(validation)
        case validation.INVALIDATE_USER : 
      
        return {validation : false} 
        console.log(validation)
        
    }
      
    return (state);
}


export default reducer; 