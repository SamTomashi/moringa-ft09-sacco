import { deleteTransaction } from "../utilities"
export default function Button({children, id}){

    //Delete a transaction from the database
 

    return(
        <button onClick={()=> deleteTransaction(id)} className="btn btn-sm btn-danger mx-2">{children}</button>
    )
}