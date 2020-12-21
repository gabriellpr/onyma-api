const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/clinica", ProductController.index);
routes.get("/clinica/:id", ProductController.show);
routes.post("/clinica", ProductController.store);
routes.put("/clinica/:id", ProductController.update);
routes.delete("/clinica/:id", ProductController.destroy);

module.exports = routes;
