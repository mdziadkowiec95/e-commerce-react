const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');

app.use(express.json({ extended: false }));

app.use(cors());

// Routes

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
