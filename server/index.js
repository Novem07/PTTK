const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const phieuRouter = require('./routes/phieudangky');
app.use('/api/phieudangky', phieuRouter);

const registerRoutes = require('./routes/registerRoutes');
app.use('/api/phieudangky', registerRoutes);

const thisinhRoutes = require('./routes/thisinh');
app.use('/api/thisinh', thisinhRoutes);

const phieuduthiRoutes = require('./routes/phieuduthi');
app.use('/api/phieuduthi', phieuduthiRoutes);

const phieuduthiRouter = require('./routes/phieuduthi');
app.use('/api', phieuduthiRouter);


app.listen(5000, () => {
  console.log('Backend chạy tại http://localhost:5000');
});
