const express = require("express");
const router = express.Router();

const contractsController = require("../controllers/contracts-controller");

router.route("/").get();

module.exports = router;