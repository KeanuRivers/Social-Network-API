// Requirements
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creation of the new schema and collections:
const SocialAPI = new Schema([
    {
        user: { type: String, required: true}, 
            userName: String,
            email: String,

        // lastAccessed: { type: Date, default: Date.now }    
    },
    {
        Thought: 
            {
                thoughtText: { type: String, required: true},
                createdAt: { type: Date, default: Date.now },
                userName: { type: String, required: true}
            }
    }
]);
// End Schema and collections.

const social = mongoose.model("Social", SocialAPI);

// Required to export file:
module.exports = social;