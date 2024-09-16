import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Forms from './Form';


const initialFormValues = {
  username: '',
  email: '',
  role: '',
};

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = evt => {

    evt.preventDefault();
    submit();
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

        <Form
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />

    </div>
  );
}

export default App;
