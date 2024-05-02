export default function getTransactions(){
    return fetch("http://localhost:4001/transactions",{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}