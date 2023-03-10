const Get = (id) => {return document.getElementById(id)}; //shorthand for fetching from DOM

const data = {"number" : 50};

async function getMessage(){
    console.log("sending request");

    fetch("https://hackathonbackend-bnldi3x7oq-uw.a.run.app/api/testServer", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(response => Get("post-content").append(response));
}

/* fetch("https://hackathonbackend-bnldi3x7oq-uw.a.run.app", {
    method: "GET"
})
.then(response => response.text())
.then(data => Log(data)); */

Get("post-button").addEventListener("click", getMessage);