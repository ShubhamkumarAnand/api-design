import express from "express";

const app = express();
console.log(app);
app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello From Server!" });
  console.log("Hello from server");
});

export default app;
