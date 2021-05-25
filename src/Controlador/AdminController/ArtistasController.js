const ArtistaModel = require("../../Model/ArtistaModel");

async function getArtistas(req, res) {
	const artistas = await ArtistaModel().getArtistas();
	res.render("admin/crudArtistas", { artistas });
}
async function addArtistas(req, res) {
	const data = [
		req.body.nombre,
		req.body.apellidos,
		req.body.edad,
		req.body.biografia,
		req.file.filename,
	];
	const artistas = await ArtistaModel().addArtistas(data);
	res.redirect("/admin/artistas");
}
async function editArtistas(req, res) {
	const data = [
		req.body.nombre,
		req.body.apellidos,
		req.body.edad,
		req.body.biografia,
	];
	if (req.file) {
		data.push(req.file.filename);
	} else {
		data.push(req.body.foto_old);
	}
	data.push(req.body.id);
	const artistas = await ArtistaModel().editArtistas(data);
	res.redirect("/admin/artistas");
}
async function deleteArtistas(req, res) {
	console.log(req.params.id);
	const artistas = await ArtistaModel().deleteArtistas(req.params.id);
	res.redirect("/admin/artistas");
}

module.exports = {
	getArtistas,
	addArtistas,
	editArtistas,
	deleteArtistas,
};
