require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes (placeholder — implement when backend features are added)
// app.use('/api/patients', require('./src/routes/patientRoutes'));
// app.use('/api/doctors',  require('./src/routes/doctorRoutes'));
// app.use('/api/appointments', require('./src/routes/appointmentRoutes'));
// app.use('/api/billing', require('./src/routes/billingRoutes'));
// app.use('/api/auth',    require('./src/routes/authRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'MedPulse HMS API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use(require('./src/middleware/errorHandler'));

app.listen(PORT, () => {
  console.log(`\n✅ MedPulse HMS API running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});

