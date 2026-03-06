// // backend/routes/admin.js
// const express = require('express');
// const router = express.Router();
// const Admin = require('../models/Admin');
// const jwt = require('jsonwebtoken');

// const SECRET_KEY = "supersecretkey";

// // ================= Admin Login =================
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ username });
//     if (!admin) return res.status(401).json({ message: "Invalid username" });

//     const isValid = await admin.comparePassword(password);
//     if (!isValid) return res.status(401).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: admin._id, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "supersecretkey";

// Admin login
router.post("/login", async (req,res)=>{
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if(!admin) return res.status(401).json({message:"Invalid username"});
    const valid = await admin.comparePassword(password);
    if(!valid) return res.status(401).json({message:"Invalid password"});
    const token = jwt.sign({id:admin._id, role:'admin'}, SECRET_KEY, {expiresIn:'1h'});
    res.json({token});
  } catch(err){
    res.status(500).json({message: err.message});
  }
});

module.exports = router;