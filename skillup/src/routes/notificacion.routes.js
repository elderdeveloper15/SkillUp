module.exports = app => {
    const notificacion = require("../controllers/notificacion.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", notificacion.create);
  
    // Retrieve all notificacion
    router.get("/", notificacion.findAll);
  
    // Retrieve all published notificacion
    router.get("/published", notificacion.findAllPublished);

    //Retrieve the last ID of all the students
    router.get("/lastid",notificacion.lastID);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", notificacion.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", notificacion.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", notificacion.delete);
  
    // Create a new Tutorial
    router.delete("/", notificacion.deleteAll);
  
    app.use('/api/notificacion', router);
  };