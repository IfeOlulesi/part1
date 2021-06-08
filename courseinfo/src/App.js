import React from 'react'

const Header = (props) => {
  console.log(`Header prop: ${props}`)
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Part = (props) => {
  console.log(`Part prop: ${props}`)
  return (
    <p>{props.part.name} = {props.part.exercises}</p>
  )
}

const Content = (props) => {
  console.log(`Content prop: ${props}`)
  return (
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log(`Total prop: ${props}`)
  return (
    <div>
      <p>Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return ( 
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total total = {course.parts}/>
    </div>
  )
}

export default App