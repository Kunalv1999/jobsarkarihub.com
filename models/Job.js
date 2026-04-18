import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  organization: String,
  category: String,
  location: String,
  lastDate: String,
  applyLink: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);