const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => "Listening on http://localhost:" + PORT);
