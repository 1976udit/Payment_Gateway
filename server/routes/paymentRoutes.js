import express from "express";
import {
  checkout,
  paymentVerification,
  debugging
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/debug").get(debugging)

export default router;