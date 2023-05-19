module.exports = app => {
    const oferta = require("../controllers/oferta.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", oferta.create);
  
    // Retrieve all oferta
    router.get("/", oferta.findAll);
  
    // Retrieve all published oferta
    router.get("/published", oferta.findAllPublished);

    //Retrive all cursos by id_empresa or title
    router.get("/search",oferta.findAllByIdOrTitle);

    //Retrieve all cursos by area
    router.get("/area",oferta.findAllByArea)

    //Retrieve the last ID of all the students
    router.get("/lastid",oferta.lastID);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", oferta.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", oferta.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", oferta.delete);
  
    // Create a new Tutorial
    router.delete("/", oferta.deleteAll);
  
    app.use('/api/oferta', router);
  };