const mongoose = require("mongoose");

const movieItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  original_title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
  },
  release_date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  backdrop_path: {
    type: String,
  },
});

const PopularHollyMovieItem = mongoose.model(
  "PopularMovieItem",
  movieItemSchema
);
const UpcomingHollyMovieItem = mongoose.model(
  "UpcomingMovieItem",
  movieItemSchema
);
const PopularBollyMovieItem = mongoose.model(
  "PopularMovieItem",
  movieItemSchema
);
const UpcomingBollyMovieItem = mongoose.model(
  "UpcomingMovieItem",
  movieItemSchema
);
module.exports = {
  UpcomingHollyMovieItem,
  PopularHollyMovieItem,
  UpcomingBollyMovieItem,
  PopularBollyMovieItem,
};
// module.exports = PopularMovieItem;

// module.exports = movieItemSchema;
