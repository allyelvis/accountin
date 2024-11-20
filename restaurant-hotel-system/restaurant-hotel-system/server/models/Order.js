const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true },
    items: [
        {
            menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
            quantity: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
