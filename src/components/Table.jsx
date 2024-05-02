import Row from "./Row"
export default function Table({transactions}){


    return (
        <>
        <table className="table table-light">
            <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>           
                <Row  transactions={transactions}/>
            </tbody>
        </table>
        </>
    )
}