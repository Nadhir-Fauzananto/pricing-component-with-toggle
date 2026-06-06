import { useState } from 'react'
import Toggle from './components/Toggle.jsx'
import Card from './components/Card.jsx'
import plansData from './data/data.json'

export default function App() {
  const [isMonthly, setIsMonthly] = useState(false)

  function togglePricing() {
    setIsMonthly(!isMonthly)
  }
  return(
    <main>
      <Toggle togglePricing={togglePricing} isMonthly={isMonthly}/>
      <Card plansData={plansData.plans} isMonthly={isMonthly}/>
    </main>
  )
}