import { useState } from "react"
import Row from "./Row"
export default function Table({transactions, setTransactions}){


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
                <Row  transactions={transactions} setTransactions={setTransactions}/>
            </tbody>
        </table>
        </>
    )
}