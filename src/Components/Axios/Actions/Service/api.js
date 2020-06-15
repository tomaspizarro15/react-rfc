import axios from '../../Instances/ProductInstance';
import { Component } from 'react';

export class api {

    post = (url, args) => {

        axios.post(`/${url}.json`, args)
            .then(r => console.log(r.config.data))
            .catch(e => console.log(e))

    }

    get = (url) => {
        return (
            axios.get(`/${url}.json`)
                .then(r => r.data)
                .then(data => {
                    return (data)

                })
                .catch(error => console.log(error))
        )
    }



}

export const apiInstance = new api(); 
