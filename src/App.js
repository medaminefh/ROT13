import React,{useState} from 'react';
import './App.css'


function App(props) {

  const [input,setinput] = useState('')
  
  const [text,setText] = useState('Type a text')

  const handleChange = e => {
    setinput(e.target.value)
  }

  const handleClick = e => {
    let x = input
    let inputs ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let outputs = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm' 
    let index = n => inputs.indexOf(n)

    setText(x.split('').map(x => index(x) > -1 ? outputs[index(x)] : x).join(''))
    setinput('')
  }

  const texts = !text ? <p>Plz type </p> :text

  return (
    <div className="App">
      <h1>This is a <span>ROT13</span> decode App 🇹🇳️</h1>
      <h2>{texts}</h2>
      <input  type='text'
              value={input}
              onChange={handleChange}
              placeholder='Try a word'
      />
      <button onClick={handleClick}>Decode / Encode</button>
    </div>
  );
}

export default App;
