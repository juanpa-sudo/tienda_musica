const PublicaModel = require("../../Model/PublicaModel");
const ArtistaModel = require("../../Model/ArtistaModel");
const CancionesModel = require("../../Model/CancionesModel");
const AlbumModel = require("../../Model/AlbumModel");
const MembresiaModel = require("../../Model/MembresiaModel");
const InstrumentoModel = require("../../Model/InstrumentoModel");
const ConciertoModel = require("../../Model/ConciertoModel");
const CompositoresModel = require("../../Model/CompositoresModel");
const PremioModel = require("../../Model/PremioModel");
const CompraModel = require("../../Model/CompraModel");

async function getCantante(req, res) {
	const respuesta = await PublicaModel().getCantante(req.params.id);
	const canciones = await PublicaModel().getCanciones(req.params.id);
	res.render("home/cantante", { respuesta, canciones });
}

async function index(req, res) {
	const artista = await PublicaModel().artistasIndex();
	artista.forEach((element) => {
		element.biografia = element.biografia.replace(/<[^>]*>?/g, "");
		element.biografia = element.biografia.substr(0, 180);
	});
	const canciones = await PublicaModel().cancionesIndex();
	res.render("home/index", { artista, canciones });
}
async function getcantantes(req, res) {
	const repsuesta = await ArtistaModel().getArtistas();
	repsuesta.forEach((element) => {
		element.biografia = element.biografia.replace(/<[^>]*>?/g, "");
		element.biografia = element.biografia.substr(0, 180);
	});
	res.render("home/cantantes", { repsuesta });
}
async function getCanciones(req, res) {
	const respuesta = await CancionesModel().getSong();
	res.render("home/canciones", { respuesta });
}

async function getPremios(req, res) {
	const respuesta = await PremioModel().getPremio();

	respuesta.forEach((element) => {
		element.descripcion = element.descripcion.replace(/<[^>]*>?/g, "");
		element.descripcion = element.descripcion.substr(0, 180);
		element.artista = element.artista.split(",");
	});
	console.log(respuesta);
	res.render("home/premios", { respuesta });
}
async function getAlbum(req, res) {
	const respuesta = await AlbumModel().getAlbum();
	respuesta.forEach((element) => {
		element.descripcionCompleta = element.descripcion;
		element.descripcion = element.descripcion.replace(/<[^>]*>?/g, "");
		element.descripcion = element.descripcion.substr(0, 239);
	});
	res.render("home/album", { respuesta });
}
async function getMembresia(req, res) {
	const respuesta = await MembresiaModel().getMembresia();
	res.render("home/membresia", { respuesta });
}
async function getInstrummentos(req, res) {
	const respuesta = await InstrumentoModel().getInstrumento();
	respuesta.forEach((element) => {
		element.descripcion = element.descripcion.replace(/<[^>]*>?/g, "");
		element.descripcion = element.descripcion.substr(0, 380);
	});
	res.render("home/instrumento", { respuesta });
}
async function getconcierto(req, res) {
	const respuesta = await ConciertoModel().getConcierto();
	respuesta.forEach((element) => {
		element.descripcion = element.descripcion.replace(/<[^>]*>?/g, "");
		element.descripcion = element.descripcion.substr(0, 180);
	});
	res.render("home/concierto", { respuesta });
}
async function getCompositor(req, res) {
	const respuesta = await CompositoresModel().getCompositores();

	respuesta.forEach((element) => {
		element.descripcion = element.descripcion.replace(/<[^>]*>?/g, "");
		element.descripcion = element.descripcion.substr(0, 180);
	});
	res.render("home/compositores", { respuesta });
}

async function compMembresia(req, res) {
	const data = [
		req.body.nombre,
		req.body.compra,
		req.body.categoria,
		req.body.precio,
	];
	const respuesta = await CompraModel().comprar(data);
	res.redirect("/public/membresia");
}
async function compAlbum(req, res) {
	const data = [
		req.body.nombre,
		req.body.compra,
		req.body.categoria,
		req.body.precio,
	];
	const respuesta = await CompraModel().comprar(data);
	res.redirect("/public/album");
}

async function like(req, res) {
	const data = [parseInt(req.params.like) + 1, req.params.id];
	const respuesta = await CancionesModel().like(data);
	console.log(respuesta);
	res.redirect("/public/canciones");
}
async function showInstrumento(req, res) {
	const respuesta = await PublicaModel().getInstrumento(req.params.id);
	res.render("home/showInstrumento", respuesta[0]);
}
async function compraBoleta(req, res) {
	const data = [
		req.body.nombre,
		req.body.compra,
		req.body.categoria,
		req.body.precio,
	];
	const respuesta = await CompraModel().comprar(data);
	res.redirect("/public/concierto");
}
module.exports = {
	getCompositor,
	getCantante,
	index,
	getcantantes,
	getCanciones,
	getPremios,
	getAlbum,
	getMembresia,
	getInstrummentos,
	getconcierto,
	compMembresia,
	compAlbum,
	like,
	showInstrumento,
	compraBoleta,
};
