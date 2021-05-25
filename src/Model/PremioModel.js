const pool = require("../database");
module.exports = function () {
	async function getPremio() {
		const sql = `SELECT * FROM premios`;
		return await pool.query(sql);
	}
	async function addPremio(data) {
		const sql = `INSERT INTO premios(nombre,descripcion,artista,imagen) VALUES(?,?,?,?)`;
		return await pool.query(sql, data);
	}
	async function editPremio(data) {
		const sql = `UPDATE premios SET nombre=?,descripcion=?,imagen=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function deletePremio(data) {
		const sql = `DELETE FROM premios WHERE id=?`;
		return await pool.query(sql, data);
	}
	return {
		addPremio,
		getPremio,
		editPremio,
		deletePremio,
	};
};
