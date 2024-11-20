const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['Available', 'Occupied'], default: 'Available' },
});

module.exports = mongoose.model('Room', RoomSchema);
