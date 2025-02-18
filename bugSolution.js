const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Input validation
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }

  // Simulate database lookup (replace with actual database interaction)
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user);
});

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));