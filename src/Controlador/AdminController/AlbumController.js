const AlbumModel = require("../../Model/AlbumModel");

async function getAlbum(req, res) {
	const album = await AlbumModel().getAlbum();
	res.render("admin/crudAlbum", { album });
}

async function addAlbum(req, res) {
	const data = [req.body.nombre, req.body.descripcion, req.file.filename];
	const respuesta = await AlbumModel().addAlbum(data);
	res.redirect("/admin/album");
}
async function editAlbum(req, res) {
	const data = [req.body.nombre, req.body.descripcion];
	if (req.file) {
		data.push(req.file.filename);
	} else {
		data.push(req.body.imagen_old);
	}
	data.push(req.body.id);

	const respuesta = await AlbumModel().editAlbum(data);

	res.redirect("/admin/album");
}
async function deleteAlbum(req, res) {
	const respuesta = AlbumModel().deleteAlbum(req.params.id);
	res.redirect("/admin/album");
}

module.exports = { getAlbum, addAlbum, editAlbum, deleteAlbum };
