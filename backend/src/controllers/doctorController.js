// Doctor controller stubs
exports.getAllDoctors   = async (req, res, next) => { try { res.json({ success: true, data: [] }); } catch (e) { next(e); } };
exports.getDoctorById  = async (req, res, next) => { try { res.json({ success: true, data: null }); } catch (e) { next(e); } };
exports.createDoctor   = async (req, res, next) => { try { res.status(201).json({ success: true, data: req.body }); } catch (e) { next(e); } };
exports.updateDoctor   = async (req, res, next) => { try { res.json({ success: true, data: req.body }); } catch (e) { next(e); } };
exports.deleteDoctor   = async (req, res, next) => { try { res.json({ success: true, message: 'Deleted.' }); } catch (e) { next(e); } };

