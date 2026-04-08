const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", (req, res) => {
	res.json([{ id: 1, name: "Hugh Mann" }]);
});

app.post('/users', (req, res) => {
	const newUser = req.body;
	res.json({ message: 'User created', user: newUser });
});

app.put('/users/:id', (req, res) => {
	const userId = req.params.id;
	const updatedUser = req.body;
	res.json({ message: `User with ID ${userId} updated`, updatedUser });
});

app.delete('/users/:id', (req, res) => {
	const userId = req.params.id;
	res.json({ message: `User with ID ${userId} deleted` });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});