const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

// Inicio
const app = express();

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
	".hbs",
	exphbs({
		defaultLayout: "main",
		layoutsDir: path.join(app.get("views"), "layouts"),
		partialsDir: path.join(app.get("views"), "partials"),
		extname: ".hbs",
		helpers: require("./lib/handlebars"),
	})
);

app.set("view engine", "hbs");

// peticiones
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variables Globales
app.use((req, res, next) => {
	next();
});
// rutas

app.use(require("./routes/index"));
app.use(require("./routes/authentication"));
app.use("/links", require("./routes/links"));
app.use("/index", require("./routes/vistainicial"));
app.use("/seccion", require("./routes/secciones"));
app.use("/admin", require("./routes/admin"));
app.use("/public", require("./routes/publicas"));

// public
// app.unsubscribe(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

// Inicia el serve
app.listen(app.get("port"), () => {
	console.log("Servidor en el puerto", app.get("port"));
});
