const CompraModel = require("../../Model/CompraModel");

async function compraApi(req, res) {
	const respuesta = await CompraModel().compraApi();
	res.json(respuesta);
}
module.exports = { compraApi };
