let base_url = "https://restcountries.eu/rest/v2/all";

async function showList(url)
{
    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    json.map(country => console.log(country.name));
    } else {
    alert("HTTP-Error: " + response.status);
    }
}


function showCode(url)
{
    let countryCall = fetch(url);

    countryCall.then(data => data.json())
                .then(country => 
                    country.map(val => console.log(val.capital + "," + val.name))
                    )
}

//showList(base_url);

showCode(base_url);