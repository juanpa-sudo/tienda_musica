const InstrumentoModel = require("../../Model/InstrumentoModel");

async function getInstrumento(req, res) {
	const instrumento = await InstrumentoModel().getInstrumento();
	res.render("admin/crudInstrumento", { instrumento });
}
async function addInstrumento(req, res) {
	const data = [req.body.nombre, req.body.descripcion, req.file.filename];
	const instrumento = await InstrumentoModel().addInstrumento(data);
	res.redirect("/admin/instrumento");
}
async function editInstrumento(req, res) {
	console.log(req.file);
	const data = [
		req.body.nombre,
		req.body.descripcion,
		req.file == undefined ? req.body.image_old : req.file.filename,
		req.body.id,
	];
	const respuesta = await InstrumentoModel().editInstrumento(data);
	res.redirect("/admin/instrumento");
}
async function deleteInstrumento(req, res) {
	const respuesta = await InstrumentoModel().deleteInstrumento(
		req.params.id
	);
	res.redirect("/admin/instrumento");
}
module.exports = {
	getInstrumento,
	editInstrumento,
	addInstrumento,
	deleteInstrumento,
};
