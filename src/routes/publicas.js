const express = require("express");
const {
	getCantante,
	getcantantes,
	index,
	getCanciones,
	getPremios,
	getAlbum,
	getMembresia,
	getInstrummentos,
	getconcierto,
	getCompositor,
	compMembresia,
	compAlbum,
	like,
	showInstrumento,
	compraBoleta,
} = require("../Controlador/PublicController/publica");
const router = express.Router();

router.get("/home", index);
router.get("/cantantes", getcantantes);
router.get("/artistas/:id", getCantante);
router.get("/canciones", getCanciones);
router.get("/premios", getPremios);
router.get("/album", getAlbum);
router.get("/membresia", getMembresia);
router.get("/instrumentos", getInstrummentos);
router.get("/concierto", getconcierto);
router.get("/compositores", getCompositor);
router.post("/comprarMembresia", compMembresia);
router.post("/comprarAlbum", compAlbum);
router.get("/like/:like/:id", like);
router.get("/showInstrumento/:id", showInstrumento);
router.post("/comprarBoleta", compraBoleta);

module.exports = router;
