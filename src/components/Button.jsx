export default function Button({children, id}){

    //Delete a transaction from the database
    function deleteTransaction(id){
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

    return(
        <button onClick={()=> deleteTransaction(id)} className="btn btn-sm btn-danger mx-2">{children}</button>
    )
}