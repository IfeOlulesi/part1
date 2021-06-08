import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
    'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
    'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.',
    'Simplicity is prerequisite for reliability'
  ]
  const votesArr = new Array(anecdotes.length).join('0').split('').map(parseFloat) 

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesArr)
  
  const rand = () => {
    let done = false
    while (done == false) {
      var randNum = Math.floor(Math.random() * anecdotes.length-1)
      if (randNum > -1) done = true
      else continue
    }
    setSelected(randNum)
  }
  
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1

    setVotes([...copy])
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes<br />

      <button onClick={handleVote}>Vote</button>
      <button onClick={rand}>Next Anecdote</button>

      <h2>Most Popular Anecdote</h2>
      {anecdotes[votes.indexOf(Math.max(...votes))]}<br />
      has {Math.max(...votes)} votes
    </div>
  )
}

export default App