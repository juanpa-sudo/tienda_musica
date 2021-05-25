const ArtistaModel = require("../../Model/ArtistaModel");
const PremioModel = require("../../Model/PremioModel");

async function getPremios(req, res) {
	const artista = await ArtistaModel().getArtistas();
	const premios = await PremioModel().getPremio();
	res.render("admin/crudPremios", { artista, premios });
}
async function addPremio(req, res) {
	const data = [
		req.body.nombre,
		req.body.descripcion,
		req.body.artista.toString(),
		req.file.filename,
	];
	const respuesta = await PremioModel().addPremio(data);
	res.redirect("/admin/premios");
}
async function editPremio(req, res) {
	const data = [req.body.nombre, req.body.descripcion];
	if (req.file) {
		data.push(req.file.filename);
	} else {
		data.push(req.body.foto_old);
	}
	data.push(req.body.id);
	console.log(data);
	const respuesta = await PremioModel().editPremio(data);
	res.redirect("/admin/premios");
}
async function deletePremio(req, res) {
	const respuesta = await PremioModel().deletePremio(req.params.id);
	res.redirect("/admin/premios");
}
module.exports = {
	getPremios,
	addPremio,
	editPremio,
	deletePremio,
};
