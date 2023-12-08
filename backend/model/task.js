import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
      trim: true,
    },
    taskDescription: {
      type: String,
      required: true,
      trim: true,
    },
    assignTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"employee_details",
      required: true,
    },
    taskOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"project",
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

export  const Task = mongoose.model("task", taskSchema)
