import React, { useState, useEffect } from "react";
import axios from "axios";

function EntityList() {
  const [entityName, setEntityName] = useState("");
  const [entries, setEntries] = useState([]);

  const handleEntityChange = (e) => {
    setEntityName(e.target.value);
    axios
      .get(`/api/entity/${e.target.value}`)
      .then((response) => setEntries(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/entity/${entityName}/${id}`)
      .then((response) => {
        alert(response.data);
        setEntries(entries.filter((entry) => entry.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Entity List</h2>
      <input
        type="text"
        placeholder="Entity Name"
        value={entityName}
        onChange={handleEntityChange}
        required
      />
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {Object.keys(entry).map((key) => (
              <span key={key}>
                {key}: {entry[key]}{" "}
              </span>
            ))}
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntityList;
