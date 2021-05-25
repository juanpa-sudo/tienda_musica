const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
	res.render("home/index");
});
router.get("/visart", (req, res) => {
	res.render("paginass/VistaHome");
});
router.get("/viscan", (req, res) => {
	res.render("paginass/VistaCanciones");
});
router.get("/visalb", (req, res) => {
	res.render("paginass/VistaAlbumes");
});
router.get("/viscomp", (req, res) => {
	res.render("paginass/VistaCompositores");
});
router.get("/visconc", (req, res) => {
	res.render("paginass/VistaConciertos");
});
router.get("/visinstru", (req, res) => {
	res.render("paginass/VistaInstrumentos");
});
router.get("/vismbr", (req, res) => {
	res.render("paginass/VistaMembresia");
});
router.get("/vispre", (req, res) => {
	res.render("paginass/VistaPremios");
});
router.get("/visprod", (req, res) => {
	res.render("paginass/VistaProducciones");
});
router.get("/visrepro", (req, res) => {
	res.render("paginass/VistaReproductores");
});
router.get("/viscrud", (req, res) => {
	res.render("paginass/VistaCrud");
});
router.get("/artcrud", async (req, res) => {
	res.render("paginass/crudartistas");
});

// router.get("/lisart", MusicController.listarartista);
// router.post("/crearart", MusicController.creartistas);
// router.get("/eliart/:id", MusicController.eliminarartista);
// router.post("/modiart/:id", MusicController.modificarartista);

router.get("/reprocrud", (req, res) => {
	res.render("paginass/crudreproductores");
});
router.get("/premcrud", (req, res) => {
	res.render("paginass/crudpremios");
});
router.get("/produccrud", (req, res) => {
	res.render("paginass/crudproducciones");
});
router.get("/instcrud", (req, res) => {
	res.render("paginass/crudinstrumentos");
});
router.get("/vislog", (req, res) => {
	res.render("paginass/vistalogin");
});

module.exports = router;
