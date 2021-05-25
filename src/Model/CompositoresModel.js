const pool = require("../database");
module.exports = function () {
	async function getCompositores() {
		const sql = `SELECT * FROM compositores`;
		return await pool.query(sql);
	}
	async function addCompositor(data) {
		const sql = `INSERT INTO compositores(nombre,apellidos,descripcion,image) VALUES(?,?,?,?)`;
		return await pool.query(sql, data);
	}
	async function editCompositor(data) {
		const sql = `UPDATE compositores SET nombre=?,apellidos=?,descripcion=?,image=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function deleteCompositor(data) {
		const sql = `DELETE FROM compositores WHERE id=?`;
		return await pool.query(sql, data);
	}
	return {
		getCompositores,
		addCompositor,
		editCompositor,
		deleteCompositor,
	};
};
