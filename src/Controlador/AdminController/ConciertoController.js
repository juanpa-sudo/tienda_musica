const ArtistaModel = require("../../Model/ArtistaModel");
const ConciertoModel = require("../../Model/ConciertoModel");

async function getConcierto(req, res) {
	const conciertos = await ConciertoModel().getConcierto();
	const cantante = await ArtistaModel().getArtistas();
	conciertos.forEach((element) => {
		element.validacion = element.modalidad == "Virtual" ? 1 : 0;
	});
	console.log(conciertos);
	res.render("admin/crudConcierto", { conciertos, cantante });
}
async function addConcierto(req, res) {
	const data = [
		req.body.nombre,
		req.body.descripcion,
		req.body.modalidad,
		req.file.filename,
		req.body.artista,
	];
	const conciertos = await ConciertoModel().addConcierto(data);
	res.redirect("/admin/conciertos");
}
async function editConcierto(req, res) {
	const data = [
		req.body.nombre,
		req.body.descripcion,
		req.body.modalidad,
		req.file == undefined ? req.body.image_old : req.file.filename,
		req.body.id,
	];
	const respuesta = await ConciertoModel().editConcierto(data);
	res.redirect("/admin/conciertos");
}
async function deleteConcierto(req, res) {
	const respuesta = await ConciertoModel().deleteConcierto(req.params.id);
	res.redirect("/admin/conciertos");
}
module.exports = { getConcierto, addConcierto, editConcierto, deleteConcierto };
