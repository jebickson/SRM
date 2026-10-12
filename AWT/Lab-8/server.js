
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

app.use(express.static('public'));

const SECRET = 'mysecretkey';

// Login
app.post('/login', (req, res) => {
    const token = jwt.sign(
        { username: req.body.username }, SECRET
    );
    res.json({ token });
});

// Protected route
app.get('/profile', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    try {
        const user = jwt.verify(token, SECRET);
        res.json({ message: 'Access Granted', user });
    } catch {
        res.status(401).json({ message: 'Invalid Token' });
    }
});

app.listen(3000, () => console.log('Server running'));
