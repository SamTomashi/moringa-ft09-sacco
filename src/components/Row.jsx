import Button from "./Button"
import { Link, NavLink } from "react-router-dom"
export default function Row({transactions}){

    const rows = transactions.map((transaction, index) => {
        return(
             <tr key={index+1}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
                    <Button id={transaction.id}>
                        <span>delete</span>
                    </Button>
                    <NavLink className="btn btn-success btn-sm mx-2" to={`/transactions/${transaction.id}`}>
                        View
                    </NavLink>
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