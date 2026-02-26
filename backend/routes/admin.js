import express from "express";
import Fix from "../models/Fix.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/pending", protect, adminOnly, async (req, res) => {
  const fixes = await Fix.find({ status: "pending" });
  res.json(fixes);
});

router.patch("/:id", protect, adminOnly, async (req, res) => {
  const fix = await Fix.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(fix);
});

export default router;
