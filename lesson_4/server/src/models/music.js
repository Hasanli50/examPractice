const musicSchema = require("../schemas/music.js");
const mongoose = require("mongoose");

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;
