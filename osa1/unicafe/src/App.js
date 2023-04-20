import { useState } from 'react'

const Statistic = (props) => {

  if (props.all === 0) {
    return <p>No feedback given</p>
  }
    return(
      <table>
      <tbody>
      
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.all} />
      <StatisticLine text='average' value={props.average} />
      <StatisticLine text='positive' value={props.positive + " %"} />
      </tbody>
      </table>
      
    )
  }
    

    

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )

  }

  


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)







const App = () => {
  // tallenna napit omaan tilaansa
  const Heading = 'give feedback'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all =  (good + neutral + bad)
  const average = ((good - bad) / all).toFixed(2)
  const positive = ((good / all) * 100).toFixed(2)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  
  
  return (
    <div>
      <h1>{Heading}</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statistic good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>

       
     
       
    </div>
  )

  }
  
  
  
  
export default App
