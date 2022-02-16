import React, { useState } from 'react'
import './App.css';

function App() {      //function component
const [state, setState] = useState({
  fname: "",
  lname: "",
  message: "",
  carBrand: "",
  isChecked: false,
})

const handleChange = e => {
  const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
  setState({
    ...state,
  [e.target.name]: value,
})
}

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name:{" "}
          <input 
          type="text" 
          name="fname" 
          value={state.fname} 
          onChange={handleChange} 
        />
        </label>{" "}
        <label>
          Last Name:{" "} 
          <input 
          type="text" 
          name="lname" 
          value={state.lname} 
          onChange={handleChange} 
        />
        </label>
        <label>
          Your message: {" "}
          <textArea 
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Pick your favorite car brand:
          <select name="carBrand" value={state.carBrand} onChange={handleChange}>
            <option value="mercedes">Mercedes</option>
            <option value="bmw">Bmw</option>
            <option value="maserati">Maserati</option>
            <option value="infinity">Infinity</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="isChecked" checked={state.isChecked} onChange={handleChange}/>
           {" "}
           Is Checked?
        </label>
      </form>
      <h5>
        Name: {state.fname} {state.lname}
      </h5>
      <h5>My favorite car brand is: {state.carBrand}</h5>
      <p>Message: {state.message}</p>
      <h5>Is is checked? : {state.isChecked ? "Yes" : "No"}</h5>
    </div>
  );
}

export default App;
