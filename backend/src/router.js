const express = require("express");

const {
  ItemController,
  SeamanController,
  PostController,
  ProductController,
  CategoryController,
} = require("./controllers");

const router = express.Router();

router.post("/seaman", SeamanController.add);
router.get("/seaman", SeamanController.browse);
router.get("/post", PostController.browse);
router.get("/product", ProductController.browse);
router.get("/category", CategoryController.browse);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
