const db = require('../config/db');
const tableName = 'Layout1';

exports.getAllRecords = async (req, res) => {
  try {
    const [results] = await db.query(`SELECT * FROM ${tableName}`);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecordById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRecord = async (req, res) => {
  const {
    Company_Name,
    Business_title,
    Business_goal,
    About_US,
    Service1_title,
    Service1_description,
    Service2_title,
    Service2_description,
    Service3_title,
    Service3_description,
    Phone,
    Email,
    Address,
  } = req.body;

  try {
    const [results] = await db.query(
      `INSERT INTO ${tableName} 
      (Company_Name, Business_title, Business_goal, About_US, Service1_title, Service1_description, 
       Service2_title, Service2_description, Service3_title, Service3_description, Phone, Email, Address) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Company_Name,
        Business_title,
        Business_goal,
        About_US,
        Service1_title,
        Service1_description,
        Service2_title,
        Service2_description,
        Service3_title,
        Service3_description,
        Phone,
        Email,
        Address,
      ]
    );
    res.status(201).json({ message: 'Record created successfully', id: results.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRecord = async (req, res) => {
  const { id } = req.params;
  const {
    Company_Name,
    Business_title,
    Business_goal,
    About_US,
    Service1_title,
    Service1_description,
    Service2_title,
    Service2_description,
    Service3_title,
    Service3_description,
    Phone,
    Email,
    Address,
  } = req.body;

  try {
    await db.query(
      `UPDATE ${tableName} 
      SET Company_Name = ?, Business_title = ?, Business_goal = ?, About_US = ?, 
          Service1_title = ?, Service1_description = ?, Service2_title = ?, Service2_description = ?, 
          Service3_title = ?, Service3_description = ?, Phone = ?, Email = ?, Address = ? 
      WHERE id = ?`,
      [
        Company_Name,
        Business_title,
        Business_goal,
        About_US,
        Service1_title,
        Service1_description,
        Service2_title,
        Service2_description,
        Service3_title,
        Service3_description,
        Phone,
        Email,
        Address,
        id,
      ]
    );
    res.json({ message: 'Record updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query(`DELETE FROM ${tableName} WHERE id = ?`, [id]);
    res.json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
