import express from "express";
import { APP_PORT, DB_URL } from "./config";
import routes from "./routes";
import mongoose from "mongoose";
import path from "path";

// Database connection
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected...");
});

const app = express();
global.appRoot = path.resolve(__dirname);

// for json validation
app.use(express.json());
// for form data validation
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/api", routes);
app.use("/uploads", express.static("uploads"));

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}.`));
