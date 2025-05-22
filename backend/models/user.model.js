import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true }
});
export default User=mongoose.model('User', userSchema);
