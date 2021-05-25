const pool = require("../database");

module.exports = function () {
	async function getSong() {
		const sql = `SELECT canciones.id,canciones.nombre,canciones.imagen, 
		artistas.nombre AS cantante, canciones.id_artista, 
		album.nombre AS album,canciones.likes FROM canciones 
		INNER JOIN artistas ON canciones.id_artista=artistas.id
		INNER JOIN album ON canciones.id_album=album.id	`;
		return await pool.query(sql);
	}
	async function getSongApi() {
		const sql = `SELECT nombre,likes FROM canciones ORDER BY likes DESC LIMIT 5`;
		return await pool.query(sql);
	}
	async function like(data) {
		const sql = `Update canciones SET likes=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function addSong(data) {
		const sql = `INSERT INTO canciones(nombre,imagen,id_artista) VALUES (?,?,?)`;
		console.log(sql);
		return await pool.query(sql, data);
	}
	async function editSong(data) {
		const sql = `UPDATE canciones SET nombre=?, imagen=? WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function deleteSong(data) {
		const sql = `DELETE FROM canciones WHERE id=?`;
		return await pool.query(sql, data);
	}
	return {
		getSong,
		addSong,
		editSong,
		deleteSong,
		like,
		getSongApi,
	};
};
