const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const partsRoutes = require('./routes/parts');
const accessoriesRoutes = require('./routes/accessories');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/parts', partsRoutes);
app.use('/api/accessories', accessoriesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
