module.exports = app => {
    const administrador = require("../controllers/administrador.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", administrador.create);
  
    // Retrieve all administrador
    router.get("/", administrador.findAll);
  
    // Retrieve all published administrador
    router.get("/published", administrador.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", administrador.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", administrador.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", administrador.delete);
  
    // Create a new Tutorial
    router.delete("/", administrador.deleteAll);
  
    app.use('/api/administrador', router);
  };