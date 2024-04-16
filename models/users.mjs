import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
      },
      lName: {
        type: String,
        required: true,
       
      },
      phone: {
        type: Number,
        required: true,
      
      },
      staySignedIn: Boolean
});

const User = mongoose.model('User', userSchema);

export default User;