const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    projectOwner: String,
    image: String,
    title: String,
    description: String,
    requirements: String,
    location: String,
    dueDate: Date,
    //associate to filter
    user: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }]
});

var Project = mongoose.model('projects', projectSchema);

module.exports = Project;