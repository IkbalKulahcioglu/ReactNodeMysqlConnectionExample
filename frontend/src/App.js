import React, { useEffect , useState} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
      fetch('http://localhost:8081/users')
      .then(res=> res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (  
    <div className="App" style={{padding: "50px"}}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.mail}</td>
            </tr>            
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
