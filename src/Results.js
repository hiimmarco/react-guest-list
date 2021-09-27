/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Results() {
  return (
    <div>
      Here are the results in a table.
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Confirmed</th>
          <th>Edit</th>
        </tr>
        <tr>
          <td>Alfred</td>
          <td>Ungerböck</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button />
          </td>
        </tr>
      </table>
    </div>
  );
}
