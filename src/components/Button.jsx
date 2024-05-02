export default function Button({children, handleClick, id}){

    //Delete a transaction from the database
 
 

    return(
        <button onClick={()=> handleClick(id)} className="btn btn-sm btn-danger mx-2">{children}</button>
    )
}