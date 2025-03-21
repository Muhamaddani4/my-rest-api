export default function handler(req, res) {
  // Misal: endpoint GET untuk mengambil data pengguna
  if (req.method === 'GET') {
    const users = [
      { id: 1, username: 'user1' },
      { id: 2, username: 'user2' }
    ];
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Mengizinkan semua domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Jika request OPTIONS, langsung kirim response tanpa proses lebih lanjut
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const users = [
      { id: 1, username: 'user1' },
      { id: 2, username: 'user2' }
    ];
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}