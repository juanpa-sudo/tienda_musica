const express = require("express");
const upload = require("../lib/multer");
const {
	getArtistas,
	addArtistas,
	editArtistas,
	deleteArtistas,
} = require("../Controlador/AdminController/ArtistasController");
const {
	dasboard,
} = require("../Controlador/AdminController/DasboardController");
const {
	getSong,
	addCancion,
	editSong,
	deleteSong,
	getSongApi,
} = require("../Controlador/AdminController/CancionesController");
const {
	getPremios,
	addPremio,
	editPremio,
	deletePremio,
} = require("../Controlador/AdminController/PremiosController");
const {
	getAlbum,
	addAlbum,
	editAlbum,
	deleteAlbum,
} = require("../Controlador/AdminController/AlbumController");
const {
	getMenbresia,
	addMembresia,
	editMembresia,
	deleteMembresia,
} = require("../Controlador/AdminController/MembresiaController");
const {
	getInstrumento,
	addInstrumento,
	editInstrumento,
	deleteInstrumento,
} = require("../Controlador/AdminController/InstrumentoController");
const {
	getConcierto,
	addConcierto,
	editConcierto,
	deleteConcierto,
} = require("../Controlador/AdminController/ConciertoController");
const {
	getCompositores,
	addCompositor,
	editCompositor,
	deleteCompositor,
} = require("../Controlador/AdminController/CompositoresController");
const {
	compraApi,
} = require("../Controlador/AdminController/CompraComtroller");
const router = express.Router();

router.get("/dasboard", dasboard);

router.get("/artistas", getArtistas);
router.post("/addArtistas", upload.single("foto"), addArtistas);
router.post("/editArtista", upload.single("foto"), editArtistas);
router.get("/deleteArtista/:id", deleteArtistas);

router.get("/canciones", getSong);
router.post("/addCanciones", upload.single("imagen"), addCancion);
router.post("/editSong", upload.single("imagen"), editSong);
router.get("/deleteCanciones/:id", deleteSong);

router.get("/premios", getPremios);
router.post("/addPremio", upload.single("imagen"), addPremio);
router.post("/editPremio", upload.single("imagen"), editPremio);
router.get("/deletePremio/:id", deletePremio);

router.get("/album", getAlbum);
router.post("/addAlbum", upload.single("imagen"), addAlbum);
router.post("/editAlbum", upload.single("imagen"), editAlbum);
router.get("/deleteAlbum/:id", deleteAlbum);

router.get("/membresia", getMenbresia);
router.post("/addMembresia", addMembresia);
router.post("/editMembresia", editMembresia);
router.get("/deleteMembresia/:id", deleteMembresia);

router.get("/instrumento", getInstrumento);
router.post("/addInstrumento", upload.single("image"), addInstrumento);
router.post("/editInstrumento", upload.single("image"), editInstrumento);
router.get("/deleteInstrumento/:id", deleteInstrumento);

router.get("/conciertos", getConcierto);
router.post("/addConcierto", upload.single("image"), addConcierto);
router.post("/editConcierto", upload.single("image"), editConcierto);
router.get("/deleteConcierto/:id", deleteConcierto);

router.get("/compositores", getCompositores);
router.post("/addCompositores", upload.single("image"), addCompositor);
router.post("/editCompositores", upload.single("image"), editCompositor);
router.get("/deleteCompositores/:id", deleteCompositor);

router.get("/cancionesApi", getSongApi);
router.get("/compraApi", compraApi);

module.exports = router;
