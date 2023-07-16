const mongoose = require("mongoose");
// const UpcomingMovieItem = require("../models/movieItem")(UpcomingMovieItem);
const {
  UpcomingHollyMovieItem,
  PopularHollyMovieItem,
  UpcomingBollyMovieItem,
  PopularBollyMovieItem,
} = require("../models/movieItem");
// const movieItemSchema = require("../models/movieItem");

// const UpcomingHollyMovieItem = mongoose.model(
//   "UpcomingHollyMovieItem",
//   movieItemSchema
// );
// const PopularHollyMovieItem = mongoose.model(
//   "PopularHollyMovieItem",
//   movieItemSchema
// );
// const UpcomingBollyMovieItem = mongoose.model(
//   "UpcomingBollyMovieItem",
//   movieItemSchema
// );
// const PopularBollyMovieItem = mongoose.model(
//   "PopularBollyMovieItem",
//   movieItemSchema
// );

mongoose
  .connect("mongodb://127.0.0.1:27017/philmyShit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error!");
    console.log(err);
  });

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDE3MzM4ZmQ0YTM0N2ZlNjI1ZjExYzY0YjZjYTBhZCIsInN1YiI6IjY0YjIzMjY1MGU0ZmM4MDEwMTgyMTUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-DNUn9yIBvletgACql5aiqGpfv8MRDRs9uklQcVaHY",
  },
};

const popularSeedDB = async () => {
  await PopularHollyMovieItem.deleteMany({});
  fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.json())
    .then((response) => {
      for (let index = 0; index < response.results.length; index++) {
        PopularHollyMovieItem.insertMany(response.results[index]);
      }
    })
    .catch((err) => console.error(err));

  await PopularBollyMovieItem.deleteMany({});
  fetch(
    "https://api.themoviedb.org/3/movie/popular?with_original_language=hi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      for (let index = 0; index < response.results.length; index++) {
        PopularBollyMovieItem.insertMany(response.results[index]);
      }
    })
    .catch((err) => console.error(err));
};

popularSeedDB().then(() => {
  console.log("Uploaded!");
});

const UpcomingSeedDB = async () => {
  await UpcomingHollyMovieItem.deleteMany({});
  fetch("https://api.themoviedb.org/3/movie/upcoming", options)
    .then((response) => response.json())
    .then((response) => {
      for (let index = 0; index < response.results.length; index++) {
        UpcomingHollyMovieItem.insertMany(response.results[index]);
      }
    })
    .catch((err) => console.error(err));

  await UpcomingBollyMovieItem.deleteMany({});
  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?with_original_language=hi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      for (let index = 0; index < response.results.length; index++) {
        UpcomingBollyMovieItem.insertMany(response.results[index]);
      }
    })
    .catch((err) => console.error(err));
};

UpcomingSeedDB().then(() => {
  console.log("Uploaded!");
});

module.exports = {
  PopularBollyMovieItem,
  PopularHollyMovieItem,
  UpcomingBollyMovieItem,
  UpcomingHollyMovieItem,
};
// module.exports = UpcomingHollyMovieItem;
// module.exports = PopularBollyMovieItem;
// module.exports = PopularHollyMovieItem;
