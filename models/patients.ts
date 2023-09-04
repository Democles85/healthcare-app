import mongoose, { Schema } from "mongoose"

const patentSchema = new Schema({
  id: {
    type: String,
    required: [true, "ID is required"],
    trim: true,
    minLength: [3, "ID must be at least 3 characters long"],
    maxLength: [50, "ID must be at most 50 characters long"],
  },

  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minLength: [3, "Full name must be at least 3 characters long"],
    maxLength: [50, "Full name must be at most 50 characters long"],
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [0, "Age must be at least 0"],
    max: [120, "Age must be at most 120"],
  },

  notes: {
    type: String,
    trim: true,
    minLength: [10, "Notes must be at least 10 characters long"],
    maxLength: [1000, "Notes must be at most 1000 characters long"],
  },
})

const Patient =
  mongoose.models.Patient || mongoose.model("Patient", patentSchema)

export default Patient
