import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox/InputBox'
import OutputBox from  './components/InputBox/InputBox';
import useCurrencyData from './hooks/useCurrencyData';


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom ] = useState('usd');
  const [to, setTo] = useState('ars');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  //currency options
  const currencyData = useCurrencyData(from);
  console.log(currencyData);
  const currencies = Object.keys(currencyData);
  console.log(currencies)

  //convertion
  function convert(){
    setConvertedAmount(amount * currencyData[to])
  }

  //swap
  const swap = ()=> {
    setFrom(to);
    setTo(from);
    // here we can also swap the amounts that are already showing on screen or reset them, lets swap them too >
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }


  return (
    <>
      <div className='flex justify-center gap-4 m-4'>
        <InputBox
          label='From'
          amount={amount}
          selectedCurrency={from}
          currencyOptions={currencies}
          onAmountChange={(amount)=> setAmount(amount)}
          onCurrencyChange={(currency)=> setFrom(currency)}
          amountDisabled = {false}
          currencyDisabled = {false}
        />
        <OutputBox
          label='To'
          amount={convertedAmount}
          selectedCurrency={to}
          currencyOptions={currencies}
          onAmountChange={(amount)=> setConvertedAmount(amount)}
          onCurrencyChange={(currency)=> setTo(currency)}
          amountDisabled = {true}
          currencyDisabled = {false}
        />
      </div>

      <div className='flex flex-col items-center gap-4 m-4'>
        <button
          className='bg-blue-600 p-2 rounded-md text-white w-fit'
          onClick={convert}
        >convert</button>
        <button
          className='bg-yellow-600 p-2 rounded-md text-black w-fit'
          onClick={swap}
        >Swap</button>
      </div>
    </>
  )
}

export default App
