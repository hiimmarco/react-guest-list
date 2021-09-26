import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Inputs from './Inputs';
import Results from './Results';

function App() {
  return (
    <div className="App">
      <h1>Guest list</h1>
      <p>
        This is a rsvp guest list using React. Please enter your name and first
        name in the input fields below and press send. You can change your name
        afterwards. You can also delete your entry or select a guest as
        attaindee.
      </p>
      <Inputs />
      <Results />
    </div>
  );
}

export default App;
