import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // delete everything cuz we dont wanna improt anything while theres stuff in the DB
    await Order.deleteMany(); // delete everything
    await Product.deleteMany(); // delete everything
    await User.deleteMany(); // delete everything
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (err) {
    console.error(`${error}`);
    process.exit(1); // passing in a one means exit wit hfailure
  }
};

const destroyData = async () => {
  try {
    // delete everything cuz we dont wanna improt anything while theres stuff in the DB
    await Order.deleteMany(); // delete everything
    await Product.deleteMany(); // delete everything
    await User.deleteMany(); // delete everything

    console.log("Data Destroyed!");
    process.exit();
  } catch (err) {
    console.error(`${error}`);
    process.exit(1); // passing in a one means exit wit hfailure
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
