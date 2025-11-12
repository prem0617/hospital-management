const mongoose = require('mongoose');

const patientRecordsSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patients',
    required: [true, 'Patient ID is required']
  },
  diagnosis: {
    type: String,
    required: [true, 'Diagnosis is required'],
    minLength: [1, 'Diagnosis must be at least 1 character long']
  },
  treatment: {
    type: String,
    required: [true, 'Treatment is required'],
    minLength: [1, 'Treatment must be at least 1 character long']
  },
  recordDate: {
    type: Date,
    required: [true, 'Record date is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('patient_records', patientRecordsSchema);