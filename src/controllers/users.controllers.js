import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [id]
    );
    if (rows.length === 0) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const setUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { rows } = await pool.query(
      "UPDATE users SET user_name = $1, user_email =$2 WHERE user_id = $3",
      [data.user_name, data.user_email, id]
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    const { rows } = await pool.query(
      "INSERT INTO users (user_name, user_email) VALUES ($1,$2) RETURNING *",
      [data.user_name, data.user_email]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await pool.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      [id]
    );
    if (rowCount === 0) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};
