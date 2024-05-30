// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).

  // const [error,setError] = React.useState('');
  const [inputVal, setInputVal] = React.useState('')

  const inputRef = React.useRef(null);
  const handleSubmit = (event)=>{
    // console.log('manish ::',{inputRef});
    // event.preventDefault();
    // // const value = event.target.elements[0].value?? 'Manish';
    // const value = inputRef.current.value || 'Manish';
    onSubmitUsername(inputVal)
  }
  const handleChange = ()=>{
    const value = inputRef.current.value;
    const isValidValue = value === value.toLowerCase();
    // if(!isValidValue) {
    //   setError('Please enter only lower case letters')
    // }else if(isValidValue && error){
    //   setError('');
    // }
    if(isValidValue){
      setInputVal(value);
    }

  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form  
      onSubmit={handleSubmit}
    >
      <div>
        <label>Username:</label>
        <input onChange={handleChange} ref={inputRef} type="text" value={inputVal}/>
      </div>
      
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
