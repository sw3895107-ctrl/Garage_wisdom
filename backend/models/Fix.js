import mongoose from "mongoose";

const fixSchema = new mongoose.Schema({
  code: String,
  vehicle: String,
  symptoms: String,
  solution: String,
  costSaved: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "pending" }
}, { timestamps: true });

export default mongoose.model("Fix", fixSchema);
