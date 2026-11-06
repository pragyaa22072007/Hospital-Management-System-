// Appointment controller stubs
exports.getAllAppointments  = async (req, res, next) => { try { res.json({ success: true, data: [] }); } catch (e) { next(e); } };
exports.createAppointment  = async (req, res, next) => { try { res.status(201).json({ success: true, data: req.body }); } catch (e) { next(e); } };
exports.updateAppointment  = async (req, res, next) => { try { res.json({ success: true, data: req.body }); } catch (e) { next(e); } };
exports.deleteAppointment  = async (req, res, next) => { try { res.json({ success: true, message: 'Deleted.' }); } catch (e) { next(e); } };

