const jwt = require('jsonwebtoken');
const SECRET_KEY = "supersecretkey";

const adminAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.status(401).json({ message: "Access Denied" });

    const token = authHeader.split(' ')[1]; // "Bearer <token>"
    if(!token) return res.status(401).json({ message: "Token missing" });

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        if(verified.role !== 'admin') return res.status(403).json({ message: "Not an admin" });

        req.admin = verified; // attach decoded info to request
        next();
    } catch(err){
        console.error("JWT Error:", err);
        res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = adminAuth;