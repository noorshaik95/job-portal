import mongoose from "mongoose";

export const dbInit = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27027/job_portal");
    console.log("Successfully connected to DB");
  } catch (e) {
    throw new Error("Could'nt connect to db!");
  }
};
