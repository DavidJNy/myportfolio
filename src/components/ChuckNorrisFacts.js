import React, { useState } from "react";

function CNorris() {

    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const fetchFacts = () => {
        fetch("https://api.chucknorris.io/jokes/random").then(response => {
        return response.json();
    })
    .then(actualData => {
        // console.log(actualData.value);
        setData(actualData.value);
    })
    .catch(err => {
        console.error(err);
    });
    }

        return (
            <div class="container p-3 mb-2 bg-dark text-light" >
                <div class='row p-3' >
                    <h4 class='col-sm pt-2 p'>Random Chuck Norris Quotes: </h4>
                    <button class="btn btn-primary col-sm py2" type="button" onClick={fetchFacts}>Click here for funny Chuck Norris facts</button>
                </div>
            <span>{data}</span>
        </div>
    )
}

export default CNorris;