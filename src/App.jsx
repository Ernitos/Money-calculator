import { useState } from 'react'
import './assets/style.css'
export default function Convert() {
  const [quantity, setQuantity] = useState('')
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('USD')

  const [result, setResult] = useState(0)

  const rates = {
    EUR: 1,
    USD: 1.08,
    RUB: 94.22,
  }

  const convert = () => {
    if (!quantity) return
    const value = (quantity / rates[fromCurrency]) * rates[toCurrency]
    setResult(value)
  }
  return (
    <div className="converter">
      <h1>Convert Calculator</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Enter quantity"
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {' '}
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {' '}
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
      </select>
      <button onClick={convert}>Convert</button>

      <h3>
        {quantity} {fromCurrency} = {result.toFixed(2)}
        {toCurrency}
      </h3>
    </div>
  )
}
