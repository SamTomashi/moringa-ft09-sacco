export default function Button({children, setTransactions, transactions, id}){

    //Delete a transaction from the database
    function deleteTransaction(id){
        fetch(`http://localhost:4001/transactions/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=> response.json())
        .then((data)=> console.log("transactions deleted"))
    }

    return(
        <button onClick={()=> deleteTransaction(id)} className="btn btn-sm btn-danger mx-2">{children}</button>
    )
}