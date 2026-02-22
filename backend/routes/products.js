// // // backend/routes/products.js
// // const express = require('express');
// // const router = express.Router();
// // const Product = require('../models/product');
// // const multer = require('multer');
// // const jwt = require('jsonwebtoken');

// // const SECRET_KEY = "supersecretkey";

// // // ================= Multer Setup =================
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => cb(null, "public/uploads"),
// //   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// // });
// // const upload = multer({ storage });

// // // ================= Token Verify Middleware =================
// // function verifyToken(req, res, next) {
// //   let token = req.headers.authorization;
// //   if (!token) return res.status(403).json({ message: "Token required" });

// //   if(token.startsWith("Bearer ")) token = token.slice(7, token.length);

// //   try {
// //     jwt.verify(token, SECRET_KEY);
// //     next();
// //   } catch(err) {
// //     res.status(401).json({ message: "Invalid token" });
// //   }
// // }

// // // ================= GET All Products (Public) =================
// // router.get('/', async (req, res) => {
// //   const products = await Product.find();
// //   res.json(products);
// // });

// // // ================= ADD Product (Protected) =================
// // router.post('/', verifyToken, upload.single('image'), async (req, res) => {
// //   const { name, category, specs, price } = req.body;
// //   const image = req.file ? '/uploads/' + req.file.filename : '';
// //   const specsArray = specs ? specs.split(',') : [];

// //   const product = new Product({ name, category, specs: specsArray, price, image });
// //   await product.save();
// //   res.json({ message: "Product Added Successfully" });
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');
// const multer = require('multer');
// const path = require('path');
// const jwt = require('jsonwebtoken');

// const SECRET_KEY = "supersecretkey";

// // JWT Middleware
// function verifyToken(req,res,next){
//   const auth = req.headers['authorization'];
//   if(!auth) return res.status(401).json({message:"No token provided"});
//   const token = auth.split(' ')[1];
//   jwt.verify(token, SECRET_KEY, (err,decoded)=>{
//     if(err) return res.status(401).json({message:"Unauthorized"});
//     req.adminId = decoded.id;
//     next();
//   });
// }

// // Multer setup for image upload
// const storage = multer.diskStorage({
//   destination: (req,file,cb)=> cb(null,'public/uploads'),
//   filename: (req,file,cb)=> cb(null, Date.now()+path.extname(file.originalname))
// });
// const upload = multer({ storage });

// // GET all products
// router.get("/", verifyToken, async (req,res)=>{
//   const products = await Product.find();
//   res.json(products);
// });

// // POST new product
// router.post("/", verifyToken, upload.single('image'), async (req,res)=>{
//   const { name, category, specs, price } = req.body;
//   const image = req.file ? '/uploads/' + req.file.filename : '';
//   const product = new Product({
//     name,
//     category,
//     specs: specs ? specs.split(',') : [],
//     price,
//     image
//   });
//   await product.save();
//   res.json(product);
// });

// // PUT update product
// router.put("/:id", verifyToken, upload.single('image'), async (req,res)=>{
//   const { name, category, specs, price } = req.body;
//   const productData = {
//     name,
//     category,
//     specs: specs ? specs.split(',') : [],
//     price
//   };
//   if(req.file) productData.image = '/uploads/' + req.file.filename;
//   const product = await Product.findByIdAndUpdate(req.params.id, productData, { new:true });
//   res.json(product);
// });

// // DELETE product
// router.delete("/:id", verifyToken, async (req,res)=>{
//   await Product.findByIdAndDelete(req.params.id);
//   res.json({message:"Deleted"});
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "supersecretkey";


// ================= JWT Middleware =================
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.adminId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
}


// ================= Multer Setup =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


// ================= GET All Products =================
router.get("/", verifyToken, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});


// ================= GET Single Product (IMPORTANT for View Details) =================
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
});


// ================= ADD Product =================
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { name, category, specs, price } = req.body;

    const newProduct = new Product({
      name,
      category,
      specs: specs ? specs.split(",") : [],
      price,
      image: req.file ? "/uploads/" + req.file.filename : ""
    });

    await newProduct.save();
    res.status(201).json(newProduct);

  } catch (err) {
    res.status(500).json({ message: "Failed to add product" });
  }
});


// ================= UPDATE Product =================
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { name, category, specs, price } = req.body;

    const updateData = {
      name,
      category,
      specs: specs ? specs.split(",") : [],
      price
    };

    if (req.file) {
      updateData.image = "/uploads/" + req.file.filename;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);

  } catch (err) {
    res.status(500).json({ message: "Failed to update product" });
  }
});


// ================= DELETE Product =================
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});


module.exports = router;