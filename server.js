const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors")

app.use(cors({
  origin : 'http://127.0.0.1:3000',
}))
app.use(express.json({ extented: false }));

// Connect to DB
connectDB();

// Defines Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen("1234", () => {
  console.log("Port enabled!");
});
