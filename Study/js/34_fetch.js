//https://jsonplaceholder.typicode.com/posts/1
const urlGet = "https://jsonplaceholder.typicode.com/posts/1";

const urlPOST = "https://jsonplaceholder.typicode.com/posts";

const getBody = () => {
    let jsonData = {
        userId : "2",
        title : "Hero",
        body : " me hu hero tera "
    }
    return JSON.stringify(jsonData);
};

const requestObjGET = {
method : 'GET',
headers : {
    'Content-Type' : 'application/json'
}
};

const requestObjPOST = {
    method : 'POST',
    body : getBody(),
    headers : {
        'Content-Type' : 'application/json'
    }
    };

let sendReuest = fetch(urlPOST,requestObjPOST);

sendReuest.then(response => response.json())
        .then(data => console.log(data));