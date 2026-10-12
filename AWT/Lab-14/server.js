
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Prevent XSS using text output
app.get('/', (req, res) => {
    res.send(`
        <form action="/search">
            <input name="name" placeholder="Enter name">
            <button>Search</button>
        </form>
    `);
});

app.get('/search', (req, res) => {
    const name = String(req.query.name || '');
    res.send('<h2>Hello ' +
        name.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;') + '</h2>');
});

// SQL Injection prevention example
app.get('/login', (req, res) => {
    res.send('Use parameterized SQL queries to prevent SQL Injection.');
});

app.listen(3000, () => console.log('Server running on port 3000'));
