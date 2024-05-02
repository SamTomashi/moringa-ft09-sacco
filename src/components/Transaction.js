import { useParams, useNavigate } from "react-router-dom";
import {getTransactionById} from '../utilities';
import { useState, useEffect } from'react';
import { deleteTransaction } from "../utilities"
import Button from "./Button";

export default function Transaction() {
      const params = useParams();
      const [transaction, setTransaction] = useState({})
      const navigate = useNavigate();

        useEffect(()=> {
            getTransactionById(params.id)
            .then(data => {
                setTransaction({...data})
            })
            .catch(err => console.log(err))
        }, [transaction])

        function goBack(){
            navigate("/")
        }

    return(
        <>
            <div className="card w-50 mx-auto mt-4">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {transaction.id}</li>
                    <li className="list-group-item">Date: {transaction.date}</li>
                    <li className="list-group-item">Description: {transaction.description}</li>
                    <li className="list-group-item">Category: {transaction.category}</li>
                    <li className="list-group-item">Amount: {transaction.amount}</li>
                    <li className="list-group-item">
                        <button className="btn btn-primary btn-sm m-3">Enlist</button>
                        <Button handleClick={deleteTransaction} id={transaction.id}>
                            <span>delete</span>
                        </Button>
                        <button onClick={goBack} className="btn btn-warning btn-sm m-3">Go Back</button>
                    </li>
                </ul>
            </div>
        </>
    )
}