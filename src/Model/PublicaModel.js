const pool = require("../database");

module.exports = function () {
	async function getCantante(data) {
		const sql = `SELECT * FROM artistas WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function getCanciones(data) {
		const sql = `SELECT canciones.id,canciones.nombre,canciones.imagen, artistas.nombre AS cantante, 
			canciones.id_artista, album.nombre AS album,canciones.likes FROM canciones 
			INNER JOIN artistas ON canciones.id_artista=artistas.id
			INNER JOIN album ON canciones.id_album=album.id WHERE canciones.id_artista=?;`;
		return await pool.query(sql, data);
	}
	async function artistasIndex() {
		const sql = `SELECT * FROM artistas limit 3`;
		return await pool.query(sql);
	}
	async function cancionesIndex() {
		const sql = `SELECT canciones.id,canciones.nombre,canciones.imagen, 
		artistas.nombre AS cantante, canciones.id_artista, album.nombre AS album, canciones.likes FROM canciones 
		INNER JOIN artistas ON canciones.id_artista=artistas.id
		INNER JOIN album ON canciones.id_album=album.id LIMIT 6`;
		return await pool.query(sql);
	}
	async function premiosIndex(data) {
		const sql = `SELECT * FROM premios WHERE id=?`;
		return await pool.query(sql, data);
	}
	async function getInstrumento(data) {
		const sql = `SELECT * FROM instrumento WHERE id=?`;
		return await pool.query(sql, data);
	}
	return {
		getCantante,
		getCanciones,
		artistasIndex,
		cancionesIndex,
		premiosIndex,
		getInstrumento,
	};
};
