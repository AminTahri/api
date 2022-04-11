
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './components/Details';


function App() {
  const [data, setData] = useState("")
  // console.log(data)
  useEffect(() => {
    const getUseres=()=>{
      fetch('https://www.breakingbadapi.com/api/characters')
  .then(response => response.json())
  .then(res => setData(res)).catch(error=>console.log(error))
    }
    getUseres()
  }, [])
  
  return (
    <div className="App">
      <Router>
        <h1 className='titre'>Breaking Bad</h1>
        <Routes>
          <Route path="/" element={<UserList list={data}/>}/>
          <Route path='/info/:char_id' element = { <Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
