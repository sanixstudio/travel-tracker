const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

app.use(morgan("common"));
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => `Listening on http://localhost: ${PORT}`);
