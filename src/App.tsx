import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import{Button} from 'antd';
//import 'antd/dist/reset.css';
import { useRoutes,Link} from 'react-router-dom';
import Router from "./Router"



function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(Router)
  return (
    <div className="App">
  
      <Link to="/home"></Link> {' '}
      <Link to ="/about"></Link>  {' '}
      <Link to ="/user"></Link>
      {outlet}
   
      </div>
  
  )
}

export default App
