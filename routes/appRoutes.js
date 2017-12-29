const path = require("path");

const Project = require('../models/Project');
const User = require('../models/User');

module.exports = (app) => {

    //get all projects
    app.get("/api/projects", function (req, res) {
        //res.sendFile(path.join(__dirname, "../index.html"));
        Project.find({})
            .then((docs) => {
                res.json(docs);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err.message ? err.message : 'Cannot GET Projects from Mongo.');
            });

    });

    //create new project
    app.post("/project", function (req, res) {

        //const { projectOwner, image, title, description, requirements, location, dueDate } = req.body;

        //let saveProject = {
        //    projectOwner,
        //    image,
        //    title,
        //    description,
        //    requirements,
        //    location,
        //    dueDate
        //};
        //console.log('saaaveeee', saveProject);

        let saveProject = new Project();

        saveProject.projectOwner = req.body.projectOwner;
        saveProject.image = req.body.image;
        saveProject.title = req.body.title;
        saveProject.description = req.body.description;
        saveProject.requirements = req.body.requirements;
        saveProject.location = req.body.location;
        saveProject.dueDate = req.body.dueDate;

        saveProject.save()
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err.message ? err.message : 'ERRORED! Did not save in Mongo!');
            });
    });

    //add-edit User profile info
    app.post("/:id", function (req, res) {
        User.findOne({ _id: req.params.id }, function (err, data) {
            let userData = data;
            userData.gitHub = req.body.gitHub;
            userData.stackOverflow = req.body.stackOverflow;
            userData.portfolioSite = req.body.portfolioSite;
            userData.aboutMe = req.body.aboutMe;
            userData.skills = req.body.skills;
            userData.location = req.body.location;

            userData.save()
                .then((doc) => {
                    res.json(doc);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send(err.message ? err.message : 'ERRORED! Did not save in Mongo!');
                });
        })
    });


    //populate projects based on search criteria
    app.post("/api/search", function (req, res) {

        //Search criteria
        let requirementsKeyword = req.body.requirementsKeyword.toLowerCase();
        
        Project.find({})
            .then((docs) => {
                let list = docs.filter(doc => doc.requirements.toLowerCase().includes(requirementsKeyword));
                res.json(list);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err.message);
            });

        
    });


    //add project to user



};