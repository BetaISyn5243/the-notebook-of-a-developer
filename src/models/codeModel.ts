import { Schema, model, models } from 'mongoose';

export interface ICode {
  title: string;
  author?: string;
  categories: string[];
  description: string;
  code?: string;
  date?: Date;
  hidden?: boolean;
  meta?: {
    votes: number;
    fav: number;
  };
  comments?: [{ body: string; date: Date }];
  externalLinks?: [{ link: string; description: string }];
  references?: [{ link: string; description: string }];
  photos?: [{ link: string; description: string; embedLink: string }];
}

const codeScheme = new Schema({
  title: {type:String,required:true},
  author: {type:Schema.Types.ObjectId,ref:"User",default:"656ecbcd605837ffe7663374"},
  categories: [{type:Schema.Types.ObjectId,ref:"Category",required:true}],
  description: {type:String,required:true},
  code: String,
  date: { type: Date, default: Date.now },
  hidden: {type:Boolean,default:false},
  meta: {
    votes: Number,
    fav: Number,
  },
  comments: [{ body: String, date: Date }],
  externalLinks: [{ link: String, description: String }],
  references: [{ link: String, description: String }],
  photos: [{ link: String, description: String, embedLink: String }],
});

const Code = models.Code || model('Code', codeScheme);

export default Code;