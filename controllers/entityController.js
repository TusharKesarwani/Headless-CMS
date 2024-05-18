const db = require("../models/db");

// Create Entity
exports.createEntity = (req, res) => {
  const { entityName, attributes } = req.body;
  let query = `CREATE TABLE ${entityName} (id INT AUTO_INCREMENT PRIMARY KEY`;

  attributes.forEach((attr) => {
    query += `, ${attr.name} ${attr.type.toUpperCase()}`;
  });
  query += `)`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Table created");
  });
};

// Add Entry
exports.addEntry = (req, res) => {
  const { entityName, data } = req.body;
  const keys = Object.keys(data).join(",");
  const values = Object.values(data)
    .map((value) => `'${value}'`)
    .join(",");

  let query = `INSERT INTO ${entityName} (${keys}) VALUES (${values})`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Entry added");
  });
};

// Get Entries
exports.getEntries = (req, res) => {
  const { entityName } = req.params;

  let query = `SELECT * FROM ${entityName}`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Update Entry
exports.updateEntry = (req, res) => {
  const { entityName, id, data } = req.body;
  let updates = [];
  for (let key in data) {
    updates.push(`${key}='${data[key]}'`);
  }
  let query = `UPDATE ${entityName} SET ${updates.join(",")} WHERE id=${id}`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Entry updated");
  });
};

// Delete Entry
exports.deleteEntry = (req, res) => {
  const { entityName, id } = req.params;

  let query = `DELETE FROM ${entityName} WHERE id=${id}`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.send("Entry deleted");
  });
};
