import express from "express";
import router from "./routes";

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello server" });
  console.log("Hello from server");
});

app.use("/api", router);
export default app;
