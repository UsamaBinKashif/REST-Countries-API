import React, {useState} from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false)
  const changeTheme =()=>{
    document.body.classList.toggle("dark")
    setDarkMode(!darkMode)
  }
  return (
    <>
    <button onClick={changeTheme}>{darkMode ? <FaMoon /> : <FaSun /> }</button>
    </>
  )
}
