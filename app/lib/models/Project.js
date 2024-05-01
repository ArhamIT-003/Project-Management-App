import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    state: {
      type: String,
      default: "todo",
      enum: ["todo", "in progress", "completed"],
    },
    assets: [String],
    team: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
