/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputfields = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;

  button {
    margin-top: 1rem;
  }
`;

export default function Inputs() {
  return (
    <div css={inputfields}>
      <label>First name:</label>
      <input />
      <label>Last name:</label>
      <input />
      <button>Attend</button>
    </div>
  );
}
