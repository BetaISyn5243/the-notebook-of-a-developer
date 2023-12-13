import { Schema, model, models } from 'mongoose';

export interface IRole {
  name: string;
  description: string;
  date?: Date;
  privileges: string[];
  private?: boolean;
  color?: string;
  icon?: string;
}

const roleSchema = new Schema({
  name: {type:String,required:true,unique:true},
  description: {type:String,required:true,unique:true},
  date: { type: Date, default: Date.now },
  privileges: [{type:Schema.Types.ObjectId,ref:"Privilege"}],
  private: {type:Boolean,default:false},
  color: {type:String,default:"#000000"},
  icon: {type:String,default:""},
});

const Role = models.Role || model('Role', roleSchema);

export default Role;