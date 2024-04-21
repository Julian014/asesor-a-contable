const express = require("express");
const path = require("path"); // Importa el módulo 'path' para trabajar con rutas de archivos
const mysql = require("mysql2");

// Crear una instancia de la aplicación Express
const app = express();

// Configuración de las vistas
app.set("views", path.join(__dirname, "views")); // Establece la carpeta de vistas
app.set("view engine", "hbs"); // Configura Handlebars como el motor de plantillas

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
    res.render('principal/home.hbs'); // Renderiza la vista 'home.hbs'
});


































// Iniciar el servidor
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
