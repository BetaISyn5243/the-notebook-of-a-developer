import { Schema, model, models } from 'mongoose';

export interface IPrivileges {
  name: string;
  id: number;
}

const privilegesSchema = new Schema({
  name: {type:String,required: true,unique:true},
  id:{type:Number,required:true,unique:true},
});

const Privileges = models.Privileges || model('Privileges', privilegesSchema);

export default Privileges;