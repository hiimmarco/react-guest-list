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
const baseUrl = 'http://localhost:5000';

export default function Inputs() {
  /* Declare all state variables and usestates */
  const [allData, setAllData] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Fetch all data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${baseUrl}/`);
      const allGuests = await response.json();
      setAllData(allGuests);
    };
    getData();
  }, []);

  // Push new guest
  function handleSubmit(e) {
    e.preventDefault();
    const pushData = async () => {
      const response = await fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
      });
      const createdGuest = await response.json();
      console.log(createdGuest);
      setFirstName('');
      setLastName('');
    };
    pushData();
  }

  if (!allData) {
    return <div>loading</div>;
  } else {
    return (
      <div css={inputfields}>
        <form onSubmit={handleSubmit}>
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
        </form>
        <div>
          Here are the results in an unordered list.
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
