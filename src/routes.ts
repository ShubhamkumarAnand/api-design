import { Router } from "express";

const router = Router();

// Product Route
router.get("/product", (req, res) => {
  res.json({ message: req.shh_secret });
});
router.get("/product/:id", () => {});
router.post("/product", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});

// Update Route
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.post("/update", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

// Update Point Route
router.get("/update-point", () => {});
router.get("/update-point/:id", () => {});
router.post("/update-point", () => {});
router.put("/update-point/:id", () => {});
router.delete("/update-point/:id", () => {});

export default router;
