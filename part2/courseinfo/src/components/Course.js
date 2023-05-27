const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <b>Number of exercises {sum}</b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  const allContent = parts.map(part =>
    <Part key={part.id} part={part}/>
    )
  return (
    <>
    {allContent}
    </>
  )
}

const Course = (props) => {
    const totalAmountHS = props.courses[0].parts.reduce((sum, part) => sum + part.exercises, 0)
    const totalAmountNode = props.courses[1].parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <>
        <Header course={props.courses[0].name}/>
        <Content parts={props.courses[0].parts}/>
        <Total  sum={totalAmountHS}/>
        <Header course={props.courses[1].name}/>
        <Content parts={props.courses[1].parts}/>
        <Total  sum={totalAmountNode}/>
      </>
    )
  }

  export default Course