const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "All working" });
});

//Central error
app.use((error, req, res, next) => {
  const erorMessage = error.message || "Some thing went wrong";
  const errorStatus = error.status || 500;

  res
    .status(errorStatus)
    .json({ success: false, status: errorStatus, message: erorMessage });
});

app.listen(PORT, () => {
  console.log(`App is unning on port ${PORT}`.gray.bold);
});
