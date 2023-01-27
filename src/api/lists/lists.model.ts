import { Schema, model } from "mongoose";

export interface ListsDocument extends Document {
  tittle: string;
  description: string;
  link: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const ListsSchema = new Schema(
  {
    tittle: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const  Lists = model<ListsDocument>("lists", ListsSchema);

export default Lists;