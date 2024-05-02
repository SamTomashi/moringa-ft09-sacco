export function getTransactions(){
    return fetch("http://localhost:4001/transactions",{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

export function addTransaction(transaction){
    fetch("http://localhost:4001/transactions",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transaction)
    }).then((response)=>  response.json())
    .then((data)=> {
        alert(`transaction with id: ${data.id} added successfully!`)
    })
}