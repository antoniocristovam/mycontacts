const express = require("express");

const routes = require("./routes");

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(routes);

const port = 3000;

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
});
