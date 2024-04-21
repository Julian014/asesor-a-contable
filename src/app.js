const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const exphbs = require("express-handlebars"); // Importa express-handlebars

// Crear una instancia de la aplicación Express
const app = express();

// Configuración de Handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");
app.use(express.static(path.join(__dirname, "public")));

// Conección a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "usuario",
    password: "contraseña",
    database: "nombre_de_la_base_de_datos",
    port: 3306
});

// Verificar la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida correctamente');
});

// Ruta para la página principal
app.get('/principal', (req, res) => {
    res.render('principal/home'); // Renderiza la vista 'home.hbs'
});





























// Iniciar el servidor
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
