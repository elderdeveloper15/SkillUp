module.exports = app => {
    const estudiante = require("../controllers/estudiante.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", estudiante.create);
  
    // Retrieve all estudiante
    router.get("/", estudiante.findAll);
  
    // Retrieve all published estudiante
    router.get("/published", estudiante.findAllPublished);

    //Retrieve the last ID of all the students
    router.get("/lastid",estudiante.lastID);

    //Check if the account exists by email and password
    router.get("/account",estudiante.checkAccount);

    //Download CV from estudiante
    router.get("/download/:id",estudiante.download);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", estudiante.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", estudiante.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", estudiante.delete);
  
    // Create a new Tutorial
    router.delete("/", estudiante.deleteAll);
  
    app.use('/api/estudiante', router);
  };