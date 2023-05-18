module.exports = app => {
    const curso = require("../controllers/curso.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", curso.create);
  
    // Retrieve all curso
    router.get("/", curso.findAll);
  
    // Retrieve all published curso
    router.get("/published", curso.findAllPublished);

    //Retrieve the last ID of all the students
    router.get("/lastid",curso.lastID);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", curso.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", curso.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", curso.delete);
  
    // Create a new Tutorial
    router.delete("/", curso.deleteAll);
  
    app.use('/api/curso', router);
  };