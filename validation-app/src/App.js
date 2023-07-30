import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({});

  const fetchValidations = debounce((password) => {
    axios.get(`http://localhost:3000/validation/validate-password/${password}`)
      .then(response => setValidations(response.data))
      .catch(error => console.log(error));
  }, 500); // delay of 500ms

  useEffect(() => {
    if (password) {
      fetchValidations(password);
    }
  }, [password, fetchValidations]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value.replace(/\//g, ''); // remove slash
    setPassword(newPassword);
  };

  const validationTitles = {
    'length': 'Password length >= 16',
    'hasLowercase': 'Contains lowercase',
    'hasUppercase': 'Contains uppercase',
    'noConsecutiveLetters': 'No consecutive identical letters',
    'hasFourNumbers': 'Contains at least 4 numbers',
    'noConsecutiveNumbers': 'No consecutive identical numbers',
    'hasTwoSpecialChars': 'Contains two special characters',
    'noRepeatedSpecialChars': 'No repeated special characters',
    'noSpecialCharsTogether': 'Special characters not together',
    'noZero': 'No zeros',
    'noSpaces': 'No spaces',
    'isValid': 'Is password valid?'
  };
  
  return (
    <div className="App">
      <form>
        <p>Please note, the character "/" is not allowed and will be removed.</p>
        <input type="text" value={password} onChange={handlePasswordChange} className="input" />
      </form>
      <div className="validation-results">
        {Object.entries(validations).map(([key, isValid]) => 
          <div key={key} className={`validation-result ${isValid ? 'valid' : 'invalid'}`}>
            {validationTitles[key]}: {isValid ? '✓' : '✗'}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

