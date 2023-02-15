const express = require("express");
const app = express();
const tasks = require("./routes/notes");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

// Middleware
app.use(express.json());

//routes

app.use("/api/v1", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
//PORT
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
