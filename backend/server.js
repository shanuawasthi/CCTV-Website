// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require("multer");
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET_KEY = "supersecretkey"; // Production me env variable use karein



// ================= Middleware =================
app.use(bodyParser.json());
app.use(cors());

// Serve static files from public folder
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, './public')));

// ================= MongoDB =================
mongoose.connect('mongodb://127.0.0.1:27017/cctv_website')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// ================= Multer for Product Images =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// ================= Models =================
const Admin = require('./models/Admin');
const Product = require('./models/Product');
const Service = require('./models/Service');

// ================= JWT Middleware =================
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(' ')[1]; // remove "Bearer "
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if(err) return res.status(401).json({ message: "Unauthorized" });
    req.adminId = decoded.id;
    next();
  });
}

// ================= Admin Login =================
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if(!admin) return res.status(401).json({ message: "Invalid username" });

    const isValid = await admin.comparePassword(password);
    if(!isValid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: admin._id, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// ================= Services APIs =================
app.get('/api/services', verifyToken, async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

app.post('/api/services', verifyToken, async (req, res) => {
  const { title, description } = req.body;
  const service = new Service({ title, description });
  await service.save();
  res.json(service);
});

app.put('/api/services/:id', verifyToken, async (req, res) => {
  const { title, description } = req.body;
  const service = await Service.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
  res.json(service);
});

app.delete('/api/services/:id', verifyToken, async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Service deleted" });
});

// ================= Products APIs =================
app.get('/api/products', verifyToken, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', verifyToken, upload.single('image'), async (req, res) => {
  const { name, category, specs, price } = req.body;
  const product = new Product({
    name,
    category,
    specs: specs.split(',').map(s => s.trim()),
    price,
    image: req.file ? "/uploads/" + req.file.filename : null
  });
  await product.save();
  res.json(product);
});

app.put('/api/products/:id', verifyToken, upload.single('image'), async (req, res) => {
  const { name, category, specs, price } = req.body;
  const update = {
    name,
    category,
    specs: specs.split(',').map(s => s.trim()),
    price
  };
  if(req.file) update.image = "/uploads/" + req.file.filename;
  const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(product);
});

app.delete('/api/products/:id', verifyToken, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// GET SINGLE PRODUCT (Public Access)
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


const publicRoute = require('./routes/public');
app.use('/api/public', publicRoute);

const contactRoute = require('./routes/contact');

// other middlewares/routes
app.use('/api/contact', contactRoute);

const homeRoutes = require("./routes/homeRoutes");
app.use("/api/home", homeRoutes);

// Routes
const chatbotRoutes = require("./routes/chatbotRoute");
app.use("/api/chatbot", chatbotRoutes);


// ================= Start Server =================
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));