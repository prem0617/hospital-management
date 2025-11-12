const mongoose = require('mongoose');

const doctorsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minLength: [2, 'First name must be at least 2 characters long'],
    maxLength: [50, 'First name must be less than 50 characters long']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minLength: [2, 'Last name must be at least 2 characters long'],
    maxLength: [50, 'Last name must be less than 50 characters long']
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required'],
    trim: true,
    minLength: [3, 'Specialization must be at least 3 characters long'],
    maxLength: [100, 'Specialization must be less than 100 characters long']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('doctors', doctorsSchema);