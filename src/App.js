import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Inputs from './Inputs';

const wrapper = css`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
  }
`;

function App() {
  return (
    <div className="App">
      <div css={wrapper}>
        <h1>Guest list</h1>
        <p>
          This is a rsvp guest list using React. Please enter your first name
          and your last name in the input fields below and press send. You can
          also delete an entry or select a guest as attending.
        </p>
        <Inputs />
      </div>
    </div>
  );
}

export default App;
