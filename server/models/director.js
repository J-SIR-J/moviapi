const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema ({
    name:{
        type: String,
        trim: true,
    },
    // name: String,
    movies:[{
        type: Schema.Types.ObjectId,
        ref: "movies"
    }]
})

const Director = mongoose.model("Director", DirectorSchema);
module.exports = Director;