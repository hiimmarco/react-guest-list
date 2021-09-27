/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

/* Styling components and elements using emotion */
const inputfields = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;

  button {
    margin-top: 1rem;
  }
`;

/* Set the base url of the api */
const baseUrl = '';

export default function Inputs() {
  /* Declare all state variables and usestates */
  const [allGuests, setAllGuests] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Fetch all data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${baseUrl}/`);
      const allData = await response.json();
      setAllGuests(allData);
    };
    getData();
  }, []);

  return (
    <div css={inputfields}>
      <label>
        First name:
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
        />
      </label>
      <label>
        Last name:
        <input
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
        />
      </label>
      <button>Attend</button>
      <div>
        Here are the results in a table.
        <table>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Attending</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>Alfred</td>
            <td>Ungerböck</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
