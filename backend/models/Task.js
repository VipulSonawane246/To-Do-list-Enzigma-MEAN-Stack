const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
    priority: { type: String, enum: ['Low', 'Normal', 'High'], default: 'Normal' },
});

module.exports = mongoose.model('Task', TaskSchema);