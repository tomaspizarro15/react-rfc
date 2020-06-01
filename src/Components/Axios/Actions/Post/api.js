import axios from '../../Instances/ProductInstance';
import { Component } from 'react';

export class api {

    post = ( url  , data) => {
        axios.post( `/${url}.json` , data)
        .then(data => console.log(data))
        .then( data => {
            return { data }
        }) 
    }

}

export const apiInstance = new api(); 
