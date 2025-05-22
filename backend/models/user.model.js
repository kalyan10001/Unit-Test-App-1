import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true }
});
export const User=new mongoose.model('User', userSchema);
