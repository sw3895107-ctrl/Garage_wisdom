import express from "express";
import Fix from "../models/Fix.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q;
  const filter = query
    ? { status: "approved", $or: [{ code: query }, { symptoms: { $regex: query, $options: "i" } }] }
    : { status: "approved" };

  const fixes = await Fix.find(filter).sort({ createdAt: -1 });
  res.json(fixes);
});

router.post("/", protect, async (req, res) => {
  const fix = await Fix.create({
    ...req.body,
    author: req.user.id
  });
  res.json(fix);
});

export default router;
