const express = require("express");
const MovieController = require("../controllers/movie");

const router = express();

router.get("/movies", MovieController.fetchMovie);
router.get("/movies/:id", MovieController.fetchMovieById);
router.delete("/movies/:id", MovieController.deleteMovie);
router.put("/movies/:id", MovieController.editMovie);
router.post("/movies", MovieController.postMovie);

module.exports = router;
