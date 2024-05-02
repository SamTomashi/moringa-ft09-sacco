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
      <Form transactions={transactions} setTransactions={setTransactions}/>
      <Table transactions={transactions} setTransactions = {setTransactions} />
    </div>
  );
}

export default App;


/**

  1. Client-side rounting
  2. SPA: Single Page Application
  3. Webpack
 */
