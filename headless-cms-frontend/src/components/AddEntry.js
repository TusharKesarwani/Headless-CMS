import React, { useState, useEffect } from "react";
import axios from "axios";

function AddEntry() {
  const [entityName, setEntityName] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [entryData, setEntryData] = useState({});

  const handleEntityChange = (e) => {
    setEntityName(e.target.value);
    axios
      .get(`/api/entity/${e.target.value}`)
      .then((response) => setAttributes(response.data))
      .catch((error) => console.error(error));
  };

  const handleChangeEntry = (key, value) => {
    setEntryData({ ...entryData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/entity/entry", { entityName, data: entryData })
      .then((response) => alert(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entity Name"
          value={entityName}
          onChange={handleEntityChange}
          required
        />
        {attributes.map((attr) => (
          <div key={attr.name}>
            <input
              type="text"
              placeholder={attr.name}
              onChange={(e) => handleChangeEntry(attr.name, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default AddEntry;
