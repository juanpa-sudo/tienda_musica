const pool = require("../database");
module.exports = function () {
	async function comprar(data) {
		const sql = `INSERT INTO compra(nombre,compra,categoria,precio,fecha) VALUES(?,?,?,?,NOW())`;
		return await pool.query(sql, data);
	}
	async function compraApi() {
		const sql = `SELECT fecha, COUNT(fecha) AS compras FROM compra GROUP BY fecha`;
		return await pool.query(sql);
	}
	return {
		comprar,
		compraApi,
	};
};
