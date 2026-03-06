const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://127.0.0.1:27017/cctv_website')
  .then(async () => {
    const exists = await Admin.findOne({ username: 'admin' });
    if (exists) {
      console.log('Admin already exists');
    } else {
      const newAdmin = new Admin({ username: 'admin', password: '1234' });
      await newAdmin.save();
      console.log('Admin user created');
    }
    mongoose.disconnect();
  })
  .catch(err => console.log(err));