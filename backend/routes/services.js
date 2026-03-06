// // backend/routes/services.js
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const Service = require('../models/service');

// const SECRET_KEY = "supersecretkey";

// // ================= Token Verify Middleware =================
// function verifyToken(req, res, next) {
//   let token = req.headers.authorization;
//   if (!token) return res.status(403).json({ message: "Token required" });

//   // Remove 'Bearer ' prefix if present
//   if(token.startsWith("Bearer ")) token = token.slice(7, token.length);

//   try {
//     jwt.verify(token, SECRET_KEY);
//     next();
//   } catch(err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// }

// // ================= GET All Services (Public) =================
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch(err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ================= ADD Service (Protected) =================
// router.post("/", verifyToken, async (req, res) => {
//   try {
//     const newService = new Service(req.body);
//     await newService.save();
//     res.json({ message: "Service Added Successfully" });
//   } catch(err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ================= UPDATE Service (Protected) =================
// router.put("/:id", verifyToken, async (req, res) => {
//   try {
//     const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch(err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ================= DELETE Service (Protected) =================
// router.delete("/:id", verifyToken, async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted Successfully" });
//   } catch(err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// module.exports = router;

const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "supersecretkey";

// JWT Middleware
function verifyToken(req,res,next){
  const auth = req.headers['authorization'];
  if(!auth) return res.status(401).json({message:"No token provided"});
  const token = auth.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err,decoded)=>{
    if(err) return res.status(401).json({message:"Unauthorized"});
    req.adminId = decoded.id;
    next();
  });
}

// GET all services
router.get("/", verifyToken, async (req,res)=>{
  const services = await Service.find();
  res.json(services);
});

// POST new service
router.post("/", verifyToken, async (req,res)=>{
  const {title, description} = req.body;
  const service = new Service({title, description});
  await service.save();
  res.json(service);
});

// PUT update service
router.put("/:id", verifyToken, async (req,res)=>{
  const {title, description} = req.body;
  const service = await Service.findByIdAndUpdate(req.params.id, {title, description},{new:true});
  res.json(service);
});

// DELETE service
router.delete("/:id", verifyToken, async (req,res)=>{
  await Service.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

module.exports = router;