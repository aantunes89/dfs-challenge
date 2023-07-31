const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Read the data from the JSON file
const data = require("./data.json");

// Get all topics
app.get("/attendants", (req, res) => {
  res.json(data.attendants);
});

app.get("/topics", (req, res) => {
  res.json(data.topics);
});

app.get("/topics/books", (req, res) => {
  res.json(data.topics.books);
});

app.get("/topics/football", (req, res) => {
  res.json(data.topics.football);
});

// Get all leagues in football
app.get("/topics/football/:name", (req, res) => {
  const leagueName = req.params.name;
  const league = data.topics.football.data.find((league) => league.name === leagueName);
  if (league) {
    res.json(league);
  } else {
    res.status(404).json({ message: "League not found" });
  }
});

app.get("/topics/books/:name", (req, res) => {
  const leagueName = req.params.name;
  const league = data.topics.books.data.find((league) => league.name === leagueName);
  if (league) {
    res.json(league);
  } else {
    res.status(404).json({ message: "League not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
