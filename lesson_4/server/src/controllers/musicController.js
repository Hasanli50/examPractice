const Music = require("../models/music.js");
const formatData = require("../utils/faomatObj.js");

const getAll = async (req, res) => {
  try {
    const { name } = req.query;
    const musics = await Music.find({
      name: { $regex: name || "", $options: "i" },
    });

    if (musics.length === 0) {
      return res.status(404).json({
        message: "Musics not found",
        status: "fail",
        data: {},
      });
    }
    res.status(200).json({
      message: "Musics successfully found",
      status: "success",
      data: musics.map(formatData),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: {},
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findById(id);

    if (!music) {
      return res.status(404).json({
        message: "Music not found",
        status: "fail",
        data: {},
      });
    }
    res.status(200).json({
      message: "Musics successfully found",
      status: "success",
      data: formatData(music),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: {},
    });
  }
};

const createMusic = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;
    const newMusic = new Music({
      name,
      description,
      image,
      price,
    });

    await newMusic.save();

    if (!newMusic) {
      return res.status(404).json({
        message: "Music not found",
        status: "fail",
        data: {},
      });
    }
    res.status(200).json({
      message: "Musics successfully created",
      status: "success",
      data: formatData(newMusic),
    });
    console.log(formatData(newMusic));
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: {},
    });
  }
};

const deleteMusic = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findByIdAndDelete(id);

    if (!music) {
      return res.status(404).json({
        message: "Music not found",
        status: "fail",
        data: {},
      });
    }
    res.status(200).json({
      message: "Musics successfully deleted",
      status: "success",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: {},
    });
  }
};

const favoriteToggle = async (req, res) => {
  const { id } = req.params;
  const { isFavorite } = req.body;

  const musicItem = await Music.findById(id);
  if (!musicItem) {
    return res.status(404).json({
      error: "Music not found",
    });
  }

  musicItem.isFavorite = isFavorite;
  await musicItem.save();

  res.status(200).json({
    message: "Favorite status updated",
    data: formatData(musicItem),
  });
};

module.exports = { getAll, getById, createMusic, deleteMusic, favoriteToggle };
