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

const table = css`
  margin-top: 2rem;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const tablebutton = css`
  text-transform: uppercase;
  width: 80px;
  height: 28px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: white;
  color: red;
  font-weight: regular;
  cursor: pointer;
`;

const form = css`
  input {
    margin: 0px 0px 16px 16px;
  }

  button {
    text-transform: uppercase;
    width: 200px;
    height: 48px;
    border: none;
    border-radius: 5px;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

/* Set the base url of the api */
const baseUrl = 'http://localhost:5000';

export default function Inputs() {
  /* Declare all state variables and usestates */
  const [allData, setAllData] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newUser, setNewUser] = useState('');

  // Fetch all data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${baseUrl}/`);
      const allGuests = await response.json();
      setAllData(allGuests);
    };
    getData();
  }, [newUser]);

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
      setFirstName('');
      setLastName('');
      setNewUser(createdGuest);
    };
    pushData();
  }

  // Create function to delete seperate users
  function handleDelete(id) {
    const deleteData = async () => {
      const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
      const deletedUser = await response.json();
      setNewUser(deletedUser);
    };
    deleteData();
  }

  // Create function to update the info on attending of seperate users
  function handleAttending(id) {
    const updateData = async () => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: true }),
      });
      const updatedGuest = await response.json();
      setNewUser(updatedGuest);
    };
    updateData();
  }

  if (!allData) {
    return <div>loading</div>;
  } else {
    return (
      <div css={inputfields}>
        <form onSubmit={handleSubmit} css={form}>
          <label>
            First name:
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
            />
          </label>
          <br />
          <label>
            Last name:
            <input
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
            />
          </label>
          <br />
          <button>Attend</button>
        </form>
        <div css={table}>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Attending</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                      <input
                        type="checkbox"
                        value="Attending"
                        defaultChecked={item.attending}
                        onChange={() => handleAttending(item.id)}
                      />
                    </td>
                    <td>
                      <button
                        css={tablebutton}
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
