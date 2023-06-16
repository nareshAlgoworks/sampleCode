const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()) // for parsing application/json

// Routes
app.use('/users', userRoutes);



const server = app.listen(3010, () => {
    console.log('Server is running on port 3010');
});

module.exports = {
    app,
    server
};