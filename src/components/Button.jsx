export default function Button({children, setTransactions, transactions, index}){

    function handleClick(){
        const filter = transactions.filter((transaction, i)=> {
            return i !== index
        })
        setTransactions([...filter])
    }

    

    return(
        <button onClick={()=> handleClick()} className="btn btn-sm btn-danger">{children}</button>
    )
}