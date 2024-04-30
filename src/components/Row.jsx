import Button from "./Button"
export default function Row({transactions, setTransactions}){

    const rows = transactions.map((transaction, index) => {
        return(
             <tr key={index+1}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
                    <Button index={index} setTransactions={setTransactions} transactions={transactions}>
                        <span>delete</span>
                    </Button>
                </td>
            </tr>
        )
    })

    return (
        <>
           {rows}
        </>
    )
}