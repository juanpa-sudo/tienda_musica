const pool = require("../database");
module.exports = function () {
	async function getAlbum() {
		const sql = `SELECT album.id, album.nombre,album.descripcion,album.imagen,artistas.nombre AS autor, artistas.apellidos, album.precio FROM album INNER JOIN artistas ON album.id_artista=artistas.id`;
		return await pool.query(sql);
	}

	async function addAlbum(data) {
		const sql = `INSERT INTO album(nombre,descripcion,imagen) VALUES(?,?,?)`;
		return await pool.query(sql, data);
	}
	async function editAlbum(data) {
		const sql = `UPDATE album SET nombre=?,descripcion=?, imagen=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function deleteAlbum(data) {
		const sql = `DELETE FROM album WHERE id=?`;
		return await pool.query(sql, data);
	}

	return { getAlbum, addAlbum, editAlbum, deleteAlbum };
};
