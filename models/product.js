import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Product = new Schema(
  {
    title: { type: String, required: true },
    creator: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    copies: { type: String, required: true },
    lowest: { type: String, required: true },
    highest: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)