import './App.css';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import Login from './components/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';


function App() {

  const [data, setData] = useState([])

  const getData = async () => {

    try {

      const response = await axios.get('https://dev.codeleap.co.uk/careers/')
      console.log(response.data)
      setData(response.data)

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>       
          <Route path="/" element={<Post></Post>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
