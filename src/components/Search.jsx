export default function Search({transactions, setTransactions, arr}){

    function handleChange(event){
        const hint = event.target.value
        if(hint.length > 0){
            const filter = transactions.filter((transaction)=> {
                return transaction.description.toLowerCase().includes(hint.toLowerCase())
            })
            // if(filter.length > 0){
                setTransactions([...filter])
            // }
        }else{
            setTransactions([...arr])
        }
    }

    return (
         <div className="m-4 p-4 border">
            <input onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Type transaction" />
        </div>
    )
}