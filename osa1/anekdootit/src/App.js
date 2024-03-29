import { useState } from 'react'



const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const header = 'Anecdote of the day'
  const header2 = 'Anecdote with most votes'
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleVoteClick = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };
  
  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const getMostVoted = () => {
    let mostVotedIndex = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[mostVotedIndex]) {
        mostVotedIndex = i;
      }
    }
    return mostVotedIndex;
  }
  return (

    <div>
      <h1>{header}</h1>
      <div>
        {anecdotes[selected]}
      <div>
        has {votes[selected]} votes
        </div>
      </div>
      <div>
        <Button handleClick={handleClick} text='next anecdote' />
        <Button handleClick={handleVoteClick} text='vote' />
      </div>
      <h1>{header2}</h1>
      <div>
        {anecdotes[getMostVoted()]}
        </div>
        <div>
        has {votes[getMostVoted()]} votes
        </div>
    </div>
  );
  
}

export default App
