const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let students = [{ id: 1, name: "John" }];

app.get('/students', (req, res) => res.json(students));

app.post('/students', (req, res) => {
    students.push(req.body);
    res.json(students);
});

app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.json(students);
});

app.listen(3000, () => console.log("Server running on port 3000"));