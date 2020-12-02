import express from "express";
import asyncHandler from "express-async-handler"; // takes care of try catch
import Product from "../models/productModel.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
