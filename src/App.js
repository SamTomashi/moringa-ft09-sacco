import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Form from './components/Form';
import getTransactions from './utilities';
function App() {

  const [transactions, setTransactions] = useState([])

  useEffect( ()=> {
    getTransactions().then(data => {
      setTransactions([...data])
    })
  }, [transactions])


  return (
    <div className='container'>
      <Search transactions={transactions} setTransactions = {setTransactions} />
      <Form/>
      <Table transactions={transactions}/>
    </div>
  );
}

export default App;


