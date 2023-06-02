import React, {useState} from "react"
import './App.css';

import { ThemeContext } from './context/ThemeContext'

import Home from './components/Home'

function App() {
  const [theme, setTheme] = useState('dark')
  
  const changeTheme =()=>{
    theme ==="light"?setTheme("dark"):setTheme("light")
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme,setTheme, changeTheme}}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
