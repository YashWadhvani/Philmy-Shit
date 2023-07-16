const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { title } = require("process");

const {
  PopularBollyMovieItem,
  PopularHollyMovieItem,
  UpcomingBollyMovieItem,
  UpcomingHollyMovieItem,
} = require("./models/movieItem");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const UpcomingHollyMovies = await UpcomingHollyMovieItem.find({});
  // const UpcomingHollyMovies = await UpcomingHollyMovies.find({});
  res.render("index", { UpcomingHollyMovies });
});

app.get("/community", (req, res) => {
  res.render("community");
});

app.get("/about", (req, res) => {
  res.render("contactus");
});

app.get("/cinema", async (req, res) => {
  const PopularBollyMovies = await PopularBollyMovieItem.find({});
  const PopularHollyMovies = await PopularHollyMovieItem.find({});
  res.render("cinema_page", { PopularBollyMovies, PopularHollyMovies });
});

app.listen(3000, () => {
  console.log("Serving on Port 3000!");
});
