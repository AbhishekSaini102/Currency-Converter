import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState("inr");

  const [ConvertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(ConvertedAmount)
  }
 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2024/01/05/14/00/ship-8489583_1280.jpg")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                // onAmountChange={setAmount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyoptions={option}
                selectedCurrency={from}
                onCurrencyChange={(currency) => setAmount(amount)}
                // onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ConvertedAmount}
                // onAmountChange={(amount) => setConvertedAmount(amount)}
                currencyoptions={option}
                selectedCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App


