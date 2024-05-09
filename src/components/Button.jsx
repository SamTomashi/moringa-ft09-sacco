export default function Button({children, handleClick, id}){

    //Delete a transaction from the database
 
 

    return(
        <button onClick={()=> handleClick(id)} className="btn btn-sm btn-danger m-3">{children}</button>
    )
}