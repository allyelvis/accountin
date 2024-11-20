const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const roomRoutes = require('./routes/room');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
