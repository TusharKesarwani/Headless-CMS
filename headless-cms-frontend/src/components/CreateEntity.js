import React, { useState } from "react";
import axios from "axios";

function CreateEntity() {
  const [entityName, setEntityName] = useState("");
  const [attributes, setAttributes] = useState([
    { name: "", type: "VARCHAR(255)" },
  ]);

  const handleAddAttribute = () => {
    setAttributes([...attributes, { name: "", type: "VARCHAR(255)" }]);
  };

  const handleChangeAttribute = (index, key, value) => {
    const newAttributes = [...attributes];
    newAttributes[index][key] = value;
    setAttributes(newAttributes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/entity", { entityName, attributes })
      .then((response) => alert(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Create Entity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entity Name"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
          required
        />
        {attributes.map((attr, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Attribute Name"
              value={attr.name}
              onChange={(e) =>
                handleChangeAttribute(index, "name", e.target.value)
              }
              required
            />
            <select
              value={attr.type}
              onChange={(e) =>
                handleChangeAttribute(index, "type", e.target.value)
              }
            >
              <option value="VARCHAR(255)">String</option>
              <option value="INT">Number</option>
              <option value="DATE">Date</option>
            </select>
          </div>
        ))}
        <button type="button" onClick={handleAddAttribute}>
          Add Attribute
        </button>
        <button type="submit">Create Entity</button>
      </form>
    </div>
  );
}

export default CreateEntity;
