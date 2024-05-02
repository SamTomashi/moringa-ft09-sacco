export function getTransactions(){
    return fetch("http://localhost:4001/transactions",{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

export function getTransactionById(id){
    return fetch(`http://localhost:4001/transactions/${id}`,{
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

   export function deleteTransaction(id){
        fetch(`http://localhost:4001/transactions/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=> response.json())
        .then((data)=> {
            alert(`Transaction with id: ${data.id} deleted successfully!`)
        })
    }