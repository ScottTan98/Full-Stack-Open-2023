import { useState } from 'react'

const StatisticsLine = (props) => {
  const {text, value} = props
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = ((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / total
  const positive = (props.good/total) * 100 

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  } else {
      return (
        <>
          <h1>Statistics</h1>
            <StatisticsLine text="good" value={props.good}/>
            <StatisticsLine text="neutral" value={props.neutral}/>
            <StatisticsLine text="bad" value={props.bad}/>
            <StatisticsLine text="all" value={total}/>
            <StatisticsLine text="average" value={average}/>
            <StatisticsLine text="positive" value={positive}/>
        </>
      )
  }
}

const Button = (props) => {
  const {handleClick, text, statusName, setStatusName} = props
  return (
    <button onClick={handleClick(statusName, setStatusName)}>{text}</button>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (status, setStatus) => {
    const handler = () => {
        setStatus(status + 1)
    }
    return handler
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button 
        handleClick = {handleClick}
        text = "good"
        statusName = {good}
        setStatusName = {setGood}
      />
      <Button 
        handleClick = {handleClick}
        text = "neutral"
        statusName = {neutral}
        setStatusName = {setNeutral}
      />
      <Button 
        handleClick = {handleClick}
        text = "bad"
        statusName = {bad}
        setStatusName = {setBad}
      />
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      />
    </>
  )
}

export default App