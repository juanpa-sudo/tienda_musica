const ArtistaModel = require("../../Model/ArtistaModel");
const CancionesModel = require("../../Model/CancionesModel");

async function getSong(req, res) {
	const canciones = await CancionesModel().getSong();
	const artistas = await ArtistaModel().getArtistas();

	res.render("admin/crudCanciones", { canciones, artistas });
}

async function addCancion(req, res) {
	const data = [req.body.nombre, req.file.filename, req.body.cantante];
	const respuesta = await CancionesModel().addSong(data);
	console.log(respuesta);
	res.redirect("/admin/canciones");
}

async function editSong(req, res) {
	const data = [req.body.nombre];
	if (req.file) {
		data.push(req.file.filename);
	} else {
		data.push(req.body.foto_old);
	}
	data.push(req.body.id);
	const respuesta = await CancionesModel().editSong(data);
	res.redirect("/admin/canciones");
}
async function deleteSong(req, res) {
	const respuesta = await CancionesModel().deleteSong(req.params.id);
	res.redirect("/admin/canciones");
}
async function getSongApi(req, res) {
	const respuesta = await CancionesModel().getSongApi();
	res.json(respuesta);
}

module.exports = {
	getSong,
	addCancion,
	editSong,
	deleteSong,
	getSongApi,
};
