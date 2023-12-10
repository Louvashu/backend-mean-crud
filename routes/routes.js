import express from "express";
import {
  getProducts,
  getProduct,
  updateProducts,
  deleteProducts,
  createProducts,
} from "../controllers/ProductController.js";

const router = express.Router();
//format 1
// router.get("/", getProducts);
// router.get("/:id", getProduct);
// router.put("/:id", updateProducts);
// router.post("/", createProducts);
// router.delete("/:id", deleteProducts);

//format 2

router.route("/").get(getProducts).post(createProducts);
router.route("/:id").get(getProduct).put(updateProducts).delete(deleteProducts);

export default router;
