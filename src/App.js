import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Form from './components/Form';
function App() {

  const arr = [
    
  ]

    const [transactions, setTransactions] = useState(arr)

    


    useEffect(()=> {
      fetch("http://localhost:4001/transactions",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
      }).then(response => response.json())
      .then(data => {
        setTransactions([...data])
      })
    }, [])

    
  return (
    <div className='container'>
      <Search transactions={transactions} setTransactions = {setTransactions} arr={arr} />
      <Form transactions={transactions} setTransactions={setTransactions}/>
      <Table transactions={transactions} setTransactions = {setTransactions} />
    </div>
  );
}

export default App;
