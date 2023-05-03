module.exports = app => {
    const empresa = require("../controllers/empresa.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", empresa.create);
  
    // Retrieve all empresa
    router.get("/", empresa.findAll);
  
    // Retrieve all published empresa
    router.get("/published", empresa.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", empresa.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", empresa.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", empresa.delete);
  
    // Create a new Tutorial
    router.delete("/", empresa.deleteAll);
  
    app.use('/api/empresa', router);
  };