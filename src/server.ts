import express from "express";
import router from "./routes";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";

const app = express();

// By default it allows all the route to have access
app.use(cors());

// Logging the request
app.use(morgan("dev"));

// Allows the user to send json
app.use(express.json());

/**
 *  Allows the url query string to be parsed into object for the consuming
 *  google.com/page?auth=true?page=10 -> parsed into object available for the route
 */

app.use(express.urlencoded({ extends: true }));

// custom middleware
app.use((req, res, next) => {
  req.shh_secret = "bunny";
  next();
});

// Express will intercept only the route and function available above

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello server" });
  console.log("Hello from server");
});

app.use("/api", protect, router);
export default app;
