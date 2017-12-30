const path = require("path");

const Project = require('../models/Project');
const User = require('../models/User');

module.exports = (app) => {

    //Add-edit User profile info
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


    //Create new project
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


    //Get all projects
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


    //Populate projects based on search criteria: keyword OR date
    app.post("/api/search", function (req, res) {

        //Search criteria
        let requirementsKeyword = req.body.requirementsKeyword;
        let startDate = req.body.startDate; //format '2018, 1, 1'
        let endDate = req.body.endDate; //format '2018, 12, 31'

        if (requirementsKeyword) {
            requirementsKeyword.toLowerCase();

            Project.find({})
                .then((docs) => {
                    let list = docs.filter(doc => doc.requirements.toLowerCase().includes(requirementsKeyword));
                    res.json(list);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send(err.message ? err.message : 'ERRORED! Re-enter search criteria. Search by keyword OR date, not both');
                });
        }


        if (startDate && endDate) {
            Project.find(
                //{ "dueDate": { "$gte": new Date(2018, 1, 1), "$lt": new Date(2018, 12, 15) } })
                { "dueDate": { "$gte": new Date(startDate), "$lt": new Date(endDate) } })
                .then((docs) => {
                    res.json(docs);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send(err.message ? err.message : 'ERRORED! Re-enter search criteria. Search by keyword OR date, not both');
                });
        }
        
    });


    //Add project to user
    //req.user to get curret user that is logged in




};