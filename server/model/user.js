import mongoose from "mongoose";

const vueUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  userName: {
    type: String,
  },
  passWord: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  posts: {
    type: Array,
  },
});

vueUserSchema.pre("save", () => {
  console.log("Created new user.");
});

const VueUser = mongoose.model("VueUser", vueUserSchema);

export default VueUser;
