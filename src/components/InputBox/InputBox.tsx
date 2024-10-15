import styles from './InputBox.module.css';

//* interfaces

export interface InputBoxProps {
    label: string,
    amount: number,
    currencyOptions:string[],
    selectedCurrency: string,
    amountDisabled:boolean,
    currencyDisabled: boolean,
    onAmountChange(amount:number): void,
    onCurrencyChange(currency:string): void
}


function InputBox( 
    {label = 'Amount',
    amount,
    currencyOptions = ['usd', 'ars'],
    selectedCurrency,
    amountDisabled,
    currencyDisabled,
    onAmountChange,
    onCurrencyChange}: InputBoxProps) {
  return (
    <div className={`${styles.input_container}`}>
        <div className='w-1-2'>
            <label htmlFor="">{label}
                <input
                className={`${styles.input_box}`}
                placeholder='amount'
                disabled={amountDisabled} 
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                type="text" 
                />
            </label>
        </div>

        <div className={`${styles.select_container}`}>
            <p className='text-black/60 mb-2 w-full'>Currency Type</p>
            <select
             className={`${styles.select_dropdown}`}
             disabled={currencyDisabled}
             value={selectedCurrency}
             onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}

            >
                {
                    currencyOptions?.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}
export default InputBox