import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectStartDate: {
      type: String,
      required: true,
    },
    projectEndDate: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    managerName: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


export const Project = mongoose.model("project", projectSchema)