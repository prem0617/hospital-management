const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patients',
    required: [true, 'Patient ID is required']
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctors',
    required: [true, 'Doctor ID is required']
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required']
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: {
      values: ['scheduled', 'completed', 'cancelled'],
      message: 'Status must be either scheduled, completed, or cancelled'
    }
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('appointments', appointmentsSchema);