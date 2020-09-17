const express = require("express");
const cors = require("cors");
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
// cors para intercambiar datos entre el backend y el frontend
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users", require("./routes/users"));

app.use("/api/notes", require("./routes/notes"));

module.exports = app;
