const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required:true },
    set: [{
        platform: { type: String, required: true, enum: ["youtube", "soundcloud", "itunes"]},
        title: { type: String, require: true },
        description: { type: String },
        thumbnail: { type: String, required: true }
    }]
})

module.exports = mongoose.model("Likes", likeSchema)