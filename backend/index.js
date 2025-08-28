const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors({
	origin: 'http://localhost:5173',
}));

// Optional: If you want to parse JSON request bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express with CORS!' });
});

app.get('/api/test', (req, res) => {
	res.json({
		products: [
			{ name: 'Indomie', stock: 60 },
			{name: 'Mie Sedap', stock: 70},
		]
	})
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
