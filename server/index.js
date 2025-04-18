const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.listen(5000, () => {
  console.log('Backend chạy tại http://localhost:5000');
});
