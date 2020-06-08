import React from 'react'; 
import './BurgerButton.css'; 



const burguerButton = () => {


    return(
        <div className ="burger_button">
            <ul>
                <li key = "top"></li>
                <li key = "mid"></li>
                <li key = "bottom"></li>
            </ul>

        </div>
    );  


}
export default burguerButton; 