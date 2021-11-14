import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Products = new Schema(
  {
    title: { type: String, required: true },
    creator: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Integer, required: true },
    copies: { type: Integer, required: true },
    lowest: { type: Integer, required: true },
    highest: { type: Integer, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)