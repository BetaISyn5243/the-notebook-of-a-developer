import { Schema, model, models } from 'mongoose';

export interface IUser {
  name: string;
  surname: string;
  username: string;
  password: string;
  date?: Date;
  suspended?: boolean;
  email: string;
  role?: string;
}
const userSchema = new Schema({
  name: {type:String,required:true},
  surname: {type:String,required:true},
  username: {type:String,required:true,unique:true},
  password: {type:String,required:true},
  date: { type: Date, default: Date.now },
  suspended: {type:Boolean,default:false},
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  role: {type:Schema.Types.ObjectId,ref:"Role"},
});

const User = models.User || model('User', userSchema);

export default User;