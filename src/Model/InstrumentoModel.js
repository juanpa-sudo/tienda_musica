const pool = require("../database");

module.exports = function () {
	async function getInstrumento() {
		const sql = `SELECT * FROM instrumento`;
		return await pool.query(sql);
	}
	async function addInstrumento(data) {
		const sql = `INSERT INTO instrumento(nombre, descripcion,image) VALUES(?,?,?)`;
		return await pool.query(sql, data);
	}
	async function editInstrumento(data) {
		const sql = `UPDATE instrumento SET nombre=?,descripcion=?,image=? WHERE id=?`;
		return await pool.query(sql, data);
	}

	async function deleteInstrumento(data) {
		const sql = `DELETE FROM instrumento WHERE id=?`;
		return await pool.query(sql, data);
	}

	return {
		getInstrumento,
		addInstrumento,
		editInstrumento,
		deleteInstrumento,
	};
};
