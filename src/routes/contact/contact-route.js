import express from "express";

const contactRouter = express.Router();

contactRouter.get("/contact", (req, res) => {
  res.send("hello from contact");
});

export { contactRouter };
