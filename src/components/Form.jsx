import { useState } from "react"
export default function Form({transactions, setTransactions}){

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        // setTransactions([...transactions, formData])// listing transactions to the frontend
        addTransaction(formData) // add a new transaction in DB
    }     

 function addTransaction(transaction){

    fetch("http://localhost:4001/transactions",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transaction)
    })


 }

    function handleChange(event) {
        setFormData(
            {
                ...formData,
                [event.target.name] : event.target.value
            }
        )
    } 

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="row border p-4 m-4">
                    <div className="col-3 mx-auto">
                        <input className="form-control " onChange={handleChange} name="date" value={formData.date} type="date" placeholder="date" />
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control form-control-sm col-3" onChange={handleChange} name="description" value={formData.description} placeholder="Enter description" type="text" />
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control form-control-sm col-3" onChange={handleChange} name="category" value={formData.category} placeholder="Enter category" type="tetst" />
                    </div>
                    <div className="col-3 mx-auto">
                        <input className="form-control form-control-sm col-3" onChange={handleChange} name="amount" value={formData.amount} placeholder="Enter amount" type="number" />
                    </div>
                    <div className="col-4 mx-auto">
                        <button type="submit" className="mx-auto btn btn-primary">Add Transaction</button>
                    </div>
                </div>
            </form>
        </>
    )
}