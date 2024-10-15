import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox/InputBox'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom ] = useState('usd');
  const [to, setTo] = useState('ars');
  const [convertedAmount, setConvertedAmount] = useState(0);

  return (
    <>
    </>
  )
}

export default App
