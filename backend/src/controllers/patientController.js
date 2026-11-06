// Patient controller stubs — implement CRUD when backend is ready
// const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res, next) => {
  try {
    // TODO: const patients = await Patient.find();
    res.json({ success: true, data: [], message: 'Patient routes coming soon.' });
  } catch (err) { next(err); }
};

exports.getPatientById = async (req, res, next) => {
  try {
    res.json({ success: true, data: null });
  } catch (err) { next(err); }
};

exports.createPatient = async (req, res, next) => {
  try {
    res.status(201).json({ success: true, data: req.body });
  } catch (err) { next(err); }
};

exports.updatePatient = async (req, res, next) => {
  try {
    res.json({ success: true, data: req.body });
  } catch (err) { next(err); }
};

exports.deletePatient = async (req, res, next) => {
  try {
    res.json({ success: true, message: 'Deleted.' });
  } catch (err) { next(err); }
};

