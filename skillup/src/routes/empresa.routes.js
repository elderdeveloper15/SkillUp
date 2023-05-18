module.exports = app => {
    const empresa = require("../controllers/empresa.controller.js");
  
    var router = require("express").Router();
  
    // Create a new empresa
    router.post("/", empresa.create);
  
    // Retrieve all empresa
    router.get("/", empresa.findAll);
  
    // Retrieve all published empresa
    router.get("/published", empresa.findAllPublished);

    //Retrieve the last ID of all the enterprises
    router.get("/lastid",empresa.lastID);
  
    //Retrieve a single Empresa with verifacada equals false
    router.get("/verificados",empresa.findNotVerified);

    // Retrieve a single empresa with id
    router.get("/:id", empresa.findOne);

    // Update a empresa with id
    router.put("/:id", empresa.update);
  
    // Delete a empresa with id
    router.delete("/:id", empresa.delete);
  
    // Create a new empresa
    router.delete("/", empresa.deleteAll);
  
    app.use('/api/empresa', router);
  };