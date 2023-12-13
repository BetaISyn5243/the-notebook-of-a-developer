import { Schema, model, models } from 'mongoose';
export interface ICategory {
  name: string;
  description: string;
  date?: Date;
  hidden?: boolean;
  parent?: string;
}
const categoryScheme = new Schema({
  name: {type:String,required:true,unique:true},
  description:  {type:String,required:true,unique:true},
  date: { type: Date, default: Date.now },
  hidden: {type:Boolean,default:false},
  parent: {type:Schema.Types.ObjectId,ref:"Category"},
});

const Category = models.Category || model('Category', categoryScheme);

export default Category;