const CompositoresModel = require("../../Model/CompositoresModel");

async function getCompositores(req, res) {
	const compositores = await CompositoresModel().getCompositores();
	res.render("admin/crudCompositor", { compositores });
}
async function addCompositor(req, res) {
	const data = [
		req.body.nombre,
		req.body.apellidos,
		req.body.descripcion,
		req.file.filename,
	];
	const respuesta = await CompositoresModel().addCompositor(data);
	res.redirect("/admin/compositores");
}
async function editCompositor(req, res) {
	const data = [
		req.body.nombre,
		req.body.apellidos,
		req.body.descripcion,
		req.file == undefined ? req.body.image_old : req.file.filename,
		req.body.id,
	];
	const respuesta = await CompositoresModel().editCompositor(data);
	res.redirect("/admin/compositores");
}
async function deleteCompositor(req, res) {
	const respuesta = await CompositoresModel().deleteCompositor(
		req.params.id
	);
	res.redirect("/admin/compositores");
}
module.exports = {
	getCompositores,
	addCompositor,
	editCompositor,
	deleteCompositor,
};
