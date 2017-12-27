const path = require("path");

const Project = require('../models/Project');

module.exports = (app) => {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    app.post("/project", function (req, res) {
        let saveProject = new Project();
        saveProject.projectOwner = req.body.projectOwner;
        saveProject.image = req.body.image;
        saveProject.title = req.body.title;
        saveProject.description = req.body.description;
        saveProject.requirements = req.body.requirements;
        saveProject.location = req.body.location;
        saveProject.save()
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err.message ? err.message : 'ERRORED! Did not save in Mongo!');
            });
    });



};