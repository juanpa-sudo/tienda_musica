const pool = require("../database");

module.exports = function () {
	async function getMembresia() {
		const sql = `SELECT * FROM membresia`;
		return await pool.query(sql);
	}
	async function addMembresia(data) {
		const sql = `INSERT INTO membresia(nombre,precio,descripcion) VALUES(?,?,?)`;
		return await pool.query(sql, data);
	}
	async function editMembresia(data) {
		const sql = `UPDATE membresia SET nombre=?, precio=?,descripcion=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function deleteMembresia(data) {
		const sql = `DELETE FROM membresia WHERE id=?`;
		return await pool.query(sql, data);
	}
	return { getMembresia, addMembresia, editMembresia, deleteMembresia };
};
