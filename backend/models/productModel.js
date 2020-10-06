import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // adds a relationship between product & user
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Nummber,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Nummber,
      required: true,
      default: 0,
    },
    price: {
      type: Nummber,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Nummber,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // creates 'createdAt' and 'updatedAt' field for us
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
