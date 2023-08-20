const { Router } = require("express");

const router = Router();

const ContactController = require("./app/controllers/contactController");

module.exports = router;

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
