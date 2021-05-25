const pool = require("../database");

module.exports = function () {
	async function getArtistas() {
		const sql = `SELECT * FROM artistas`;
		return await pool.query(sql);
	}
	async function addArtistas(data) {
		const sql = `INSERT INTO artistas (nombre, apellidos, edad, biografia,foto) VALUES ( ?, ?, ?, ?,?);`;
		return await pool.query(sql, data);
	}
	async function editArtistas(data) {
		const sql = `UPDATE artistas SET nombre=?, apellidos=?,edad=?,biografia=?,foto=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function deleteArtistas(data) {
		const sql = `DELETE FROM artistas WHERE id=?`;
		return await pool.query(sql, data);
	}
	return {
		getArtistas,
		addArtistas,
		editArtistas,
		deleteArtistas,
	};
};
