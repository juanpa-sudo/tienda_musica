const pool = require("../database");
module.exports = function () {
	async function getConcierto() {
		const sql = `SELECT conciertos.*, artistas.nombre AS cantante, artistas.apellidos 
        FROM conciertos INNER JOIN artistas ON conciertos.id_artista=artistas.id`;
		return await pool.query(sql);
	}
	async function addConcierto(data) {
		const sql = `INSERT INTO conciertos(nombre,descripcion,modalidad,image,id_artista) VALUES(?,?,?,?,?) `;
		return await pool.query(sql, data);
	}
	async function editConcierto(data) {
		const sql = `UPDATE conciertos SET nombre=?,descripcion=?,modalidad=?,image=? WHERE id=? `;
		return await pool.query(sql, data);
	}
	async function deleteConcierto(data) {
		const sql = `DELETE FROM conciertos WHERE id=?`;
		return await pool.query(sql, data);
	}
	return { getConcierto, addConcierto, editConcierto, deleteConcierto };
};
