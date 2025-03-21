const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing JSON dari body request
app.use(express.json());

// Contoh data statis (sebagai simulasi data di database)
let users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' }
];

// Endpoint GET: Mendapatkan daftar pengguna
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint GET: Mendapatkan data pengguna berdasarkan ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Endpoint POST: Membuat pengguna baru
app.post('/users', (req, res) => {
  const newUser = req.body; // misalnya, { username: 'user3' }
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint PUT: Mengupdate data pengguna berdasarkan ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Endpoint DELETE: Menghapus pengguna berdasarkan ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server REST API berjalan di http://localhost:${port}`);
});