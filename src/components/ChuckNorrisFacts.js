import React, { useEffect, useState } from 'react';

function CNorris() {

    const [joke, setJoke] = useState(["You ready for some Jokes?"])
    
    useEffect(() => {
        fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": 
            }
        })
            .then(response => {
                console.log(response);
                const data = response.json();
                console.log(data);
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
        
    })
    
        return (
            <div class="container p-3 mb-2 bg-dark text-light" >
            <header class='display 1'>Random Chuck Norris Quotes: {joke}</header>
            <button type="button" class="btn btn-primary" onClick>New Chuck Norris Facts</button>
        </div>
    )
}

export default CNorris;