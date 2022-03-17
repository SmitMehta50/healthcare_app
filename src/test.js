// https://www.digitalocean.com/community/tutorials/processing-incoming-request-data-in-flask

import React from 'react'
import axios from 'axios'

function Test(props) {
    var myParams = {
        sympton1: props.sympton1,
        sympton2: props.sympton2,
        sympton3: props.sympton3,
        sympton4: props.sympton4,
        sympton5: props.sympton5
    }

    axios.post('http://localhost:5000/', myParams)
        .then(function(response){
            console.log(response);
            const res = response;
       //Perform action based on response
        })
    
    return(
        <div>
            <p>Hello</p>
        </div>
    );
        
}

export default Test