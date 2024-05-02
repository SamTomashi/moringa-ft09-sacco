import { useState, useEffect } from 'react';
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";
import {getTransactions} from '../utilities';

export default function Home(){

    const [transactions, setTransactions] = useState([])

    useEffect( ()=> {
        getTransactions().then(data => {
        setTransactions([...data])
        })
    }, [transactions])

    return(
        <>
            <Search transactions={transactions} setTransactions = {setTransactions} />
            <Form/>
            <Table transactions={transactions}/>
        </>
    )
}