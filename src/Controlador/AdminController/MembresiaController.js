const MembresiaModel = require("../../Model/MembresiaModel");

async function getMenbresia(req, res) {
	const membresia = await MembresiaModel().getMembresia();
	res.render("admin/crudMembresia", { membresia });
}
async function addMembresia(req, res) {
	const data = [req.body.nombre, req.body.precio, req.body.descripcion];
	const respuesta = await MembresiaModel().addMembresia(data);
	res.redirect("/admin/membresia");
}
async function editMembresia(req, res) {
	const data = [
		req.body.nombre,
		req.body.precio,
		req.body.descripcion,
		req.body.id,
	];
	const respuesta = await MembresiaModel().editMembresia(data);
	res.redirect("/admin/membresia");
}
async function deleteMembresia(req, res) {
	const respuesta = await MembresiaModel().deleteMembresia(req.params.id);
	res.redirect("/admin/membresia");
}
module.exports = { getMenbresia, addMembresia, editMembresia, deleteMembresia };
